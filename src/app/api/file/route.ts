
import { z } from 'zod';
import { headers } from 'next/headers';

const FormSchema = z.object({
  name: z.string().min(1).max(100).trim(),
  email: z.string().email(),
  company: z.string().max(100).optional()
}).strict();

const REQUESTS = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const requestData = REQUESTS.get(ip);

  if (!requestData) {
    REQUESTS.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (now - requestData.timestamp > RATE_LIMIT_WINDOW) {
    REQUESTS.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (requestData.count >= MAX_REQUESTS) {
    return true;
  }

  requestData.count++;
  return false;
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get('content-type') ?? '';
    if (!contentType.toLowerCase().includes('application/json')) {
      return new Response('Unsupported Media Type', { status: 415 });
    }

    const headersList = headers();
    const ip = (await headersList).get('x-forwarded-for') || 'unknown';
    if (isRateLimited(ip)) {
      return new Response('Too Many Requests', { status: 429 });
    }

    const origin = req.headers.get('origin');
    if (!process.env.ALLOWED_ORIGINS?.split(',').includes(origin || '')) {
      return new Response('Forbidden', { status: 403 });
    }

    const data = await req.json();
    let parsed;
    try {
      parsed = FormSchema.parse(data);
    } catch (e) {
      if (e instanceof z.ZodError) {
        return new Response(JSON.stringify({
          error: 'Validation failed',
          details: e.format(),
          receivedData: data
        }, null, 2), { 
          status: 422,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      return new Response(JSON.stringify({
        error: 'Invalid payload',
        message: e instanceof Error ? e.message : 'Unknown error'
      }), { 
        status: 422,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Capitalize field names for Google Sheets
    const formBody = new URLSearchParams();
    const fieldMapping = {
      name: 'Name',
      email: 'Email',
      company: 'Company'
    };
    
    Object.entries(parsed).forEach(([key, value]) => {
      if (value) {
        const sheetField = fieldMapping[key as keyof typeof fieldMapping];
        formBody.append(sheetField, value.toString());
      }
    });

    if (!process.env.APPS_SCRIPT_URL) {
      throw new Error('Apps Script URL not configured');
    }

    // Add secret as a parameter instead of header
    formBody.append('x-secret', process.env.APPS_SCRIPT_SECRET || '');
    
    const downstream = await fetch(process.env.APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      redirect: 'follow',
      body: formBody.toString(),
    });

    if (!downstream.ok) {
      const errorText = await downstream.text();
      console.error('Google Apps Script error:', errorText);
      throw new Error(`Apps Script returned ${downstream.status}: ${errorText}`);
    }

    // Log successful response
    const responseText = await downstream.text();
    console.log('Google Apps Script response:', responseText);

    return new Response(null, { status: 204 });

  } catch (error) {
    console.error('Form submission failed:', {
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error',
    });
    
    return new Response('Something went wrong', { status: 502 });
  }
}


export async function POST(req: Request) {
  try {
    const contentType = req.headers.get('content-type') ?? ''
    if (!contentType.includes('application/json'))
      return new Response('Unsupported Media Type', { status: 415 })

    const data = await req.json()
    console.log('payload from form', data)

    const formBody = new URLSearchParams(data as Record<string, string>).toString()

    const res = await fetch(
      'https://script.google.com/macros/s/AKfycbwEMXnIO9BKzLkfYnYapniY2_nTUjvYHf7EeYL2AmXUTG0FwC_5Yi3MqbWQUxtNjlg6Pg/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        redirect: 'follow',
        body: formBody,
      },
    )

    if (!res.ok) {
      const text = await res.text()
      console.error('GAS error', res.status, text)
      return new Response(JSON.stringify({ ok: false }), { status: 500 })
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (err) {
    console.error('API route error', err)
    return new Response(JSON.stringify({ ok: false }), { status: 500 })
  }
}

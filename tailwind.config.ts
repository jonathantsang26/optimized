import type { Config } from "tailwindcss"

export default <Config>{
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./node_modules/keen-slider/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#111111",
      },
    },
  },
  plugins: [],
}

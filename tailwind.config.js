/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Pacifico", "cursive"],
        Lora: ["Lora", "serif"],
        Noto: ["Noto Sans", "sans-serif"]
      },
      colors: {
        purple: '#37005f',
        lightPurple: '#6e00be',
        darkGreen: '#0ba02c',
        darkSlate: '#767f8c'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')({
      datatables: true,
  }),
  ],
}


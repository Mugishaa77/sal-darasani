/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        'dm-serif-text': ['DM Serif Text', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'playfair': ['Playfair', 'serif'],
      },
      colors: {
        'dark-bg': '#0f172a',
        'lighter-grey': '#e5e7eb',
        'text-color': "#ffffff",
        'logo-blue': '#4cbdff',
        'nav-blue': '#0F0670',
        'lighter-slate': '#1e293b',
      },
    },
  },
  plugins: [],
}


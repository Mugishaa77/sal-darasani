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
      backgroundImage: {
        'custom-gradient': 'radial-gradient(circle, rgba(119,2,50,1) 0%, rgba(5,1,59,1) 91%)',
      },
      colors: {
        'dark-bg': '#05013b',
        'card-bg': '#edf4fc',
        'lighter-grey': '#e5e7eb',
        'text-color': "#ffffff",
        'logo-blue': '#4cbdff',
        'nav-blue': '#0F0670',
        'lighter-slate': '#1e293b',
        'tan': '#832A0D',
        'tan-sec': '#d2b48c',
        'baja': '#e6d8c7',
        'hover-blue': '#100966',
        'tan-third': '#fffebd',
        'bg-light': '#FAF5FC',
        'pink-bg': '#fc3f5b',
        'yellow-bg': '#ff9800',
      },
    },
  },
  plugins: [],
}


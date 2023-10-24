/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      "color-primary":"#EDE6F8",
      "color-secondary":"#C9A3FA",
      "color-backgroud":"var(--backgroud)",
      "color-backgroudBody":"var(--backgroudBody)",
      "color-neutral":"#FFFFFF",
      "color-neutral-700":"#9D9D9D",
      "color-trasparente":"rgba(0, 0, 0, 0.5);",
      "color-info":"#429FBA",
      "color-success":"#61AB61",
      "color-warning":"#F89D1D",
      "color-error":"#D8232A",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
}

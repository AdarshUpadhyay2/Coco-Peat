/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: 'rgb(40, 34, 11)', // Custom green color
        borderGreen: 'rgb(224, 228, 215)',
        headerGreen: 'rgb(244, 250, 235)',
        titleGreen: 'rgb(58, 94, 50)',
        textGreen: 'rgb(85, 122, 70)',
        hoverGreen: 'rgb(244, 250, 235)',
        buttonOrange: 'rgb(249, 247, 235)',
        buttonGreen: 'rgb(173, 173, 159)',
        categoriesHeadingGreen: 'rgb(83,83, 70)',
        categoriesGreen: 'rgb(245, 248, 235)',
        footerGreen: 'rgb(40, 34, 11)',
      },
    },
  },
  plugins: [],
};

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
        tagGreen: 'rgb(198, 173, 135)',
        hoverGreen: 'rgb(244, 250, 235)',
        buttonOrange: 'rgb(217, 119, 48)',
        buttonGreen: 'rgb(137, 162, 105)',
        buttonBrown: 'rgb(85, 68, 46)',
        categoriesHeadingGreen: 'rgb(83,83, 70)',
        categoriesGreen: 'rgb(245, 248, 235)',
        footerGreen: 'rgb(40, 34, 11)',
      },
    },
  },
  plugins: [],
};

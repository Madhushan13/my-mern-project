/** @type {import('tailwindcss').Config} */
import ('tailwindcss').Config 
export default {
  content: ["./index.html",
           "./src/**/*.{js,jsx,tsx,ts}",
          ],
  theme: {
    extend: {
      colors: {
        "green": "#0cc922",
        "red": "#FF6868",
        "secondary": "#555",
        "primaryBG": "#FCFCFC", // Custom color if needed
        "background": "#FFFFFF", // Custom color to ensure white background
      },
    },
  },
  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#39DB4A", // Custom primary color
          secondary: "#FF6868", // Custom secondary color
          accent: "#FFC107", // Custom accent color
          neutral: "#555555", // Custom neutral color
          "base-100": "#FFFFFF", // Ensure background is white
          // Add more custom theme properties as needed
        },
      },

 
    ]
}
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Add Poppins to Tailwind's default sans font
      },
      colors: {
        // Customize the default black to white
        neutral: {
          900: "#ffffff", // White
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // Use the "light" theme from DaisyUI
  },
};

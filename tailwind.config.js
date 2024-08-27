/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        default: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        md: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        lg: "4px 4px 8px rgba(0, 0, 0, 0.5)",
        xl: "5px 5px 10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  screens: {
    'xl': '1520px',
  },
  plugins: [require("tailwindcss-textshadow")],
};

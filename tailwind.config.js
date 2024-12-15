/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        kedua: "#42C2FF"
      },
      backgroundColor: {
        login: "#eaeaea",
        hover: "#42C2FF",
        navbar: "#F5F5F5",
        abu: "#BCCCDC"
      },
      width: {
        submit: "8rem"
      },
      fontFamily: {
        inter: 'Inter, sans-serif',
        popin: 'Poppins, sans-serif',
      }
    },
  },
  plugins: [],
};

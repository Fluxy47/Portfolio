/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        site: "url('./Assests/site-bg.jpg')",
        contactBg: "url('./Assests/contactBackground.jpg')",
      },
      fontSize: {
        clamp1: "clamp(16px, 5vw, 26px)",
        clamp2: "clamp(18px, 4vw, 35px)",
      },
    },
  },
  plugins: [],
};

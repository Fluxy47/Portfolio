/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        site: "url('./Assests/site-bg.jpg')",
        contactBg: "url('./Assests/contactBackground.jpg')",
      },
      content: {
        brush: "url('./Assests/brush.png')",
      },
      videos: {
        hero: "url('https://d33wubrfki0l68.cloudfront.net/ab4c4ea31f1543825102ebf15a35080cdc1397ce/b8c4f/static/images/frontpage/hero/gradient.mp4')",
      },

      fontSize: {
        clamp1: "clamp(22px, 5vw, 27px)",
        clamp2: "clamp(18px, 4vw, 36px)",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

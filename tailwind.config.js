/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "rgb(11, 11, 11)",
        "color1.15": "rgba(11, 11, 11,0.15)",
        color2: "rgb(9, 8, 15)",
        "color2.8": "rgba(9, 8, 15, 0.8)",
        "color2.6": "rgba(9, 8, 15, 0.6)",
        "color2.05": "rgba(9, 8, 15, 0.05)",
        color3: "rgb(149, 56, 226)",
        color4: "rgb(48, 156, 8)",
        "color4.1": "rgb(48, 156, 8,0.1)",
        color5: "rgb(246, 246, 246)",
        color6: "rgb(217, 217, 217)",
      },
      fontFamily: {
        Sora: "Sora",
      },
      fontSize: {
        18: "18px",
        24: "24px",
        28: "28px",
        32: "32px",
        40: "40px",
        56: "56px",
      },
      lineHeight: {
        50: "50px",
        72: "72px",
      },
    },
  },
  plugins: [require("daisyui")],
};

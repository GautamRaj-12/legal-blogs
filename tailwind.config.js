/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      light: "#ffffff",
      dark: "#262522",
      primary: "#EE6352",
      secondary: "#9FDC26",
      grey: "#FFFBF2",
    },
    fontSize: {
      headerOne: ["5rem", { lineHeight: "100%", fontWeight: "800" }],
      headerTwo: ["2.5rem", { lineHeight: "100%", fontWeight: "700" }],
      headerThree: ["1.5rem", { lineHeight: "120%", fontWeight: "700" }],
      paraOne: ["1.3125rem", { lineHeight: "140%", fontWeight: "400" }],
      paraTwo: ["1rem", { lineHeight: "140%", fontWeight: "300" }],
      subtitle: ["1.125rem", { lineHeight: "100%", fontWeight: "600" }],
      buttonText: ["0.875rem", { lineHeight: "100%", fontWeight: "500" }],
      smallText: ["0.75rem", { lineHeight: "120%", fontWeight: "500" }],
      linkText: ["1rem", { lineHeight: "120%", fontWeight: "400" }],
      boldText: ["1rem", { lineHeight: "120%", fontWeight: "500" }],
    },
  },
  plugins: [],
};

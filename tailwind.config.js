/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        blueMain: "#3452B5",
        blue: "#0D99FF",
        desactiveColor: "#A1A1A1",
        bgColor: "#F1F1F1",
        orange: "#FF8541",
        red: "#F42C00",
        violet: "#5643C1",
        pinky: "#FF7170",
        greeny: "#00CCB1",
        yellow: "#FFC700",
        green: "#14AE5C",
        strokeColor: "#EAEAEA",
        separatorCol: "#E8E8E8"
      },

      backgroundImage: {
        avatargradient1:
          "linear-gradient(to right, #091E3A 0%, #2F80ED 50%, #2D9EE0 100%)",
        bottomGradient:
          "linear-gradient(to top, rgba(240,240,240,0.7) 60%, rgba(240,240,240,0.3))",
      },

      // fontWeight: {
      //   titleMeduim: "600",
      // },
    },
  },
  plugins: [],
};

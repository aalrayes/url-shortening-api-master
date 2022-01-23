module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        darkViolet: "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        gray: "hsl(0, 0%, 75%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%)",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      maxWidth: {
        desktop: "1440px",
        mobile: "375px",
      },
      width: {
        desktop: "1440px",
      },
      fontSize: {
        body: "18px",
      },
      backgroundImage: {
        "link-pattern-desktop":
          "url('/src/assets/images/bg-shorten-desktop.svg')",
        "link-pattern-mobile":
          "url('/src/assets/images/bg-shorten-mobile.svg')",
      },
    },
  },
  plugins: [],
};

module.exports = {
content: ["./**/*.{html, js}"],
  theme: {
    extend: {},
    fontFamily: {
      OpenSans: ["Open Sans, sans serif"],
    },
    container: {
      center:true,
      padding:"1rem",
      screens:{
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

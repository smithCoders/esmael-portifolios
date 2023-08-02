module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    color: {
      mongo: "#166534",
      express: "#15803d",
      react: "#67e8f9",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};

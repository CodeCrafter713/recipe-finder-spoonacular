module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Include this if you're using the new App Router (optional)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  compilerOptions: {
    baseUrl: ".",
    paths: {
      "@/*": ["./*"]
    }
  }
};

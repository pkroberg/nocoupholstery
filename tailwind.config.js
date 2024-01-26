/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: ["*html"],
  content: [],
  theme: {
    extend: {
      colors: {
        greyscale1: "#F8F9FA",
        greyscale2: "#E9ECEF",
        greyscale3: "#DEE2E6",
        greyscale4: "#CED4DA",
        greyscale5: "#ADB5BD",
        greyscale6: "#6C757D",
        greyscale7: "#495057",
        greyscale8: "#343A40",
        greyscale9: "#212529",
      },
      fontFamily: {
        sans: ["Inconsolata", "monospace", "Open Sans", "sans-serif"],
      },
    },
    height: {
      53: "53px",
    },
  },
  plugins: [],
};

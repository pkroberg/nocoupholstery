import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        gallery: "gallery.html",
        "auto-marine": "auto-marine.html",
        "commercial-healthcare": "commercial-healthcare.html",
        furniture: "furniture.html",
        testimonials: "testimonials.html",
        contact: "contact.html",
        "about-me": "about-me.html",
      }
    }
  }
});

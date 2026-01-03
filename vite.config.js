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
        auto_marine: "auto_marine.html",
        commercial_healthcare: "commercial_healthcare.html",
        furniture: "furniture.html",
        testimonials: "testimonials.html",
        contact: "contact.html"
      }
    }
  }
});

# FOCO Upholstery Website

A responsive marketing website built for **FOCO Upholstery**, a local auto/marine, commercial/healthcare, and furniture upholstery business in Fort Collins, CO.

🔗 **Live site:** [focoupholstery.com](https://focoupholstery.com/)

## About

Client project built end-to-end as a solo developer, from the initial design to deployment. The site showcases the business's work across service categories, collects customer inquiries through a contact form, and is optimized for mobile-first browsing.

## Features

- Responsive layout across mobile, tablet, and desktop breakpoints
- Category-based photo gallery (Auto/Marine, Commercial/Healthcare, Furniture)
- Image carousel/slideshow on the homepage
- Dropdown navigation with a mobile hamburger menu
- Contact form for customer inquiries, routed via a third-party form API
- Footer with contact info and a direct link to leave a Google review

## Stack

- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first styling
- **[Vite](https://vitejs.dev/)** — dev server and build tooling
- **Vanilla JavaScript** — nav toggling, gallery/lightbox behavior
- **jQuery + [Slick Carousel](https://kenwheeler.github.io/slick/)** — homepage slideshow
- **[Web3Forms](https://web3forms.com/)** — contact form submission handling (no custom backend)

## Project Structure

```
├── index.html                   # Home page
├── gallery.html                 # Gallery landing / category selector
├── auto-marine.html             # Auto/Marine gallery
├── commercial-healthcare.html   # Commercial/Healthcare gallery
├── furniture.html               # Furniture gallery
├── contact.html                 # Contact form
├── testimonials.html            # Testimonials (in progress)
├── src/                         # Styles and JS (style.css, header.css, main.js, slider.js)
├── vite.config.js
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Contact Form Setup

The contact form submits to [Web3Forms](https://web3forms.com/), which requires a free access key. The key in this repo is a public key.

## Notes

This repository is shared for portfolio purposes with the client's permission. Live business contact details (phone, email) are public information already displayed on the deployed site.

---

Built by Parker Oberg - 2025

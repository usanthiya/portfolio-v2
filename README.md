# 🚀 Santhiya U — Personal Portfolio

A modern, responsive personal portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Features smooth animations, dark mode support, and a contact form powered by Netlify Functions and SendGrid.

---

## ✨ Features

- ⚡ **Blazing fast** — powered by Vite with optimized production builds
- 🌗 **Dark / Light mode** — persisted via `localStorage`, respects OS preference
- 🎞️ **Smooth animations** — scroll-reveal and micro-interactions via Framer Motion
- 📱 **Fully responsive** — mobile-first layout using Tailwind CSS
- 📬 **Working contact form** — serverless email delivery via Netlify Functions + SendGrid
- ♿ **Accessible** — semantic HTML, ARIA labels, keyboard-navigable

---

## 🗂️ Sections

| Section | Description |
|---|---|
| **Hero** | Animated intro with name, role, and social links |
| **About** | Profile card with photo, stats, bio, and resume link |
| **Skills** | Tech stack with icons |
| **Education** | Academic background |
| **Projects** | Featured personal and professional projects |
| **Experience** | Work history with role details |
| **Contact** | Contact form with email delivery |

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion |
| Icons | Lucide React |
| HTTP Client | Axios |
| Email Service | SendGrid |
| Deployment | Netlify (with Functions) |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/usanthiya/Portfolio_Website.git
cd new-portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

The output is generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root of the project:

```env
SENDGRID_API_KEY=your_sendgrid_api_key_here
```

> ⚠️ Never commit your `.env` file. It is already included in `.gitignore`.

On Netlify, add the same key under **Site Settings → Environment Variables**.

---

## 🌐 Deployment

This project is configured for **Netlify** deployment out of the box.

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Functions directory | `netlify/functions` |

The `netlify.toml` handles SPA redirects and routes `/api/*` requests to Netlify Functions automatically.

---

## 📬 Contact Form Setup

The contact form uses a **Netlify serverless function** to send emails via **SendGrid**.

1. Create a free [SendGrid](https://sendgrid.com/) account
2. Generate an API key with **Mail Send** permissions
3. Add the key as `SENDGRID_API_KEY` in your Netlify environment variables
4. Verify your sender email address in SendGrid

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Designed & Built with ❤️ by <a href="https://www.linkedin.com/in/usanthiya">Santhiya U</a></p>

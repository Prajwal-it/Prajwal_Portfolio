# Prajwal Banthiya — Portfolio Website (React + Vite)

A full-featured, animated dark-theme portfolio built with **Vite**, **React 18**, **TypeScript**, **Framer Motion**, and **Three.js**.

This project was migrated from Next.js to React to ensure easy, static hosting on any platform (GitHub Pages, Netlify, Vercel, etc.).

## 🚀 Quick Start

```bash
# Enter the project directory
cd portfolio-react

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Updating Your Content

**All personal content lives in one file:**
```
src/lib/data.ts
```
Edit your name, bio, projects, skills, experience, education, and achievements there.

---

## 📧 Setting Up Email (Contact Form)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service, template, and get your public key.
3. In `src/components/Contact.tsx`, replace the `handleSubmit` timeout simulation with the actual EmailJS call.

For Vite, your environment variables in `.env` must start with `VITE_`:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 🌐 Deploying to GitHub Pages

1. **Push to GitHub**: Push this folder to a GitHub repository.
2. **Deploy**:
   ```bash
   npm run deploy
   ```
   This will automatically build the project and push it to the `gh-pages` branch.
3. **Settings**: In your GitHub Repo Settings → Pages, ensure the source is set to the `gh-pages` branch.

---

## 🛠️ Tech Stack

- **Vite** — Fast dev server & build tool
- **React 18** — UI Library
- **TypeScript** — Type safety
- **Framer Motion** — Smooth animations
- **Three.js / @react-three/fiber** — Premium 3D particle background
- **Tailwind CSS** — Utility-first styling
- **Lenis** — Smooth scrolling experience

---

## 📌 Sections

| Section | ID |
|---|---|
| Hero | `#home` |
| About | `#about` |
| Skills | `#skills` |
| Projects | `#projects` |
| Experience | `#experience` |
| Education | `#education` |
| Achievements | `#achievements` |
| Contact | `#contact` |

---

Built with ❤️ by Prajwal Banthiya

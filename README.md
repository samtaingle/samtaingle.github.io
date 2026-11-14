# Samta Ingle — Frontend Developer Portfolio

A modern, high-performance, and responsive portfolio website designed for **Samta Ingle**, specializing in **Angular (v8–v16)**, TypeScript, RxJS, and scalable enterprise web solutions.

Live ready to be hosted on **GitHub Pages** with zero build configuration!

---

## 🌟 Key Features

- **Built for Recruiters & Tech Leads**: Showcases 3.3+ years of experience, 20+ reusable components, 80%+ unit test coverage, and ~35% fewer QA bugs.
- **Interactive Angular Code Window**: Hero section featuring an Angular 16 component card showcasing technical strengths in syntax-highlighted code.
- **Project Filter System**: Filter between **Enterprise & BPM**, **Real-Time & Chat**, **Desktop / Offline POS**, and **AEM + Angular**.
- **Interactive Architecture Modals**: Detailed deep-dive popups for each project explaining system design, API contracts, and key impact.
- **Dark / Light Theme Toggle**: Seamless transition with `localStorage` persistence.
- **Quick Actions**: One-click email copy to clipboard, direct mailto inquiry form, and links to GitHub & LinkedIn.
- **Zero Build Setup**: Pure HTML5, modern CSS3 with Tailwind CSS & custom design system, and vanilla JavaScript. Push to GitHub and it's live instantly!

---

## 🚀 How to Publish on GitHub Pages (Step-by-Step)

### Step 1: Initialize Git and Commit

Open PowerShell or Command Prompt in this `portfolio` directory and run:

```bash
git init
git add .
git commit -m "Initial commit: Samta Ingle Frontend Developer Portfolio"
```

### Step 2: Create a New Repository on GitHub

1. Go to [GitHub New Repository](https://github.com/new).
2. Repository name recommendation:
   - **Option A (User site - recommended)**: `samtaingle.github.io`  
     *(Your site will be live at `https://samtaingle.github.io/`)*
   - **Option B (Project site)**: `portfolio`  
     *(Your site will be live at `https://samtaingle.github.io/portfolio/`)*
3. Make it **Public**.
4. Leave "Add a README", ".gitignore", and license **unchecked** (we already have them).
5. Click **Create repository**.

### Step 3: Push to GitHub

Link your local repository to GitHub and push your code:

```bash
git branch -M main
git remote add origin https://github.com/samtaingle/<YOUR-REPO-NAME>.git
git push -u origin main
```

*(Replace `<YOUR-REPO-NAME>` with `samtaingle.github.io` or `portfolio`)*

### Step 4: Enable GitHub Pages

1. In your GitHub repository, click on **Settings** (top menu).
2. On the left sidebar under "Code and automation", click **Pages**.
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and folder `/ (root)`.
4. Click **Save**.
5. Within 1–2 minutes, your website will be live! GitHub will show a banner with your URL (e.g., `https://samtaingle.github.io/`).

---

## 🛠️ Local Preview

To preview the website locally on your computer:

### Option A: Open directly in browser
Double-click `index.html` in your file explorer to open it in Chrome, Edge, or Firefox.

### Option B: Local Python server
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## 📁 File Structure

```
portfolio/
├── index.html        # Main HTML structure with semantic sections & Tailwind CDN
├── style.css         # Custom animations, ambient glow orbs, modal & theme styling
├── script.js         # Theme toggle, filter buttons, modal logic, clipboard helper
├── .nojekyll         # Disables Jekyll on GitHub Pages to serve static files directly
└── README.md         # Documentation & deployment guide
```

---

## 📄 Adding Your Resume / CV PDF File

To allow visitors to download your actual PDF CV:
1. Copy your CV PDF file into this folder and rename it to `Samta_Ingle_Resume.pdf`.
2. In `index.html`, find the "Resume / CV" or "Get in Touch" button in the header or hero.
3. You can set the link to:
   ```html
   <a href="Samta_Ingle_Resume.pdf" download="Samta_Ingle_Resume.pdf" class="...">
     <i class="fa-solid fa-file-arrow-down mr-1"></i> Download CV
   </a>
   ```

---

Crafted with care for **Samta Ingle** | [samtaingle555@gmail.com](mailto:samtaingle555@gmail.com)


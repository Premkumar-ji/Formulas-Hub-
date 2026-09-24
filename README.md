# Formula Universe – Interactive Mathematics Revision Hub

A fast, interactive mathematics revision web application designed for competitive examinations (NIMCET, MCA, JEE). Built with React 19, Vite, Tailwind CSS, and KaTeX for crisp mathematical typesetting.

## 🚀 Features

- **18 Complete Topic Hubs**: Coordinate Geometry, Trigonometry, Calculus, Vectors, Probability, Matrices, and more.
- **KaTeX Textbook Typesetting**: Fractions, radicals, summations, integrals, matrices rendered in high-definition mathematical notation.
- **Interactive Flashcards**: Master formulas with active recall and self-assessment.
- **Search & Filter**: Instant search across 140+ mathematical formulas, properties, and proofs.
- **Bookmark & Star System**: Save essential formulas for high-yield quick review.
- **Printable Cheat Sheet**: One-click print-ready formatted reference sheet.
- **Dark / Light Theme**: Optimized contrast for both day and late-night study sessions.

## 🛠️ Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 Deploy to GitHub Pages (Automatic)

This repository includes a pre-configured GitHub Actions workflow (`.github/workflows/deploy.yml`):

1. Push your repository to GitHub.
2. In your GitHub repository:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Push to `main` (or trigger the workflow manually under the **Actions** tab).
4. Your site will automatically build and publish to `https://<your-username>.github.io/<repo-name>/`.

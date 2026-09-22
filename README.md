# Pokémon-Themed Portfolio

A personal portfolio website with two ways to experience it: a clean, professional "Normal" view, and a gamified view styled after **Pokémon FireRed**, where the portfolio's content lives inside a walkable 2D world.

🔗 Repo: [github.com/Unknown-Entity226/portfolio](https://github.com/Unknown-Entity226/portfolio)

---

## Overview

This isn't a single static page — it's a dual-view web app that switches between two completely different frontends from one entry point:

- **Normal View** — a standard, professional portfolio: projects, skills, background, and contact info, presented in a glassmorphic card layout with neon-green accents.
- **FireRed View** — the same content, reimagined as a Pokémon FireRed-style game. You walk around a tiled overworld and interact with in-game systems that map to portfolio sections:
  - **Pokédex** → Project showcase
  - **Bag** → Technical skills
  - **Trainer Card** → Background & contact info

> **Status:** The Normal view is fully implemented. The FireRed/gamified view is still in active development.

---

## 🛠 Tech Stack

| Layer | Tool |
|---|---|
| UI / state / view-toggling | React.js |
| Styling | Tailwind CSS |
| Game engine (FireRed view) | Phaser.js — 2D canvas rendering, character movement, environment traversal |
| Level design | [Tiled](https://www.mapeditor.org/) — external editor used to build the grid-based maps consumed by Phaser |

**Visual style:** glassmorphism, neon glows, and custom animations run through both view modes for a consistent feel.

---

## 📂 Project Structure

The two views are isolated into separate entry apps and switched from a shared root:

```
src/
├── main.jsx          # Entry point — switches between the two apps
├── NormalApp.jsx      # Standard portfolio view
├── FireRedApp.jsx      # Gamified Pokémon FireRed view
├── Home.jsx           # Core portfolio component (Normal view)
└── ...
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Unknown-Entity226/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run the dev server
npm run dev
```

Then open the printed local URL in your browser and toggle between the Normal and FireRed views.

---

## 🗺 Roadmap

- [x] Normal portfolio view (glassmorphic redesign, neon accents)
- [x] Dual-entry app structure (`NormalApp.jsx` / `FireRedApp.jsx`)
- [ ] Finish FireRed overworld and player movement
- [ ] Wire up Pokédex → Projects
- [ ] Wire up Bag → Skills
- [ ] Wire up Trainer Card → Background/Contact

---

## 📄 License

MIT.
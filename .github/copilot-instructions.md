# Copilot Workspace Instructions

Welcome to the Mona Mayhem workshop codebase! This file provides essential guidance for AI agents (and humans) working in this repository. It follows the Copilot agent customization best practices and is tailored for this project.

## Project Overview
- **Framework:** Astro v5
- **Language:** TypeScript/JavaScript (Node.js)
- **Purpose:** Build a retro arcade-themed web app that compares GitHub contribution graphs of two users.
- **Workshop:** Step-by-step learning experience for Copilot features in VS Code and CLI.

## Build & Test Commands
- **Start dev server:** `npm run dev`
- **Build for production:** `npm run build`
- **Preview build:** `npm run preview`

## Key Conventions
- **Pages:** Located in `src/pages/` (Astro routing)
- **API routes:** `src/pages/api/`
- **Docs:** All workshop steps and guides are in `workshop/` and `docs/`.
- **Styling:** CSS in `docs/` and referenced by Astro components.
- **No embedded secrets:** Never commit API keys or secrets.

## Documentation
- **Workshop Guide:** See `workshop/00-overview.md` for the starting point and navigation.
- **README.md:** Quick start, prerequisites, and technology stack.
- **docs/:** Contains static HTML/CSS for the workshop site.

## Agent Guidance
- **Link, don't embed:** When referencing documentation, link to the relevant file (e.g., `workshop/02-plan-and-scaffold.md`) instead of duplicating content.
- **Preserve structure:** Follow the existing file/folder structure and naming conventions.
- **ApplyTo:** If customizing for specific areas (e.g., only API routes), use `applyTo` patterns like `src/pages/api/**`.
- **Iterate:** Ask for feedback if unsure about conventions or if the workspace grows more complex.

## Potential Pitfalls
- **Astro config:** Changes to `astro.config.mjs` may require a server restart.
- **Node version:** Use Node.js 18+ for compatibility.
- **Deployment:** See `.github/workflows/deploy.yml` for GitHub Pages setup.

---

## Example Prompts
- "Create a new API route for user stats."
- "Add a new step to the workshop guide."
- "Refactor CSS for the docs site."

## Next Steps
- Consider creating agent customizations for:
  - API route generation (`applyTo: src/pages/api/**`)
  - Docs editing (`applyTo: docs/**`)
  - Workshop guide authoring (`applyTo: workshop/**`)

For more, see the [README.md](README.md) and [workshop/00-overview.md](workshop/00-overview.md).

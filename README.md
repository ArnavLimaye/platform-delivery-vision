# Platform Delivery — Vision OS

The **operating system for the Platform Delivery Head role** — a living, one-year vision that separates
**what we want to achieve (Vision)** from **how we achieve it (Processes, Checklists, Automation, Metrics)**.

Built on the **Build → Deliver → Operate** mental model, organised into six pillars plus a cross-cutting
foundation. Each pillar will later drill down into detailed processes, checklists, and dashboards.

🔗 **Live site:** https://arnavlimaye.github.io/platform-delivery-vision/

## The mental model

| Layer | Question |
|-------|----------|
| **Build** | Are we building the right platform? |
| **Deliver** | Are we delivering it predictably? |
| **Operate** | Can customers rely on it every day? |

## The six pillars

1. **Predictable Delivery** — deliver the right work, at the right quality, at the expected time
2. **High Quality Delivery** — quality built into the process, not inspected at the end
3. **Platform Productization (SCM)** — every feature makes the platform stronger, not more customized
4. **Operational Excellence** — operate confidently without heroics
5. **Customer Success & Support** — customers feel confident after go-live
6. **Continuous Improvement** — better every month, not just busier

Underpinned by a **Cross-Cutting Foundation**: Decision Frameworks, Metrics & Dashboards, and Standardized Processes.

## Tech stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Deployed to **GitHub Pages** via GitHub Actions on every push to `main`

## Local development

```bash
npm install
npm run dev      # start dev server
npm run build    # typecheck + production build to dist/
npm run preview  # preview the production build
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `dist/`
to GitHub Pages. One-time setup: in the repo, go to **Settings → Pages → Build and deployment → Source**
and select **GitHub Actions**.

> The Vite `base` is set to `/platform-delivery-vision/` in `vite.config.ts`. If you rename the repo, update it there.

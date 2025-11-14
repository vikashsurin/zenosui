# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Tooling & commands

### Installation
- Install dependencies (preferred, matches `package-lock.json`):
  - `npm install`
- You can also use Bun to run the same scripts (as shown in `README.md`):
  - `bun install` (if you prefer Bun-managed installs)

### Local development (docs + playground)
- Start the SvelteKit dev server:
  - `npm run dev`
  - or `bun run dev`
- This serves the component docs and test playground under `src/routes` (e.g. `/docs`, `/themes`, `/pallete`, `/test`).

### Building the library
- The README describes a three-step build flow using Bun:
  - `bun run build`
  - `bun run postbuild`
  - `bun run prepack`
- The equivalent using npm:
  - `npm run build`  # Vite/SvelteKit build
  - `npm run postbuild`  # runs `scripts/fixfileExtension.js` on the built output
  - `npm run prepack`  # `svelte-kit sync && svelte-package && publint`
- `npm run prepack` is also wired as `prepare`, so `npm install` will run it automatically in some npm workflows.

### Linting, formatting, and type-checking
- Lint (ESLint + Prettier check):
  - `npm run lint`
- Format (Prettier write):
  - `npm run format`
- Type-check Svelte/TS:
  - `npm run check`
- Continuous type-checking during development:
  - `npm run check:watch`

### Previewing the built app
- Preview the production build with SvelteKit:
  - `npm run preview`

### Tests
- There is currently **no `test` script** defined in `package.json` and no test runner configured.
- If you introduce a test framework (e.g. Vitest), add `npm test` and a way to run a single test (e.g. `npx vitest path/to/file.test.ts -t "test name"`) and update this section accordingly.

## High-level architecture

### Overall structure
- The project is a SvelteKit app that doubles as:
  - A **component library** exported from `src/lib` (published as `zenosui`).
  - A **documentation and playground site** under `src/routes` that showcases and exercises the components.
- Tooling:
  - `svelte.config.js` uses `@sveltejs/adapter-vercel` targeting `nodejs22.x`.
  - `vite.config.ts` registers `@tailwindcss/vite` and the SvelteKit plugin.
  - `tsconfig.json` extends `./.svelte-kit/tsconfig.json` and emits type declarations into `dist/types` for the library.

### Library entrypoint and exports (`src/lib`)
- Main entrypoint: `src/lib/index.js`:
  - Re-exports **UI components**: `export * from './ui/index.js';`
  - Re-exports **style utilities/tokens**: `export * from './style/index.js';`
  - Re-exports **utilities**: `export * from './utils/index.js';`
  - Re-exports **stores**: `export * from './stores/index.svelte.js';` (store files live under `src/lib/stores`).
  - Exposes Tailwind safelist as `tailwindSafelist` from `src/lib/tailwind.js`.
- Consumers of the library typically import from the package root (e.g. `import { Button } from 'zenosui';`), relying on this index to surface components, style helpers, and the Tailwind safelist.

### UI components (`src/lib/ui`)
- `src/lib/ui/index.js` gathers and re-exports all UI components, including:
  - Low-level **primitives** in `_primitives/` (e.g. `Div`, `Input`, `Link`, heading components).
  - Higher-level components grouped by feature folder (accordion, alert, breadcrumb, button, card, carousel, checkbox, chip, combobox, date input, dialog, icon, menus, navigations, pin input, radio, range input, select, snackbar, switch, table, tabs, text input, toast, treeview, window splitter, etc.).
  - Each feature folder usually contains Svelte components plus an `index.ts` and optional `types.ts`/`theme.js`/`style.js` for props and styling.
- Types for these components are centralized in `src/lib/types/index.ts`:
  - Defines core design tokens: `sizeTokens`, `roundTokens`, `colorTokens`, `positionTokens`, and variants like `Variant`, `ThemeVariant`.
  - Declares shared prop interfaces (`UiProps`, `StateProps`, `IconProps`) and specific component prop types (`ButtonProps`, `TextInputProps`, `MenuProps`, `NavigationMenuProps`, etc.).
  - These types are used to generate TS declaration files under `dist/types`, so changes here affect the public API surface.

### Styling and design tokens (`src/lib/style` + global CSS)
- `src/lib/style/index.js` is the style entrypoint:
  - Re-exports token modules: `colors.js`, `sizing.js`, `spacing.js`, `borders.js`, `fill.js`, `postition.js`, `presets.js`.
  - Finally re-exports from `base.js`, which depends on all of the above.
- `src/lib/style/base.js` defines `baseVariant` using `tailwind-variants`:
  - `baseVariant` combines Tailwind utility mappings for `uiFill`, `uiText`, `uiRounded`, `uiIconSize`, `uiPadding`, `uiBg`, `borderColor`, etc.
  - Components compose `baseVariant` variants to ensure consistent styling from the `UiProps` tokens.
- Global app CSS lives in `src/app.css`:
  - Imports Tailwind v4 via `@import 'tailwindcss';` and local `./styles/*.css` files.
  - Sets CSS custom properties for primary colors and focus outlines.
  - Defines core `zu_base` and `zu_base_transition` classes used by components for box-sizing and transitions.
  - Applies theme-related background and text colors on `html, body` using the `--theme-*` variables set by the theming system.

### Tailwind integration and safelist
- `src/lib/tailwind.js`:
  - Imports `safelist` from `./safelist.json` and re-exports it.
  - Intended to be consumed by Tailwind configuration to prevent dynamic utility classes from being purged.
- The `generate:safelist` script (`npm run generate:safelist`) calls `scripts/generateSafelist.js` to update `src/lib/safelist.json` based on the component library.
- When adding new dynamic Tailwind class patterns (especially ones derived from tokens/variants), ensure the safelist generation logic accounts for them so they survive Tailwind’s purge.

### Utilities and stores
- `src/lib/utils`:
  - `clickOutside.js` provides a Svelte action that invokes a callback when clicks occur outside a given node; exported via `src/lib/utils/index.js`.
- `src/lib/stores`:
  - Contains Svelte runes-based stores (e.g., `theme.svelte.js`) and an `index.svelte.ts` barrel; `src/lib/index.js` re-exports from the compiled `.svelte.js` entry.
  - These stores are part of the public library API; prefer extending them in place rather than duplicating their behavior in components.

### Theming system (`src/lib/internal/theme.js` + layouts)
- `src/lib/internal/theme.js`:
  - Defines a `themes` object with `light`, `dark`, and `coral` theme presets, expressed as CSS variables (`--brand`, `--theme-background`, etc.).
  - `applyTheme(themeName)`:
    - Guards against SSR (no-ops on the server).
    - Stores the selected theme in `localStorage` under `theme`.
    - Applies theme variables to `document.documentElement`.
    - Derives background scales (`--theme-background-50`..`950`) and `--brand-*` scales using OKLCH color math.
- `src/routes/+layout.svelte`:
  - Imports `applyTheme` and sets up a theme toggle using Svelte runes (`$state`, `$effect`).
  - On mount, reads `localStorage.theme` or `prefers-color-scheme` to decide initial theme.
  - Provides a top navigation bar with links to `/docs`, `/themes`, `/pallete`, and a theme toggle button.
- Docs layout (`src/routes/docs/+layout.svelte`) additionally forces `data-theme="light"` on the document root for consistent documentation styling.

### Documentation and navigation (`src/lib/internal` + `src/routes/docs`)
- `src/lib/internal/components.json`:
  - Central registry for documented components.
  - For each component (accordion, alert, button, card, etc.), stores:
    - `title`, `name`, `desc` (display metadata).
    - A `layout` tree describing how nested subcomponents (headers, items, triggers, etc.) compose the example.
    - Lists of primary `props` and sometimes `otherProps` grouped by subcomponent.
  - This JSON drives docs rendering and should be updated when components or APIs change.
- `src/lib/internal/componentList.js`:
  - Defines the ordered sidebar navigation for docs, mapping labels to route `href`s (e.g. `/accordion`, `/button`, `/table`).
  - This order is used for previous/next links and the docs sidebar; keep it in sync when adding or removing components.
- `src/lib/internal/docStore.svelte.js`:
  - Uses Svelte runes (`$state`, `$derived`) to track the current component index.
  - Provides `getPrev()` / `getNext()` based on `componentList` for navigation.
- `src/routes/docs/+layout.svelte`:
  - Wires together `Aside` (sidebar), `DocHeader`, `DocFooter`, and `componentList`/`components.json`.
  - Uses `IntersectionObserver` to build a dynamic “On this page” table of contents from `[data-heading]` elements in the main content area.
  - Renders the child route in the center column and inserts previous/next navigation at the bottom via `DocFooter`.

### Routes and playgrounds (`src/routes`)
- Root layout (`+layout.svelte`): global nav + theme toggle, wraps all pages.
- Docs root (`/docs`): `src/routes/docs/+page.svelte` currently renders a simple heading and defers detailed content to nested component routes (not included in the provided snippet but wired by the docs layout).
- Playground and visuals:
  - `/test` (`src/routes/test/+page.svelte`) imports example menubar, context menu, and dropdown menu components for manual testing.
  - `/themes` and `/pallete` routes provide visualizations for theme and palette configuration.
- When adding new components, you will typically:
  - Implement the Svelte component(s) under `src/lib/ui/...`.
  - Export them via `src/lib/ui/index.js` and add/adjust types in `src/lib/types/index.ts`.
  - Add docs entries to `components.json` and `componentList.js`.
  - Create or update docs routes under `src/routes/docs`.

### Build & packaging pipeline
- `npm run build` uses Vite/SvelteKit; output feeds both the app and, via `npm run prepack`, the library package.
- `npm run prepack`:
  - `svelte-kit sync` ensures the SvelteKit-generated `.svelte-kit` metadata is up to date.
  - `svelte-package` builds the library into `dist` following SvelteKit’s package conventions and `tsconfig.json` settings.
  - `publint` validates the resulting package for common publishing issues.
- `npm run postbuild` invokes `scripts/fixfileExtension.js` to post-process built files; paired with `scripts/generateSafelist.js` (used by `generate:safelist`). If you change output file extensions or safelist generation logic, adjust these scripts accordingly.

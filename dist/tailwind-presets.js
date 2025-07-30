// ui-lib/src/lib/tailwind-preset.js (or at root level)
export const uiLibPreset = {
    content: [
        './node_modules/ui-lib/**/*.{js,ts,svelte}',
    ],
    safelist: [
        // 🔥 This ensures text-8xl gets compiled
        { pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/ },
        { pattern: /rounded-(none|sm|md|lg|xl|2xl|3xl|full)/ },
    ],
    theme: {
        extend: {
            // your design system
        }
    }
    // ... rest of preset
};
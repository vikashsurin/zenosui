export const themes = {
    light: {
        '--brand': '#1E88E5',
        '--brand-text': '#fff',
        '--theme-background': '#eee',
        '--theme-foreground': '#111',
        '--theme-border': '#444',
    },
    dark: {
        '--brand': '#1E88E5',
        '--brand-text': '#fff',
        '--theme-background': '#111',
        '--theme-foreground': '#eee',
        '--theme-border': '#444',
    },

};

const theme_bg = {
    '--theme-background-50': 'oklch(from var(--theme-background) 98% calc(c * 0.1) h)',
    '--theme-background-100': 'oklch(from var(--theme-background) 94% calc(c * 0.2) h)',
    '--theme-background-200': 'oklch(from var(--theme-background) 88% calc(c * 0.4) h)',
    '--theme-background-300': 'oklch(from var(--theme-background) 80% calc(c * 0.6) h)',
    '--theme-background-400': 'oklch(from var(--theme-background) 70% calc(c * 0.8) h)',
    '--theme-background-500': 'oklch(from var(--theme-background) 52% c h)',
    '--theme-background-600': 'oklch(from var(--theme-background) 43% calc(c * 0.92) h)',
    '--theme-background-700': 'oklch(from var(--theme-background) 36% calc(c * 0.8) h)',
    '--theme-background-800': 'oklch(from var(--theme-background) 26% calc(c * 0.72) h)',
    '--theme-background-900': 'oklch(from var(--theme-background) 18% calc(c * 0.36) h),',
    '--theme-background-950': 'oklch(from var(--theme-background) 6% calc(c * 0.08) h)'
}

/**
 * Applies a theme to the document by setting CSS variables
 * @param {string} themeName - The name of the theme to apply
 */


export function applyTheme(themeName) {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
        return; // SSR environment, skip
    }

    try {
        const theme = themes[themeName];
        const root = document.documentElement;
        Object.entries(theme).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });

        Object.entries(theme_bg).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });
    } catch (error) {
        console.error('Failed to apply theme:', error);
    }
}
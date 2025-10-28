export const themes = {
    light: {
        '--brand': '#fff',
        '--brand-text': '#111',
        '--theme-background': '#f9f9f9',
        '--theme-foreground': '#111',
        '--theme-border': '#444',
    },
    dark: {
        '--brand': '#111',
        '--brand-text': '#fff',
        '--theme-background': '#111',
        '--theme-foreground': '#eee',
        '--theme-border': '#444',
    },
    coral: {
        '--brand': 'coral',
        '--brand-text': '#fff',
        '--theme-background': '#f9f9f9',
        '--theme-foreground': '#111',
        '--theme-border': '#444',
    },
};

const theme_bg_light = {
    '--theme-background-50': 'oklch(from var(--theme-background) 98% calc(c * 0.1) h)',
    '--theme-background-100': 'oklch(from var(--theme-background) 94% calc(c * 0.2) h)',
    '--theme-background-200': 'oklch(from var(--theme-background) 88% calc(c * 0.4) h)',
    '--theme-background-300': 'oklch(from var(--theme-background) 80% calc(c * 0.6) h)',
    '--theme-background-400': 'oklch(from var(--theme-background) 70% calc(c * 0.8) h)',
    '--theme-background-500': 'oklch(from var(--theme-background) 52% c h)',
    '--theme-background-600': 'oklch(from var(--theme-background) 43% calc(c * 0.92) h)',
    '--theme-background-700': 'oklch(from var(--theme-background) 36% calc(c * 0.8) h)',
    '--theme-background-800': 'oklch(from var(--theme-background) 26% calc(c * 0.72) h)',
    '--theme-background-900': 'oklch(from var(--theme-background) 18% calc(c * 0.36) h)',
    '--theme-background-950': 'oklch(from var(--theme-background) 6% calc(c * 0.08) h)'
}

const theme_bg_dark = {
    '--theme-background-950': 'oklch(from var(--theme-background) 98% calc(c * 0.1) h)',
    '--theme-background-900': 'oklch(from var(--theme-background) 94% calc(c * 0.2) h)',
    '--theme-background-800': 'oklch(from var(--theme-background) 88% calc(c * 0.4) h)',
    '--theme-background-700': 'oklch(from var(--theme-background) 80% calc(c * 0.6) h)',
    '--theme-background-600': 'oklch(from var(--theme-background) 70% calc(c * 0.8) h)',
    '--theme-background-500': 'oklch(from var(--theme-background) 52% c h)',
    '--theme-background-400': 'oklch(from var(--theme-background) 43% calc(c * 0.92) h)',
    '--theme-background-300': 'oklch(from var(--theme-background) 36% calc(c * 0.8) h)',
    '--theme-background-200': 'oklch(from var(--theme-background) 26% calc(c * 0.72) h)',
    '--theme-background-100': 'oklch(from var(--theme-background) 18% calc(c * 0.36) h)',
    '--theme-background-50': 'oklch(from var(--theme-background) 6% calc(c * 0.08) h)'
}

const brand = {
    '--brand-50': 'oklch(from var(--brand) 98% calc(c * 0.1) h)',
    '--brand-100': 'oklch(from var(--brand) 94% calc(c * 0.2) h)',
    '--brand-200': 'oklch(from var(--brand) 88% calc(c * 0.4) h)',
    '--brand-300': 'oklch(from var(--brand) 80% calc(c * 0.6) h)',
    '--brand-400': 'oklch(from var(--brand) 70% calc(c * 0.8) h)',
    '--brand-500': 'oklch(from var(--brand) 52% c h)',
    '--brand-600': 'oklch(from var(--brand) 43% calc(c * 0.92) h)',
    '--brand-700': 'oklch(from var(--brand) 36% calc(c * 0.8) h)',
    '--brand-800': 'oklch(from var(--brand) 26% calc(c * 0.72) h)',
    '--brand-900': 'oklch(from var(--brand) 18% calc(c * 0.36) h)',
    '--brand-950': 'oklch(from var(--brand) 6% calc(c * 0.08) h)'
}
/**
 * Applies a theme to the document by setting CSS variables
 * @param {string} themeName - The name of the theme to apply
 */



export function applyTheme(themeName) {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
        return; // SSR environment, skip
    }
    localStorage.setItem('theme', themeName);
    console.log("switching theme!")

    try {
        const theme = themes[themeName];
        const root = document.documentElement;
        Object.entries(theme).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });

        // console.log('is', isLighterThanGray(root.style.getPropertyValue('--theme-background')))

        let theme_bg;
        if (isLighterThanGray(root.style.getPropertyValue('--theme-background'))) {
            theme_bg = theme_bg_light;
        } else {
            theme_bg = theme_bg_dark;
        }

        Object.entries(theme_bg).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });

        Object.entries(brand).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });
    } catch (error) {
        console.error('Failed to apply theme:', error);
    }
}



function isLighterThanGray(hex) {
    hex = hex.replace('#', '');
    // Expand 3-digit hex
    if (hex.length === 3)
        hex = hex.split('').map(x => x + x).join('');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
    return brightness > 128; // true = lighter than gray
}

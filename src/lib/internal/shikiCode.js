import { createHighlighter } from 'shiki';

/**
 * @param {string} code
 */
export async function shikiCode(code) {
    const highlighter = await createHighlighter({
        themes: ['vesper', 'github-light'],
        langs: ['javascript', 'svelte'],
    });

    const highlighted = highlighter.codeToHtml(code, {
        lang: 'svelte',
        theme: 'github-light',
    });
    return highlighted;
}

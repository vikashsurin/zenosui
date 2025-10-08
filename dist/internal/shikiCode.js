import { createHighlighter } from 'shiki';

/**
 * @param {string} code
 */
export async function shikiCode(code) {


    const highlighter = await createHighlighter({
        themes: ['vesper', 'github-light'],
        langs: ['javascript', 'svelte'],
    });

    let highlighted = highlighter.codeToHtml(code, {
        theme: 'github-light',
        lang: 'svelte',
        decorations: [

        ],
        transformers: [

        ]
    });


    return highlighted;
}

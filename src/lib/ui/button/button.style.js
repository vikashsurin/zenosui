

export const base = 'zu_button btn inline-flex justify-center items-center  py-[0.5em] px-[0.75em] gap-[0.5em]'


export const btn_themes = {
    light: 'bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700',
    dark: 'bg-gray-900 text-white hover:bg-gray-600 active:bg-gray-700',
}


export const btn_variants = {
    solid: 'bg-[var(--button-color-500)] hover:bg-[var(--button-color-400)] active:bg-[var(--button-color-600)]',
    filled: 'bg-[var(--button-color-50)] hover:bg-[var(--button-color-100)] active:bg-[var(--button-color-200)] text-[var(--button-color-500)]  active:text-[var(--button-color-600)]',
    outlined: 'bg-transparent text-[var(--button-color-500)] border border-[var(--button-color-500)] hover:border-[var(--button-color-400)] active:border-[var(--button-color-600)] active:text-[var(--button-color-600)] hover:bg-tranparent active:bg-tranparent ',
    dashed: 'bg-transparent border-dashed border-[0.1em] text-[var(--button-color-500)] hover:text-[var(--button-color-400)] active:text-[var(--button-color-600)] hover:bg-tranparent active:bg-tranparent ',
    ghost: 'bg-transparent hover:bg-[var(--button-color-100)] active:bg-[var(--button-color-200)] text-[var(--button-color-500)]  active:text-[var(--button-color-600)] ',
    link: 'bg-transparent text-[var(--button-color-500)] hover:text-[var(--button-color-400)] active:text-[var(--button-color-600)] hover:bg-tranparent active:bg-tranparent ',
}   
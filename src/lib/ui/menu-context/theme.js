

const baseMenuItem = 'px-[0.7em] py-[0.2em] w-full text-nowrap text-left flex items-center gap-[0.5em]'

export const menuItemTheme = `${baseMenuItem} text-[var(--theme-text)] focus-within:bg-[var(--theme-background-200)] hover:bg-[var(--theme-background-200)] active:bg-[var(--theme-background-300)]`;


export const menuTriggerTheme = `${baseMenuItem}  text-[var(--theme-text)] focus:bg-[var(--theme-background-200)]`;

export const activeMenuTrigger = `bg-[var(--theme-background-200)]`;




export const menuContentTheme = `bg-[var(--theme-background)] text-[var(--theme-foreground)] border-1 border-[var(--theme-border)] `
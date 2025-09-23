/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx for conditional classes and twMerge for Tailwind conflict resolution
 *
 * @param inputs - Class values to merge (strings, objects, arrays, etc.)
 * @returns Merged and deduplicated class string
 *
 * @example
 * cn('px-2 py-1', 'px-4') // 'py-1 px-4' (px-2 is overridden)
 * cn('bg-red-500', condition && 'bg-blue-500') // conditional classes
 * cn({ 'active': isActive, 'disabled': isDisabled }) // object notation
 */
export declare function cn(...inputs: string[]): string;
/**
 * Simple variant utility without the overhead of tailwind-variants
 * Creates a function that applies base classes and variant-specific classes
 *
 * @example
 * const button = createVariants({
 *   base: 'px-4 py-2 uiRounded',
 *   variants: {
 *     color: {
 *       primary: 'bg-blue-500 text-white',
 *       secondary: 'bg-gray-200 text-gray-900'
 *     },
 *     uiSize: {
 *       sm: 'px-2 py-1 text-sm',
 *       lg: 'px-6 py-3 text-lg'
 *     }
 *   },
 *   defaultVariants: {
 *     color: 'primary',
 *     uiSize: 'sm'
 *   }
 * });
 *
 * button({ color: 'secondary', uiSize: 'lg', class: 'extra-class' })
 */
export declare function createVariants<T extends Record<string, Record<string, string>>>(config: {
    base?: string;
    variants?: T;
    defaultVariants?: Partial<{
        [K in keyof T]: keyof T[K];
    }>;
}): (props?: Partial<{ [K in keyof T]: keyof T[K]; }> & {
    class?: string;
}) => string;
/**
 * Even simpler variant creator for basic use cases
 *
 * @example
 * const buttonVariants = variants(
 *   'px-4 py-2 uiRounded transition-colors',
 *   {
 *     primary: 'bg-blue-500 text-white hover:bg-blue-600',
 *     secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300'
 *   }
 * );
 *
 * buttonVariants('primary', 'extra-class') // returns merged classes
 */
export declare function variants(base: string, variants: Record<string, string>): (variant?: string, className?: string) => string;

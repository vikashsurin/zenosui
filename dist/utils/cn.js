import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
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
export function cn(...inputs) {
    return twMerge(clsx(inputs)) || '';
}
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
export function createVariants(config) {
    return function (props = {}) {
        let classes = config.base || '';
        // Apply default variants first
        if (config.defaultVariants) {
            for (const [key, value] of Object.entries(config.defaultVariants)) {
                if (config.variants?.[key]?.[value]) {
                    classes += ' ' + config.variants[key][value];
                }
            }
        }
        // Apply provided variants, overriding defaults
        if (config.variants) {
            for (const [key, value] of Object.entries(props)) {
                if (key !== 'class' && value && config.variants[key]?.[value]) {
                    classes += ' ' + config.variants[key][value];
                }
            }
        }
        // Merge with custom classes
        return cn(classes, props?.class || '');
    };
}
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
export function variants(base, variants) {
    return function (variant, className) {
        const variantClass = variant && variants[variant] ? variants[variant] : '';
        return cn(base, variantClass, className || '');
    };
}

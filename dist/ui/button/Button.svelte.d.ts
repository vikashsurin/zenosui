import type { ButtonProps } from '../../types/index.js';
/**
 * Button
 *
 * **Props:**
 *
 * - `label` (string): The main text.
 * - `iconLeft` (Component): Optional icon before label.
 * - `href` (string): Renders as link if provided.
 * - `activeClass` (string): Active state CSS class.
 * - `active` (boolean): Active state.
 * - `uiRounded, uiSize, class, ref, uiBg, uiVariant and so on`.
 */
declare const Button: import("svelte").Component<ButtonProps, {}, "ref">;
type Button = ReturnType<typeof Button>;
export default Button;

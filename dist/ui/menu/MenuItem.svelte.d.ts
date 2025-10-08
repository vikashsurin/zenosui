import type { MenuItemProps } from '../../types/index.js';
import { type Component } from 'svelte';
declare const MenuItem: Component<MenuItemProps, {}, "checked">;
type MenuItem = ReturnType<typeof MenuItem>;
export default MenuItem;

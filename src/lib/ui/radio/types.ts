import type { SizeVariant } from '$lib/types/index.ts';
import type { UUID } from 'crypto';

export type RadioContextType = {
	checkedId: string | null;
	value: string | number | null;
	uiSize: SizeVariant;
};

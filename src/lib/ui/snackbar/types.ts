import type { PositionVariant } from '$lib/types/index.ts';
import type { UUID } from 'crypto';

export type Snackbar = {
	message: string;
	id?: UUID;
	position?: PositionVariant;
	duration?: number;
	styleClass?: string;
	xBtnStyleClass?: string;
	fresh?: boolean;
	action: {
		name: string;
		callback: () => void;
	};
};

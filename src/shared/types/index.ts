import { ReactNode } from 'react';

import { BadgeVariant } from '~/shared/ui';

export enum ModuleType {
	DMARKET = 'DMARKET',
	CSGOCOM = 'CSGOCOM',
	BITSKINS = 'BITSKINS',
}

export interface Module {
	name: string;
	icon: ReactNode;
	type: ModuleType;
	badges: BadgeVariant[];
	disabled?: boolean;
	remainingDays: number;
	endDate: string;
}

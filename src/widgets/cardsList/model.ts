import { Module, ModuleType } from '~/shared/types';
import { BadgeVariant } from '~/shared/ui';

import BitskinsLogo from './icons/bitskins.svg';
import CsgocomLogo from './icons/csgocom.svg';
import DmarketLogo from './icons/dmarket.svg';

export const MODULES: Module[] = [
	{
		name: 'Dmarket',
		icon: DmarketLogo,
		type: ModuleType.DMARKET,
		badges: [BadgeVariant.GREEN, BadgeVariant.RED],
		remainingDays: 3,
		endDate: '28.11.2024',
	},
	{
		name: 'Csgo.com',
		icon: CsgocomLogo,
		type: ModuleType.CSGOCOM,
		badges: [BadgeVariant.RED],
		disabled: true,
		remainingDays: 28,
		endDate: '28.11.2024',
	},
	{
		name: 'Bitskins.com',
		icon: BitskinsLogo,
		type: ModuleType.BITSKINS,
		badges: [BadgeVariant.GREEN],
		remainingDays: 28,
		endDate: '28.11.2024',
	},
];

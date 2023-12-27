import clsx from 'clsx';
import { ObjectHTMLAttributes } from 'react';

import cls from './Badge.module.scss';
import BuyIcon from './icons/buy.svg';
import SellIcon from './icons/sell.svg';

export enum BadgeVariant {
	GREEN = 'green',
	RED = 'red',
}

export interface BadgeProps extends ObjectHTMLAttributes<HTMLDivElement> {
	variant?: BadgeVariant;
}

export const Badge = (props: BadgeProps) => {
	const { className, variant = BadgeVariant.GREEN } = props;

	const mods = {
		[cls[variant]]: true,
	};

	return (
		<div className={clsx(cls.badge, mods, className)}>
			{variant === BadgeVariant.GREEN && (
				<>
					<BuyIcon />
					Покупка
				</>
			)}
			{variant === BadgeVariant.RED && (
				<>
					<SellIcon />
					Продажа
				</>
			)}
		</div>
	);
};

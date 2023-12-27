import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

import ArrowIcon from './icons/arrow.svg';
import cls from './Switch.module.scss';

export interface SwitchProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	checked: boolean;
}

export const Switch = (props: SwitchProps) => {
	const { className, checked, ...otherProps } = props;

	const mods = {
		[cls.checked]: checked,
	};

	return (
		<button className={clsx(cls.switch, mods, className)} type="button" {...otherProps}>
			<div className={cls.box} />

			<ArrowIcon />
		</button>
	);
};

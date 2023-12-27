import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

import cls from './Button.module.scss';

export enum ButtonVariant {
	PRIMARY = 'primary',
	OUTLINE = 'outline',
	FILL = 'fill',
	CLEAR = 'clear',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	icon?: ReactNode;
	fullWidth?: boolean;
}

export const Button = (props: ButtonProps) => {
	const {
		className,
		variant = ButtonVariant.PRIMARY,
		icon,
		disabled,
		fullWidth,
		children,
		...otherProps
	} = props;

	const mods = {
		[cls[variant]]: true,
		[cls.disabled]: disabled,
		[cls.fullWidth]: fullWidth,
	};

	return (
		<button disabled={disabled} className={clsx(cls.button, mods, className)} {...otherProps}>
			{icon}

			{children}
		</button>
	);
};

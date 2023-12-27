import clsx from 'clsx';
import { HTMLAttributes } from 'react';

import cls from './Container.module.scss';

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

export const Container = (props: ContainerProps) => {
	const { className, ...otherProps } = props;

	return <div className={clsx(cls.container, className)} {...otherProps} />;
};

import clsx from 'clsx';
import { HTMLAttributes } from 'react';

import { Module } from '~/shared/types';
import { Badge, Button, ButtonVariant } from '~/shared/ui';
import { Switch } from '~/shared/ui/switch/Switch.tsx';

import cls from './Card.module.scss';
import EditIcon from './icons/edit.svg';
import TimeIcon from './icons/time.svg';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
	data: Module;
}

const days: Record<string, string> = {
	'1': 'день',
	'2': 'дня',
	'3': 'дня',
	'4': 'дня',
};

const getDayText = (remainingDays: number) => {
	const lastDayNum = remainingDays.toString().at(-1)!;
	return days[lastDayNum] ?? 'дней';
};

export const Card = (props: CardProps) => {
	const { className, data, ...otherProps } = props;

	return (
		<div className={clsx(cls.card, className)} {...otherProps}>
			<div className={cls.header}>
				{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
				{/* @ts-expect-error */}
				<data.icon className={cls.icon} />
				{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
				{/* @ts-expect-error */}
				{!data.disabled && <data.icon className={cls.iconFilter} />}

				<div className={cls.info}>
					<h3 className={cls.name}>{data.name}</h3>

					<div className={cls.badgesList}>
						{data.badges.map((badge) => (
							<Badge key={badge} variant={badge} />
						))}
					</div>
				</div>
			</div>
			<div className={cls.body}>
				<div className={cls.propertiesList}>
					<div className={cls.property}>
						Доступен еще
						<div className={cls.line} />
						<span className={data.remainingDays < 4 ? cls.red : undefined}>
							{data.remainingDays} {getDayText(data.remainingDays)}
						</span>
					</div>
					<div className={cls.property}>
						Дата окончания
						<div className={cls.line} /> <span>{data.endDate}</span>
					</div>
					<div className={cls.property}>
						Одновременных аккаунтов
						<div className={cls.line} />
						<div className={cls.editContainer}>
							<span>20</span>
							<Button className={cls.editButton} variant={ButtonVariant.CLEAR} icon={<EditIcon />}>
								Ред.
							</Button>
						</div>
					</div>
				</div>

				<div className={clsx(cls.property, cls.extension)}>
					<div>
						Автопродление <span>( 1 месяц )</span>
					</div>
					<Switch checked={data.disabled ?? false} />
				</div>

				<Button
					className={cls.button}
					disabled={data.disabled}
					fullWidth={true}
					icon={<TimeIcon />}
				>
					Продлить
				</Button>
			</div>
		</div>
	);
};

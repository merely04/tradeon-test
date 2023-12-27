import { Card } from '~/widgets/card/Card.tsx';

import * as model from './model.ts';
import cls from './CardsList.module.scss';
import DmarketLogo from './icons/dmarket.svg';

export const CardsList = () => {
	return (
		<div>
			<h2 className={cls.title}>
				<DmarketLogo /> Dmarket
			</h2>

			<ul className={cls.list}>
				{model.MODULES.map((model, index) => (
					<li key={index}>
						<Card data={model} />
					</li>
				))}
			</ul>
		</div>
	);
};

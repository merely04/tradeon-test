import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { Fragment } from 'react';

import { Button, ButtonVariant } from '~/shared/ui';

import * as model from './model.ts';
import cls from './Header.module.scss';
import HelpIcon from './icons/info.svg';
import SlashIcon from './icons/slash.svg';

export const Header = () => {
	return (
		<header className={cls.header}>
			<PagesList />

			<CategoriesList />
		</header>
	);
};

const PagesList = () => {
	const [selectedPage, onPageClicked] = useUnit([model.$selectedPage, model.pageClicked]);

	return (
		<nav className={cls.pagesList}>
			{model.PAGES.map((pageName, index) => (
				<Fragment key={pageName}>
					<a href="#">
						<Button
							onClick={() => onPageClicked(pageName)}
							className={clsx(cls.page, { [cls.selectedPage]: selectedPage === pageName })}
							variant={ButtonVariant.CLEAR}
						>
							{pageName}
						</Button>
					</a>

					{index + 1 < model.PAGES.length && <SlashIcon />}
				</Fragment>
			))}

			<a href="#faq">
				<Button className={cls.help} variant={ButtonVariant.CLEAR}>
					<HelpIcon />
					Как это работает?
				</Button>
			</a>
		</nav>
	);
};

const CategoriesList = () => {
	const [selectedCategory, onCategoryClicked] = useUnit([
		model.$selectedCategory,
		model.categoryClicked,
	]);

	return (
		<ul className={cls.categoriesList}>
			{model.CATEGORIES.map((categoryName) => (
				<li key={categoryName}>
					<Button
						onClick={() => onCategoryClicked(categoryName)}
						variant={selectedCategory === categoryName ? ButtonVariant.FILL : ButtonVariant.OUTLINE}
					>
						{categoryName}
					</Button>
				</li>
			))}
		</ul>
	);
};

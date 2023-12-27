import { createEvent, createStore, sample } from 'effector';

export const PAGES = ['Модули торговли', 'Мои модули'];

export const CATEGORIES = ['Все', 'Комбо', 'Покупка', 'Продажа'];

export const $selectedPage = createStore<string>(PAGES[1]);

export const pageClicked = createEvent<string>();

export const $selectedCategory = createStore<string>(CATEGORIES[0]);

export const categoryClicked = createEvent<string>();

sample({
	clock: pageClicked,
	target: $selectedPage,
});

sample({
	clock: categoryClicked,
	target: $selectedCategory,
});

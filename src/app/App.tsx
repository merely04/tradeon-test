import { CardsList } from '~/widgets/cardsList';
import { Header } from '~/widgets/header';

import { Container } from '~/shared/ui';

import './styles/global.scss';

export const App = () => {
	return (
		<Container>
			<Header />

			<CardsList />
		</Container>
	);
};

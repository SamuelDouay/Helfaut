import { Component, Div } from '../../global';
import { NewsList } from './NewsList';

export class News extends Component {
	constructor() {
		super('div', { name: 'id', value: 'new_homepage' }, [
			new Div({ name: 'id', value: 'tille_new' }, 'Informations'),
			new NewsList([
				{ date: '30 avril 2021', info: 'LOREM IPSUM 1' },
				{ date: '30 mai 2021', info: 'LOREM IPSUM 2' },
			]),
		]);
	}
}

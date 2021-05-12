import { Component, Div } from '../../global';

export class News extends Component {
	constructor() {
		super('div', { name: 'id', value: 'new_homepage' }, [
			new Div({ name: 'id', value: 'tille_new' }, 'Informations'),
		]);
	}
}

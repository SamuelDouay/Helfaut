import { Component } from '../../global';

export class Carte extends Component {
	constructor() {
		super('div', { name: 'id', value: 'carte_homepage' }, [
			new Component('img', [
				{ name: 'src', value: '/images/maphelfaut.png' },
				{ name: 'alt', value: 'Carte' },
			]),
		]);
	}
}

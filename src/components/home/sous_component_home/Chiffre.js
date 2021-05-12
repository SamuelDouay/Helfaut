import { Component, Div } from '../../global';

export class Chiffre extends Component {
	constructor() {
		super('div', { name: 'id', value: 'chiffre_home_page' }, [
			new Div({ name: 'class', value: 'donnee_value' }, [
				new Component(
					'h1',
					{ name: 'class', value: 'nom_value' },
					'Superficie'
				),
				new Component(
					'h2',
					{ name: 'class', value: 'chiffre_value' },
					'8.2 km²'
				),
			]),
			new Div({ name: 'class', value: 'donnee_value' }, [
				new Component(
					'h1',
					{ name: 'class', value: 'nom_value' },
					'Nb habitants'
				),
				new Component('h2', { name: 'class', value: 'chiffre_value' }, '1 642'),
			]),
		]);
	}
}

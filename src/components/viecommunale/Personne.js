import { Component, Div } from '../global';

export class Personne extends Component {
	constructor({ nom, prenom, fonction }) {
		super('div', { name: 'class', value: 'personne' }, [
			new Div({ name: 'class', value: 'photo_personne' }, ''),
			new Div({ name: 'class', value: 'info_personne' }, [
				new Div(null, `${nom} ${prenom}`),
				new Div(null, fonction),
			]),
		]);
	}
}

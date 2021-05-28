import { Component, Div } from '../../global';

export class Information extends Component {
	constructor() {
		super('div', { name: 'id', value: 'information_homepage' }, [
			new Div({ name: 'id', value: 'info_title' }, "Mairie d'Helfaut"),
			new Div({ name: 'id', value: 'info_horaire' }, 'Ouvert - Ferme à 17h30'),
		]);
	}
}

import { Component, Div } from '../../global';

export class Information extends Component {
	constructor() {
		super('div', { name: 'id', value: 'information_homepage' }, [
			new Div({ name: 'id', value: 'info_title' }, "Mairie d'Helfaut"),
			new Div(
				{ name: 'id', value: 'addresse_info' },
				'74 Rue du Pipestraque, </br> 62570 Helfaut'
			),
			new Div({ name: 'id', value: 'info_horaire' }, 'Ouvert - Ferme à 17h30'),
			new Div({ name: 'id', value: 'info_num_tel' }, '03 21 93 80 07'),
			new Div({ name: 'id', value: 'info_mail' }, 'commune.helfaut@wanadoo.fr'),
		]);
	}
}

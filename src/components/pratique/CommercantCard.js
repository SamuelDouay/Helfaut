import { Component } from '../global';

export class CommercantCard extends Component {
	constructor({ nom, prenom, description, adresse, numero, horraire }) {
		super(
			'div',
			{ name: 'class', value: 'commercant_card' },
			`${nom} - ${prenom} - ${description} | ${adresse} - ${numero} - ${horraire}`
		);
	}
}

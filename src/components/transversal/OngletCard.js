import { Component } from '../global';

export class OngletCard extends Component {
	constructor({ largeur, nbId, value }) {
		super(
			'li',
			[
				{ name: 'style', value: `width : ${largeur}%;` },
				{ name: 'id', value: `#onglet_${nbId}` },
				nbId === 1 ? { name: 'class', value: 'onglet_active' } : {},
			],
			value
		);
	}
}

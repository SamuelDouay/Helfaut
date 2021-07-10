import { Component } from '../global';

export class OngletCard extends Component {
	constructor({ largeur, nbId, value }, current) {
		const mediaMatches = window.matchMedia('(max-width : 400px)').matches;
		super(
			'li',
			[
				{
					name: 'style',
					value: `width : ${largeur}%; ${
						nbId != current && nbId != -1 && mediaMatches ? 'display:none;' : ''
					}`,
				},
				{ name: 'id', value: `#onglet_${nbId}` },
				nbId === current ? { name: 'class', value: `onglet_active` } : {},
			],
			value
		);
	}
}

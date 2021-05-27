import { Component } from '../global';

export class OngletContentCard extends Component {
	constructor({ nbId, value }, current) {
		super(
			'div',
			[
				{ name: 'class', value: 'container_onglet_contenue' },
				{ name: 'id', value: `onglet_${nbId}` },
				nbId === current
					? { name: 'style', value: 'display:block;' }
					: { name: 'style', value: 'display:none;' },
			],
			value
		);
	}
}

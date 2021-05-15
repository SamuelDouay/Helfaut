import { Component } from '../global';

export class OngletContentCard extends Component {
	constructor({ nbId, value }) {
		super(
			'div',
			[
				{ name: 'class', value: 'container_onglet_contenue' },
				{ name: 'id', value: `onglet_${nbId}` },
				nbId === 1
					? { name: 'style', value: 'display:block;' }
					: { name: 'style', value: 'display:none;' },
			],
			value
		);
	}
}

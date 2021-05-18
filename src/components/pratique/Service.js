import { Component, P } from '../global';

export class Service extends Component {
	constructor() {
		super('div', { name: 'id', value: 'service_contener' }, [
			new P(null, 'Assistance maternelles'),
			new P(null, 'Centre de loisir'),
			new P(null, 'Aire de jeux'),
			new P(null, 'Bibliothèque'),
			new P(null, 'Gestion des déchets'),
			new P(null, [
				'Activité',
				new Component('ul', null, [
					new Component('li', null, 'Sports'),
					new Component('li', null, 'Loisirs'),
					new Component('li', null, 'Associations'),
				]),
			]),
		]);
	}
}

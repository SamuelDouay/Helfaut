import { Component, Div } from '../global';

export class PratiqueComponent extends Component {
	constructor() {
		super('div', { name: 'id', value: 'container' }, [
			new Component('ul', { name: 'id', value: 'onglets_buttons' }, [
				new Component(
					'li',
					null,
					new Component(
						'a',
						{ name: 'href', value: '#onglet_1' },
						'Horraire de la mairie'
					)
				),
				new Component(
					'li',
					null,
					new Component(
						'a',
						{ name: 'href', value: '#onglet_2' },
						'Salle multifonction'
					)
				),
				new Component(
					'li',
					null,
					new Component('a', { name: 'href', value: '#onglet_3' }, 'Services')
				),
				new Component(
					'li',
					null,
					new Component('a', { name: 'href', value: '#onglet_4' }, 'Ecoles')
				),
				new Component(
					'li',
					null,
					new Component('a', { name: 'href', value: '#onglet_5' }, 'Economie')
				),
			]),
			new Div(
				[
					{ name: 'class', value: 'container_onglet_contenue' },
					{ name: 'id', value: 'onglet_1' },
					{ name: 'style', value: 'display:block;' },
				],
				'horraire de la mairie'
			),
			new Div(
				[
					{ name: 'class', value: 'container_onglet_contenue' },
					{ name: 'id', value: 'onglet_2' },
					{ name: 'style', value: 'display:block;' },
				],
				'Salle multifonction'
			),
			new Div(
				[
					{ name: 'class', value: 'container_onglet_contenue' },
					{ name: 'id', value: 'onglet_3' },
					{ name: 'style', value: 'display:block;' },
				],
				'Services'
			),
			new Div(
				[
					{ name: 'class', value: 'container_onglet_contenue' },
					{ name: 'id', value: 'onglet_4' },
					{ name: 'style', value: 'display:block;' },
				],
				'Ecole'
			),
			new Div(
				[
					{ name: 'class', value: 'container_onglet_contenue' },
					{ name: 'id', value: 'onglet_5' },
					{ name: 'style', value: 'display:block;' },
				],
				'Economie'
			),
		]);
	}

	setOnglet(id) {
		document.querySelectorAll('.container_onglet_contenue').forEach(e => {
			e.style.display = 'none';
		});
		document.querySelector(`#${id}`).style.display = 'block';
	}

	initEvent() {
		const current = document.location.href.split('#')[1] || 'onglet_1';
		this.setOnglet(current);
	}
}

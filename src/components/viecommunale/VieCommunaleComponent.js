import { Component, Div } from '../global';

export class VieCommunaleComponent extends Component {
	constructor() {
		super('div', { name: 'id', value: 'container' }, [
			new Component('ul', { name: 'id', value: 'onglets_buttons' }, [
				new Component(
					'li',
					null,
					new Component(
						'a',
						{ name: 'href', value: '#onglet_1' },
						'Conseil municipal'
					)
				),
				new Component(
					'li',
					null,
					new Component(
						'a',
						{ name: 'href', value: '#onglet_2' },
						'Mot du maire'
					)
				),
				new Component(
					'li',
					null,
					new Component(
						'a',
						{ name: 'href', value: '#onglet_3' },
						'Comptes rendus'
					)
				),
				new Component(
					'li',
					null,
					new Component(
						'a',
						{ name: 'href', value: '#onglet_4' },
						'Bulletins municipaux'
					)
				),
			]),
			new Div(
				[
					{ name: 'class', value: 'container_onglet_contenue' },
					{ name: 'id', value: 'onglet_1' },
					{ name: 'style', value: 'display:block;' },
				],
				'Conseil Municipale'
			),
			new Div(
				[
					{ name: 'class', value: 'container_onglet_contenue' },
					{ name: 'id', value: 'onglet_2' },
					{ name: 'style', value: 'display:block;' },
				],
				'Mot du maire'
			),
			new Div(
				[
					{ name: 'class', value: 'container_onglet_contenue' },
					{ name: 'id', value: 'onglet_3' },
					{ name: 'style', value: 'display:block;' },
				],
				'Comptes rendus'
			),
			new Div(
				[
					{ name: 'class', value: 'container_onglet_contenue' },
					{ name: 'id', value: 'onglet_4' },
					{ name: 'style', value: 'display:block;' },
				],
				'Bulletins municipaux'
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

import { Component, Div } from '../global';

export class ActivitesComponent extends Component {
	constructor() {
		super('div', { name: 'id', value: 'container' }, [
			new Div({ name: 'id', value: 'onglets_buttons' }, [
				new Component(
					'li',
					{ name: 'style', value: 'width : 49%;' },
					new Component(
						'a',
						{ name: 'href', value: '#onglet_1' },
						'Calendrier 2021'
					)
				),
				new Component(
					'li',
					{ name: 'style', value: 'width : 49%;' },
					new Component(
						'a',
						{ name: 'href', value: '#onglet_2' },
						'Informations'
					)
				),
			]),
			new Div(
				[
					{ name: 'class', value: 'container_onglet_contenue' },
					{ name: 'id', value: 'onglet_1' },
					{ name: 'style', value: 'display:block;' },
				],
				'Calendrier 2021'
			),
			new Div(
				[
					{ name: 'class', value: 'container_onglet_contenue' },
					{ name: 'id', value: 'onglet_2' },
					{ name: 'style', value: 'display:block;' },
				],
				'Informations'
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

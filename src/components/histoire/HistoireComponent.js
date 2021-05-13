import { Component, Div } from '../global';

export class HistoireComponent extends Component {
	constructor() {
		super('div', { name: 'id', value: 'container' }, [
			new Component('ul', { name: 'id', value: 'onglets_buttons' }, [
				new Component(
					'li',
					null,
					new Component('a', { name: 'href', value: '#onglet_1' }, 'Histoire')
				),
				new Component(
					'li',
					null,
					new Component(
						'a',
						{ name: 'href', value: '#onglet_2' },
						'Album photos'
					)
				),
			]),
			new Div(
				[
					{ name: 'class', value: 'container_onglet_contenue' },
					{ name: 'id', value: 'onglet_1' },
					{ name: 'style', value: 'display:block;' },
				],
				'Histoire'
			),
			new Div(
				[
					{ name: 'class', value: 'container_onglet_contenue' },
					{ name: 'id', value: 'onglet_2' },
					{ name: 'style', value: 'display:block;' },
				],
				'Album photos'
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

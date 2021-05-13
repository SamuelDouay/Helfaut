import { Component } from '../global';

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
			new Component(
				'div',
				[
					{ name: 'class', value: 'container_onglet_contenue' },
					{ name: 'id', value: 'onglet_1' },
					{ name: 'style', value: 'display:block;' },
				],
				'Conseil Municipale'
			),
			new Component(
				'div',
				[
					{ name: 'class', value: 'container_onglet_contenue' },
					{ name: 'id', value: 'onglet_2' },
					{ name: 'style', value: 'display:block;' },
				],
				'Mot du maire'
			),
			new Component(
				'div',
				[
					{ name: 'class', value: 'container_onglet_contenue' },
					{ name: 'id', value: 'onglet_3' },
					{ name: 'style', value: 'display:block;' },
				],
				'Comptes rendus'
			),
			new Component(
				'div',
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
		document
			.querySelectorAll('.container_onglet_contenue')
			.forEach(function (e) {
				e.style.display = 'none';
			});
		document.querySelector(`#${id}`).style.display = 'block';
	}

	handleButton(event) {
		event.preventDefault();
		const current = event.href.split('#')[1];
		this.setOnglet(current);
	}

	initEvent() {
		let current = document.location.href.split('#')[1] || 'onglet_1';
		this.setOnglet(current);

		document.querySelectorAll('.onglets_button a').forEach(function (e) {
			Event.observe(e, 'click', handleButton.bindAsEventListener(this));
		});
	}
}

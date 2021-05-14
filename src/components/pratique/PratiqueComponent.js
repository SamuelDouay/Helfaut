import { Component, Div } from '../global';

export class PratiqueComponent extends Component {
	constructor() {
		super('div', { name: 'id', value: 'container' }, [
			new Div({ name: 'id', value: 'onglets_buttons' }, [
				new Component(
					'li',
					[
						{ name: 'style', value: 'width : 19%;' },
						{ name: 'class', value: 'onglet_active' },
						{ name: 'id', value: '#onglet_1' },
					],
					'Horraire de la mairie'
				),
				new Component(
					'li',
					[
						{ name: 'style', value: 'width : 19%;' },
						{ name: 'id', value: '#onglet_2' },
					],
					'Salle multifonction'
				),
				new Component(
					'li',
					[
						{ name: 'style', value: 'width : 19%;' },
						{ name: 'id', value: '#onglet_3' },
					],
					'Services'
				),
				new Component(
					'li',
					[
						{ name: 'style', value: 'width : 19%;' },
						{ name: 'id', value: '#onglet_4' },
					],
					'Ecoles'
				),
				new Component(
					'li',
					[
						{ name: 'style', value: 'width : 19%;' },
						{ name: 'id', value: '#onglet_5' },
					],
					'Economie'
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
					{ name: 'style', value: 'display:none;' },
				],
				'Salle multifonction'
			),
			new Div(
				[
					{ name: 'class', value: 'container_onglet_contenue' },
					{ name: 'id', value: 'onglet_3' },
					{ name: 'style', value: 'display:none;' },
				],
				'Services'
			),
			new Div(
				[
					{ name: 'class', value: 'container_onglet_contenue' },
					{ name: 'id', value: 'onglet_4' },
					{ name: 'style', value: 'display:none;' },
				],
				'Ecole'
			),
			new Div(
				[
					{ name: 'class', value: 'container_onglet_contenue' },
					{ name: 'id', value: 'onglet_5' },
					{ name: 'style', value: 'display:none;' },
				],
				'Economie'
			),
		]);
	}

	setOnglet(value) {
		document.querySelectorAll('li').forEach(li => {
			if (li.getAttribute('id') == value) {
				let atClass = document.createAttribute('class');
				atClass.value = 'onglet_active';
				li.setAttributeNode(atClass);
			} else {
				li.removeAttribute('class');
			}
		});
		document.querySelectorAll('.container_onglet_contenue').forEach(e => {
			e.style.display = 'none';
		});
		document.querySelector(
			`#onglet_${value.charAt(value.length - 1)}`
		).style.display = 'block';
	}

	initEvent() {
		document.querySelectorAll('li').forEach(li => {
			li.addEventListener('click', ev => {
				ev.preventDefault();
				if (li.getAttribute('class') == null) {
					this.setOnglet(li.getAttribute('id'));
				}
			});
		});
	}
}

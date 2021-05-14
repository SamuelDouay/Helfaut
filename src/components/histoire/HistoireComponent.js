import { Component, Div } from '../global';

export class HistoireComponent extends Component {
	constructor() {
		super('div', { name: 'id', value: 'container' }, [
			new Div({ name: 'id', value: 'onglets_buttons' }, [
				new Component(
					'li',
					[
						{ name: 'style', value: 'width : 49%;' },
						{ name: 'id', value: '#onglet_1' },
						{ name: 'class', value: 'onglet_active' },
					],
					'Histoire'
				),
				new Component(
					'li',
					[
						{ name: 'style', value: 'width : 49%;' },
						{ name: 'id', value: '#onglet_2' },
					],
					'Album photos'
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
					{ name: 'style', value: 'display:none;' },
				],
				'Album photos'
			),
		]);
	}

	setOnglet(value) {
		document.querySelectorAll('li').forEach(li => {
			if (li.getAttribute('id') == value) {
				let atClass = document.createAttribute('class');
				atClass.value = 'onglet_active';
				li.setAttributeNode(atClass);
			} else if (li.hasAttribute('id')) {
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

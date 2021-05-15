import { Component } from '../global';
import { OngletContentCard } from './OngletContentCard';

export class OngletContentList extends Component {
	ongletList;

	constructor(ongletList) {
		super('div', null, [
			...ongletList.map(
				(value, index) =>
					new OngletContentCard({
						nbId: index + 1,
						value: value,
					})
			),
		]);
		this.ongletList = ongletList;
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

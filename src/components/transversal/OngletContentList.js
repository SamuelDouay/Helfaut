import { Component } from '../global';
import { OngletContentCard } from './OngletContentCard';

export class OngletContentList extends Component {
	ongletList;
	slideIndex = 1;

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
		document.querySelectorAll('#onglets_buttons li').forEach(li => {
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
		document.querySelectorAll('#onglets_buttons li').forEach(li => {
			li.addEventListener('click', ev => {
				ev.preventDefault();
				if (li.getAttribute('class') == null) {
					this.setOnglet(li.getAttribute('id'));
				}
			});
		});

		document.querySelectorAll('.fleche').forEach((e, index) => {
			e.addEventListener('click', event => {
				event.preventDefault();
				if (index === 0) this.plusSlides(-1);
				else this.plusSlides(1);
			});
		});
	}

	plusSlides(n) {
		this.showSlides((this.slideIndex += n));
	}

	showSlides(n) {
		const slides = document.querySelectorAll('.slides');

		if (n > slides.length) {
			this.slideIndex = 1;
		}
		if (n < 1) {
			this.slideIndex = slides.length;
		}
		slides.forEach(slide => {
			slide.style.display = 'none';
		});
		console.log(this.slideIndex - 1);
		slides[this.slideIndex - 1].style.display = 'block';
	}
}

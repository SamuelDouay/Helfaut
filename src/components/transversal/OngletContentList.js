import { Component } from '../global';
import { OngletContentCard } from './OngletContentCard';

export class OngletContentList extends Component {
	ongletList;
	ongletCurrent;
	slideIndex = 1;

	constructor(ongletList, current) {
		super('div', null, [
			...ongletList.map(
				(value, index) =>
					new OngletContentCard(
						{
							nbId: index + 1,
							value: value,
						},
						current
					)
			),
		]);
		this.ongletCurrent = current;
		this.ongletList = ongletList;
	}

	setOnglet(value) {
		const mediaMatches = window.matchMedia("(max-width : 400px)").matches;
		document.querySelectorAll('#onglets_buttons li').forEach(li => {
			if (li.getAttribute('id') == value) {
				let atClass = document.createAttribute('class');
				atClass.value = 'onglet_active';
				li.setAttributeNode(atClass);

				mediaMatches ? li.style.display = 'block' : '';

			} else if (li.hasAttribute('id')) {
				li.removeAttribute('class');
				mediaMatches && li.getAttribute('id').charAt(li.getAttribute('id').length - 2) == '_' ? li.style.display = 'none' :  li.style.display = 'block';
			}
		});
		document.querySelectorAll('.container_onglet_contenue').forEach(e => {
			e.style.display = 'none';
		});
		document.querySelector(
			`#onglet_${value.charAt(value.length - 1)}`
		).style.display = 'block';
		this.ongletCurrent = parseInt(value.charAt(value.length - 1));
	}

	initEvent() {
		document.querySelectorAll('#onglets_buttons li').forEach((li) => {
			li.addEventListener('click', ev => {
				ev.preventDefault();
				if (li.getAttribute('class') == null) {
					if (li.getAttribute('id').charAt(li.getAttribute('id').length - 2) == '_') {
						this.setOnglet(li.getAttribute('id'));
					}
					else {
						if (document.querySelectorAll('#onglets_buttons li')[0] === li) {
							if (this.ongletCurrent === 1) {
								this.ongletCurrent = this.ongletList.length + 1;
							}
							this.setOnglet(`#onglet_${this.ongletCurrent - 1}`);
						}
						else {
							if (this.ongletCurrent === this.ongletList.length) {
								this.ongletCurrent = 0;
							}
							this.setOnglet(`#onglet_${this.ongletCurrent + 1}`);
						}

					}
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

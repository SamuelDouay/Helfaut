import { Component, Div } from '../../global';
import { NewsCard } from './NewsCard';
import Router from '../../../Router';

export class NewsList extends Component {
	newlist;
	slideIndex = 1;

	constructor(newlist) {
		super('div', { name: 'id', value: 'news_container' }, [
			new Div({ name: 'class', value: 'fleches_news' }, '<'),
			...newlist.map((e, index) => new NewsCard(e, index)),
			new Div({ name: 'class', value: 'fleches_news' }, '>'),
		]);
		this.newlist = newlist;
	}

	initEvent() {
		document.querySelectorAll('.fleches_news').forEach((e, index) => {
			e.addEventListener('click', event => {
				event.preventDefault();
				if (index === 0) this.plusSlides(-1);
				else this.plusSlides(1);
			});
		});

		document.querySelectorAll('.homepage_lien').forEach(lien => {
			lien.addEventListener('click', e => {
				e.preventDefault();
				Router.navigate(e.currentTarget.getAttribute('href'), 2);
			});
		});
	}

	plusSlides(n) {
		this.showSlides((this.slideIndex += n));
	}

	showSlides(n) {
		const slides = document.querySelectorAll('.mySlides');

		if (n > slides.length) {
			this.slideIndex = 1;
		}
		if (n < 1) {
			this.slideIndex = slides.length;
		}
		slides.forEach(slide => {
			slide.style.display = 'none';
		});

		slides[this.slideIndex - 1].style.display = 'block';
	}
}

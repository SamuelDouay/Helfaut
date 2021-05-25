import { Component, Div } from '../../global';
import Router from '../../../Router';

export class NewsCard extends Component {
	constructor({ date, info }, index) {
		super(
			'div',
			[
				{ name: 'class', value: 'news mySlides' },
				index === 0
					? { name: 'style', value: 'display:block' }
					: { name: 'style', value: 'display: none' },
			],
			[
				new Div({ name: 'class', value: 'title_news_content ' }, [
					new Div({ name: 'class', value: 'date_news' }, date),
					new Component(
						'h1',
						{ name: 'class', value: 'title_news_content_t' },
						info
					),
					new Component(
						'a',
						[
							{ name: 'id', value: 'homepage_lien' },
							{ name: 'href', value: '/activites' },
						],
						'En savoir plus...'
					),
				]),
				new Div({ name: 'class', value: 'media_content' }, '[Texte ou photo]'),
			]
		);
	}

	initEvent() {
		const lien = document.querySelector('#homepage_lien');
		lien.addEventListener('click', e => {
			e.preventDefault();
			Router.navigate(e.currentTarget.getAttribute('href'));
		});
	}
}

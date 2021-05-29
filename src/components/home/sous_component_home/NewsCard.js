import { Component, Div } from '../../global';

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
							{ name: 'class', value: 'homepage_lien' },
							{ name: 'href', value: '/activites' },
						],
						'En savoir plus...'
					),
				]),
				new Div({ name: 'class', value: 'media_content' }, '[Texte ou photo]'),
			]
		);
	}
}

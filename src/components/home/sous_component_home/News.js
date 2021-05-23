import { Component, Div } from '../../global';

export class News extends Component {
	constructor() {
		super('div', { name: 'id', value: 'new_homepage' }, [
			new Div({ name: 'id', value: 'tille_new' }, 'Informations'),
			new Div({ name: 'id', value: 'news_container' }, [
				new Div({ name: 'class', value: 'fleches_news' }, '<'),
				new Div({ name: 'id', value: 'news' }, [
					new Div({ name: 'class', value: 'title_news_content' }, [
						new Div({ name: 'class', value: 'date_news' }, '30 avril 2021'),
						new Component(
							'h1',
							{ name: 'class', value: 'title_news_content_t' },
							'TITRE LOREM IPSUM'
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
					new Div({ name: 'class', value: 'media_content' }, '[Texte ou phto]'),
				]),
				new Div({ name: 'class', value: 'fleches_news' }, '>'),
			]),
		]);
	}
}

import { Component, Div } from '../../global';
import { NewsCard } from './NewsCard';

export class NewsList extends Component {
	newlist;
	constructor(newlist) {
		super('div', { name: 'id', value: 'news_container' }, [
			new Div({ name: 'class', value: 'fleches_news' }, '<'),
			...newlist.map((e, index) => new NewsCard(e, index)),
			new Div({ name: 'class', value: 'fleches_news' }, '>'),
		]);
		this.newlist = newlist;
	}
}

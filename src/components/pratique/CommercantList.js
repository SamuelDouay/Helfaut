import { Component, Div } from '../global';
import { CommercantCard } from './CommercantCard';

export class CommercantList extends Component {
	liste;
	constructor(title, liste) {
		super('div', { name: 'class', value: 'commercant_container' }, [
			new Div({ name: 'class', value: 'commercant_title' }, title),
			...liste.map(e => new CommercantCard(e)),
		]);
		this.liste = liste;
	}
}

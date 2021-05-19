import { Component, Div } from '../global';
import { Event } from './Event';

export class CalendrierList extends Component {
	listevent;
	constructor(mois, listevent) {
		super('div', { name: 'class', value: 'mois_container' }, [
			new Div({ name: 'class', value: 'mois' }, mois),
			...listevent.map(e => new Event(e)),
		]);
		this.listevent = listevent;
	}
}

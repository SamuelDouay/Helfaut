import { Component } from '../global';

export class Event extends Component {
	constructor({ jour, mois, event }) {
		super(
			'div',
			{ name: 'class', value: 'event' },
			`${jour}/${mois} - ${event}`
		);
	}
}

import { Component, Div } from '../global';

export class InfoCard extends Component {
	constructor({ info, date }) {
		super('div', { name: 'class', value: 'information_card' }, [
			new Div({ name: 'class', value: 'info_title' }, info),
			new Div({ name: 'class', value: 'info_date' }, date),
		]);
	}
}

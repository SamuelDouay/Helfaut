import { Component, Div } from '../../global';

export class SearchInfo extends Component {
	constructor(date, information) {
		super(null, null, [
			new Div({ name: 'class', value: 'info_value' }, information),
			new Div({ name: 'class', value: 'nom_value' }, date),
		]);
	}
}

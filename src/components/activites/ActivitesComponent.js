import { Component } from '../global';

export class ActivitesComponent extends Component {
	constructor() {
		super(
			null,
			null,
			new Component('h1', { name: 'class', value: 'test' }, 'Activites')
		);
	}
}

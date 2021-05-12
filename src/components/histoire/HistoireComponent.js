import { Component } from '../global';

export class HistoireComponent extends Component {
	constructor() {
		super(
			null,
			null,
			new Component('h1', { name: 'class', value: 'test' }, 'Histoire')
		);
	}
}

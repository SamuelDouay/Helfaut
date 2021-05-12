import { Component } from '../global';

export class PratiqueComponent extends Component {
	constructor() {
		super(
			null,
			null,
			new Component('h1', { name: 'class', value: 'test' }, 'Pratique')
		);
	}
}

import { Component } from '../global';

export class HomeComponent extends Component {
	constructor() {
		super(
			'div',
			[],
			new Component('h1', { name: 'class', value: 'test' }, 'Home page')
		);
	}
}

import { Component } from '../global';

export class VieCommunaleComponent extends Component {
	constructor() {
		super(
			null,
			null,
			new Component('h1', { name: 'class', value: 'test' }, 'Vie Communale')
		);
	}
}

import { Component } from '../global';

export class PhotoCard extends Component {
	constructor({ value }, index) {
		super(
			'div',
			[
				{ name: 'class', value: 'photos slides' },
				index === 0
					? { name: 'style', value: 'display:block' }
					: { name: 'style', value: 'display: none' },
			],
			`[${value}]`
		);
	}
}

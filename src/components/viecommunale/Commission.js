import { Component } from '../global';

export class Commission extends Component {
	constructor(id, { delegue, membres }) {
		super(
			'div',
			{ name: 'class', value: 'commission' },
			`Commission : ${id} - Délégué : ${delegue} | Membres : ${membres.map(
				function (e) {
					return e;
				}
			)}`
		);
	}
}

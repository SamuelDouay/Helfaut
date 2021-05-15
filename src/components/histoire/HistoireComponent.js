import { Component } from '../global';
import { OngletContentList, OngletList } from '../transversal';

export class HistoireComponent extends Component {
	constructor() {
		super('div', { name: 'id', value: 'container' }, [
			new OngletList(['Histoire', 'Album Photo']),
			new OngletContentList(['Histoire', 'Album Photo']),
		]);
	}
}

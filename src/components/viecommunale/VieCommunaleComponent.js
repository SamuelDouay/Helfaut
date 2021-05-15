import { Component } from '../global';
import { OngletContentList, OngletList } from '../transversal';

export class VieCommunaleComponent extends Component {
	constructor() {
		super('div', { name: 'id', value: 'container' }, [
			new OngletList([
				'Conseil municipal',
				'Mot du maire',
				'Comptes rendus',
				'Bulletins municipaux',
			]),
			new OngletContentList([
				'Conseil municipal',
				'Mot du maire',
				'Comptes rendus',
				'Bulletins municipaux',
			]),
		]);
	}
}

import { Component } from '../global';
import { InfoList } from './InfoList';

export class Information extends Component {
	constructor() {
		super(
			'div',
			{ name: 'id', value: 'information_container' },
			new InfoList([
				{ info: 'Information 1', date: '18 mai 2021' },
				{ info: 'Information 1', date: '18 mai 2021' },
				{ info: 'Information 1', date: '18 mai 2021' },
				{ info: 'Information 1', date: '18 mai 2021' },
				{ info: 'Information 1', date: '18 mai 2021' },
				{ info: 'Information 1', date: '18 mai 2021' },
				{ info: 'Information 1', date: '18 mai 2021' },
				{ info: 'Information 1', date: '18 mai 2021' },
				{ info: 'Information 1', date: '18 mai 2021' },
				{ info: 'Information 1', date: '18 mai 2021' },
				{ info: 'Information 1', date: '18 mai 2021' },
				{ info: 'Information 1', date: '18 mai 2021' },
				{ info: 'Information 1', date: '18 mai 2021' },
				{ info: 'Information 1', date: '18 mai 2021' },
				{ info: 'Information 1', date: '18 mai 2021' },
				{ info: 'Information 1', date: '18 mai 2021' },
				{ info: 'Information 1', date: '18 mai 2021' },
			])
		);
	}
}

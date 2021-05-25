import { Component } from '../../global';
import { SearchInfo } from './SearchInfo';

export class SearchInfoList extends Component {
	list;

	constructor(list) {
		super('div', { name: 'id', value: 'information_search' }, [
			...list.map(e => new SearchInfo(e)),
		]);
		this.list = list;
	}
}

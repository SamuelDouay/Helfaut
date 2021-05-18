import { Component } from '../global';
import { InfoCard } from './InfoCard';

export class InfoList extends Component {
	infoList;
	constructor(infoList) {
		super('div', { name: 'id', value: 'info_container' }, [
			...infoList.map(e => new InfoCard(e)),
		]);
		this.infoList = infoList;
	}
}

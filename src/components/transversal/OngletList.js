import { Component } from '../global';
import { OngletCard } from './OngletCard';

export class OngletList extends Component {
	ongletList;

	constructor(ongletList) {
		super('div', { name: 'id', value: 'onglets_buttons' }, [
			...ongletList.map(
				(value, index) =>
					new OngletCard({
						largeur: 100 / ongletList.length - 1,
						nbId: index + 1,
						value: value,
					})
			),
		]);
		this.ongletList = ongletList;
	}
}

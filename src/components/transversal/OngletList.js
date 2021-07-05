import { Component } from '../global';
import { OngletCard } from './OngletCard';

export class OngletList extends Component {
	ongletList;

	constructor(ongletList, current) {
		super('div', { name: 'id', value: 'onglets_buttons' }, [
			window.matchMedia("(max-width : 400px)").matches ?  new OngletCard({largeur: 10,
				nbId: -1,
				value: '<',}, current) : null ,
			...ongletList.map(
				(value, index) =>
					new OngletCard(
						{
							largeur: window.matchMedia("(max-width : 400px)").matches ? 10 : 100 / ongletList.length - 1,
							nbId: index + 1,
							value: value,
						},
						current
					)
			),
			window.matchMedia("(max-width : 400px)").matches ?  new OngletCard({largeur: 10 / ongletList.length - 1,
				nbId: +1,
				value: '>',}, current) : null ,
		]);
		this.ongletList = ongletList;
	}
}

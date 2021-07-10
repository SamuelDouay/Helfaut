import { Component } from '../global';
import { OngletCard } from './OngletCard';

export class OngletList extends Component {
	ongletList;

	constructor(ongletList, current) {
		const mediaMatches = window.matchMedia('(max-width : 400px)').matches;
		super('div', { name: 'id', value: 'onglets_buttons' }, [
			mediaMatches
				? new OngletCard({ largeur: 10, nbId: -1, value: '<' }, current)
				: null,
			...ongletList.map(
				(value, index) =>
					new OngletCard(
						{
							largeur: mediaMatches ? 70 : 100 / ongletList.length - 1,
							nbId: index + 1,
							value: value,
						},
						current
					)
			),
			mediaMatches
				? new OngletCard({ largeur: 10, nbId: -1, value: '>' }, current)
				: null,
		]);
		this.ongletList = ongletList;
	}
}

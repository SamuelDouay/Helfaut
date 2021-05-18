import { Component, P } from '../global';

export class CompteRenduCard extends Component {
	constructor({ jour, mois, annee }) {
		super('div', { name: 'class', value: 'compte_rendu_card' }, [
			new P(null, `Conseil municipal du ${jour} ${mois} ${annee}`),
			new Component('img', [
				{ name: 'src', value: '/images/telecharger.svg' },
				{ name: 'alt', value: 'telechager' },
			]),
		]);
	}
}

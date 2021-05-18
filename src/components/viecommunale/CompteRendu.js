import { Component } from '../global';
import { CompteRenduList } from './CompteRenduList';

export class CompteRendu extends Component {
	constructor() {
		super(
			'div',
			{ name: 'id', value: 'compte_rendu_container' },
			new CompteRenduList([
				{ jour: 'JJ', mois: 'MMM', annee: 'AAAA' },
				{ jour: 'JJ', mois: 'MMM', annee: 'AAAA' },
				{ jour: 'JJ', mois: 'MMM', annee: 'AAAA' },
				{ jour: 'JJ', mois: 'MMM', annee: 'AAAA' },
				{ jour: 'JJ', mois: 'MMM', annee: 'AAAA' },
				{ jour: 'JJ', mois: 'MMM', annee: 'AAAA' },
				{ jour: 'JJ', mois: 'MMM', annee: 'AAAA' },
				{ jour: 'JJ', mois: 'MMM', annee: 'AAAA' },
				{ jour: 'JJ', mois: 'MMM', annee: 'AAAA' },
				{ jour: 'JJ', mois: 'MMM', annee: 'AAAA' },
				{ jour: 'JJ', mois: 'MMM', annee: 'AAAA' },
			])
		);
	}
}

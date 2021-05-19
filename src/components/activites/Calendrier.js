import { Component } from '../global';
import { CalendrierList } from './CalendrierList';

export class Calendrier extends Component {
	constructor() {
		super('div', { name: 'id', value: 'calendrier_container' }, [
			new CalendrierList('Janvier', [
				{ jour: 'JJ', mois: 'MM', event: 'Evénement' },
				{ jour: 'JJ', mois: 'MM', event: 'Evénement' },
				{ jour: 'JJ', mois: 'MM', event: 'Evénement' },
				{ jour: 'JJ', mois: 'MM', event: 'Evénement' },
				{ jour: 'JJ', mois: 'MM', event: 'Evénement' },
			]),
			new CalendrierList('Février', [
				{ jour: 'JJ', mois: 'MM', event: 'Evénement' },
				{ jour: 'JJ', mois: 'MM', event: 'Evénement' },
			]),
			new CalendrierList('Mars', [
				{ jour: 'JJ', mois: 'MM', event: 'Evénement' },
				{ jour: 'JJ', mois: 'MM', event: 'Evénement' },
				{ jour: 'JJ', mois: 'MM', event: 'Evénement' },
				{ jour: 'JJ', mois: 'MM', event: 'Evénement' },
			]),
			new CalendrierList('Avril', [
				{ jour: 'JJ', mois: 'MM', event: 'Evénement' },
				{ jour: 'JJ', mois: 'MM', event: 'Evénement' },
				{ jour: 'JJ', mois: 'MM', event: 'Evénement' },
				{ jour: 'JJ', mois: 'MM', event: 'Evénement' },
				{ jour: 'JJ', mois: 'MM', event: 'Evénement' },
			]),
		]);
	}
}

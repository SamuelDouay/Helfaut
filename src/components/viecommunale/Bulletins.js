import { Component } from '../global';
import { BulletinAffichageList } from './BulletinAffichageList';

export class Bulletins extends Component {
	constructor() {
		super('div', { name: 'id', value: 'bulletin_municipaux' }, [
			new Component(
				'h1',
				{ name: 'id', value: 'title_bulletin' },
				'Découvrez les bulletins municipaux de la commune'
			),
			new BulletinAffichageList([
				{ numero: 'XXX', jour: 'JJ', mois: 'MM', annee: 'AAAA' },
				{ numero: 'XXX', jour: 'JJ', mois: 'MM', annee: 'AAAA' },
				{ numero: 'XXX', jour: 'JJ', mois: 'MM', annee: 'AAAA' },
				{ numero: 'XXX', jour: 'JJ', mois: 'MM', annee: 'AAAA' },
				{ numero: 'XXX', jour: 'JJ', mois: 'MM', annee: 'AAAA' },
				{ numero: 'XXX', jour: 'JJ', mois: 'MM', annee: 'AAAA' },
				{ numero: 'XXX', jour: 'JJ', mois: 'MM', annee: 'AAAA' },
				{ numero: 'XXX', jour: 'JJ', mois: 'MM', annee: 'AAAA' },
				{ numero: 'XXX', jour: 'JJ', mois: 'MM', annee: 'AAAA' },
				{ numero: 'XXX', jour: 'JJ', mois: 'MM', annee: 'AAAA' },
				{ numero: 'XXX', jour: 'JJ', mois: 'MM', annee: 'AAAA' },
			]),
		]);
	}
}

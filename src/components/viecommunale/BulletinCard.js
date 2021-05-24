import { Component, Div } from '../global';

export class BulletinCard extends Component {
	constructor({ numero, jour, mois, annee }) {
		super('div', { name: 'class', value: 'bulletin_card' }, [
			new Div(null, [
				new Div(
					{ name: 'class', value: 'numero_bulletin' },
					`Bulletin numéro ${numero}`
				),
				new Div(
					{ name: 'class', value: 'date_bulletin' },
					`Le ${jour}/${mois}/${annee}`
				),
			]),
			new Component('img', [
				{ name: 'src', value: '/images/telecharger.svg' },
				{ name: 'alt', value: 'telechager' },
			]),
		]);
	}
}

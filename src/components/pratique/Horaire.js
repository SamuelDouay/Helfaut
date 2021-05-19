import { Component, Div } from '../global';

export class Horaire extends Component {
	constructor() {
		super('div', { name: 'id', value: 'horaire_container' }, [
			new Div(null, [
				new Div(null, "Heure d'ouverture :"),
				new Div({ name: 'class', value: 'heures' }, [
					new Div(
						null,
						'Lundi, Mardi, Jeudi & Vendredi : 8h30 - 12h | 13h30 - 17h30'
					),
					new Div(null, 'Mercredi : 9h - 12h | 13h30 - 17h30'),
				]),
			]),
			new Div(null, [
				new Div(null, 'Permanences :'),
				new Div({ name: 'class', value: 'heures' }, [
					new Div(
						null,
						'M. le Maire | Mercredi : 14h - 15h30 & sur rendez-vous'
					),
					new Div(
						null,
						'Adjoints | Tous les premiers Lundi du mois & Samedi : 9h - 10h0'
					),
				]),
			]),
		]);
	}
}

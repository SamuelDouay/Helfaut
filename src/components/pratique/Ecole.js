import { Component, Div } from '../global';

export class Ecoles extends Component {
	constructor() {
		super('div', { name: 'id', value: 'ecole_container' }, [
			new Div({ name: 'class', value: 'etablissement' }, [
				new Div(
					{ name: 'class', value: 'ecole_name' },
					'École primaire Françoise Dolto Kelgommard'
				),
				new Div({ name: 'class', value: 'prestations_container' }, [
					new Div(
						{ name: 'class', value: 'prestation' },
						'Cantine, garderie & bus scolaire'
					),
					new Div({ name: 'class', value: 'prestation' }, 'Menu de la cantine'),
				]),
			]),
			new Div({ name: 'class', value: 'etablissement' }, [
				new Div({ name: 'class', value: 'ecole_name' }, 'Collèges'),
				new Div({ name: 'class', value: 'prestations_container' }, [
					new Div(
						{ name: 'class', value: 'prestation' },
						'Collège René Cassin'
					),
					new Div({ name: 'class', value: 'prestation' }, 'Ramassage scolaire'),
				]),
			]),
			new Div({ name: 'class', value: 'etablissement' }, [
				new Div({ name: 'class', value: 'ecole_name' }, 'Lycées'),
				new Div({ name: 'class', value: 'prestations_container' }, [
					new Div({ name: 'class', value: 'prestation' }, [
						new Div(null, "Lycées d'enseignement général :"),
						new Div(
							{ name: 'class', value: 'eta_lycee' },
							'Lycée Général Technologique Alexandre Ribot'
						),
						new Div(
							{ name: 'class', value: 'eta_lycee' },
							'Lycée Général Technologique Blaise Pascal'
						),
					]),
					new Div({ name: 'class', value: 'prestation' }, [
						new Div(null, 'Lycées professionnels :'),
						new Div(
							{ name: 'class', value: 'eta_lycee' },
							"Lycée professionnel de l'Aa"
						),
						new Div(
							{ name: 'class', value: 'eta_lycee' },
							'Lycée professionnel Bernard Chochoy'
						),
						new Div(
							{ name: 'class', value: 'eta_lycee' },
							'Lycée professionnel Monsigny'
						),
						new Div(
							{ name: 'class', value: 'eta_lycee' },
							'Lycée des Flandres'
						),
						new Div(
							{ name: 'class', value: 'eta_lycee' },
							"Lycée professionnel d'Aire sur la Lys"
						),
					]),
					new Div({ name: 'class', value: 'prestation' }, 'Ramassage scolaire'),
				]),
			]),
		]);
	}
}

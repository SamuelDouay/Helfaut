import { Component, Div, P } from '../global';

export class SalleMultifonction extends Component {
	constructor() {
		super('div', { name: 'id', value: 'salle_multifonction_container' }, [
			new P(null, 'Location des salles communales :'),
			new Div({ name: 'class', value: 'salle' }, [
				new Div(
					{ name: 'class', value: 'title_salle' },
					'Location de la salle des fêtes : '
				),
				new Div({ name: 'class', value: 'reglement_tarif' }, [
					new Div({ name: 'class', value: 'reglement' }, [
						'Réglement',
						new Component('img', [
							{ name: 'src', value: '/images/telecharger.svg' },
							{ name: 'alt', value: 'telechager' },
						]),
					]),
					new Div({ name: 'class', value: 'tarif' }, [
						'Tarif',
						new Component('img', [
							{ name: 'src', value: '/images/telecharger.svg' },
							{ name: 'alt', value: 'telechager' },
						]),
					]),
				]),
			]),
			new Div({ name: 'class', value: 'salle' }, [
				new Div(
					{ name: 'class', value: 'title_salle' },
					'Location du foyer communal : '
				),
				new Div({ name: 'class', value: 'reglement_tarif' }, [
					new Div({ name: 'class', value: 'reglement' }, [
						'Réglement',
						new Component('img', [
							{ name: 'src', value: '/images/telecharger.svg' },
							{ name: 'alt', value: 'telechager' },
						]),
					]),
					new Div({ name: 'class', value: 'tarif' }, [
						'Tarif',
						new Component('img', [
							{ name: 'src', value: '/images/telecharger.svg' },
							{ name: 'alt', value: 'telechager' },
						]),
					]),
				]),
			]),
		]);
	}
}

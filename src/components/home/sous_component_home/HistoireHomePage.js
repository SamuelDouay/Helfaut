import { Component, Div } from '../../global';

export class HistoireHomePage extends Component {
	constructor() {
		super('div', { name: 'id', value: 'histoire_homepage' }, [
			new Div(
				{ name: 'id', value: 'histoire_homepage_text' },
				'Découvrez le patrimoine histoirique du village...'
			),
			new Component(
				'a',
				[
					{ name: 'id', value: 'histoire_homepage_lien' },
					{ name: 'href', value: '/histoire' },
				],
				"Histoire d'Helfaut"
			),
		]);
	}
}

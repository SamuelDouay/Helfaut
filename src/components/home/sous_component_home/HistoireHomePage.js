import Router from '../../../Router';
import { Component, Div } from '../../global';

export class HistoireHomePage extends Component {
	constructor() {
		super('div', { name: 'id', value: 'histoire_homepage' }, [
			new Div(
				{ name: 'id', value: 'histoire_homepage_text' },
				'Découvrez le patrimoine historique du village...'
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

	initEvent() {
		const lien = document.querySelector('#histoire_homepage_lien');
		lien.addEventListener('click', e => {
			e.preventDefault();
			Router.navigate(e.currentTarget.getAttribute('href'), 0);
		});
	}
}

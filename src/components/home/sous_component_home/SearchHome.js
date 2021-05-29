import { Component, Div } from '../../global';
import { SearchInfoList } from './SearchInfoList';
import Router from '../../../Router';

export class SearchHome extends Component {
	constructor() {
		super('div', { name: 'id', value: 'search_home' }, [
			new Component('input', [
				{ name: 'type', value: 'text' },
				{ name: 'name', value: 'recherche' },
				{ name: 'placeholder', value: 'Rechercher' },
			]),

			new SearchInfoList([
				{ date: '30 avril 2021', information: 'Information 1' },
				{ date: '25 avril 2021', information: 'Information 2' },
				{ date: '23 avril 2021', information: 'Information 3' },
			]),
			new Div({ name: 'id', value: 'recherche_pratique' }, [
				'Pratique',
				new Div({ name: 'id', value: 'pratique_search' }, [
					new Div({ name: 'id', value: 'col_1' }, [
						new Div(
							null,
							new Component(
								'a',
								{ name: 'href', value: '/pratique' },
								'Horaires mairie'
							)
						),
						new Div(
							null,
							new Component(
								'a',
								{ name: 'href', value: '/pratique' },
								'Salle multifonction'
							)
						),
					]),
					new Div({ name: 'id', value: 'col_2' }, [
						new Div(
							null,
							new Component(
								'a',
								{ name: 'href', value: '/pratique' },
								'Services'
							)
						),
						new Div(
							null,
							new Component('a', { name: 'href', value: '/pratique' }, 'Ecoles')
						),
					]),
					new Div({ name: 'id', value: 'col_3' }, [
						new Div(
							null,
							new Component(
								'a',
								{ name: 'href', value: '/pratique' },
								'Economie'
							)
						),
						new Div(
							null,
							new Component(
								'a',
								{ name: 'href', value: '/pratique' },
								'Cimetière'
							)
						),
					]),
				]),
			]),
		]);
	}

	initEvent() {
		const lien = document.querySelectorAll('#pratique_search a');
		lien.forEach((a, index) => {
			a.addEventListener('click', e => {
				e.preventDefault();
				console.log(index);
				Router.navigate(e.currentTarget.getAttribute('href'), index + 1);
			});
		});
	}
}

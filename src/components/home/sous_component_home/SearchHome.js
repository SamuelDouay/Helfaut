import { Component, Div } from '../../global';
import { SearchInfo } from './SearchInfo';
import { SearchInfoList } from './SearchInfoList';

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
						new Div(null, 'Horaires mairie'),
						new Div(null, 'Salle multifonction'),
					]),
					new Div({ name: 'id', value: 'col_2' }, [
						new Div(null, 'Services'),
						new Div(null, 'Ecoles'),
					]),
					new Div({ name: 'id', value: 'col_3' }, [
						new Div(null, 'Economie'),
						new Div(null, 'Cimetière'),
					]),
				]),
			]),
		]);
	}
}

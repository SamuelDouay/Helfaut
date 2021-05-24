import { Component, Div } from '../../global';
import { SearchInfo } from './SearchInfo';

export class SearchHome extends Component {
	constructor() {
		super('div', { name: 'id', value: 'search_home' }, [
			new Component('input', [
				{ name: 'type', value: 'text' },
				{ name: 'name', value: 'recherche' },
				{ name: 'placeholder', value: 'Rechercher' },
			]),
			new Div({ name: 'id', value: 'information_search' }, [
				new SearchInfo('30 avril 2021', 'Information 1'),
				new SearchInfo('25 avril 2021', 'Information 2'),
				new SearchInfo('23 avril 2021', 'Information 3'),
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

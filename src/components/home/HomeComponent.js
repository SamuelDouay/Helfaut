import { Component, Div } from '../global';
import {
	News,
	Meteo,
	Chiffre,
	Information,
	Carte,
	HistoireHomePage,
} from './sous_component_home';
import { SearchHome } from './sous_component_home/SearchHome';

export class HomeComponent extends Component {
	constructor() {
		super('div', { name: 'id', value: 'homePage' }, [
			new Div({ name: 'id', value: 'homepage_premiere_partie' }, [
				new News(),
				new SearchHome(),
			]),
			new Div({ name: 'id', value: 'homepage_deuxieme_partie' }, [
				new Div({ name: 'id', value: 'meteo_and_chiffre' }, [
					new Meteo(),
					new Chiffre(),
				]),
				new Carte(),
				new HistoireHomePage(),
				new Information(),
			]),
		]);
	}
}

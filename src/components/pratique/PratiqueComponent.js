import { Component } from '../global';
import { OngletContentList, OngletList } from '../transversal';
import { Ecoles } from './Ecole';
import { Economie } from './Economie';
import { Horaire } from './Horaire';
import { SalleMultifonction } from './SalleMultifonction';
import { Service } from './Service';
import { Cimetiere } from './Cimetiere';

export class PratiqueComponent extends Component {
	constructor(onglet) {
		super('div', { name: 'id', value: 'container' }, [
			new OngletList(
				[
					'Horaire de la mairie',
					'Salle multifonction',
					'Services',
					'Ecoles',
					'Economie',
					'Cimetière',
				],
				onglet
			),
			new OngletContentList(
				[
					new Horaire(),
					new SalleMultifonction(),
					new Service(),
					new Ecoles(),
					new Economie(),
					new Cimetiere(),
				],
				onglet
			),
		]);
	}
}

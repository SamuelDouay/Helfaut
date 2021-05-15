import { Component } from '../global';
import { OngletContentList, OngletList } from '../transversal';

export class PratiqueComponent extends Component {
	constructor() {
		super('div', { name: 'id', value: 'container' }, [
			new OngletList([
				'Horraire de la mairie',
				'Salle multifonction',
				'Services',
				'Ecoles',
				'Economie',
			]),
			new OngletContentList([
				'Horraire de la mairie',
				'Salle multifonction',
				'Services',
				'Ecoles',
				'Economie',
			]),
    ]);
  }
}

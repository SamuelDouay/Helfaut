import { Component } from '../global';
import { OngletContentList, OngletList } from '../transversal';
import { Calendrier } from './Calendrier';
import { Information } from './Information';

export class ActivitesComponent extends Component {
	constructor(onglet) {
		super('div', { name: 'id', value: 'container' }, [
			new OngletList(['Calendrier 2021', 'Informations'], onglet),
			new OngletContentList([new Calendrier(), new Information()], onglet),
		]);
	}
}

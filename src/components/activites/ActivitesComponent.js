import { Component } from '../global';
import { OngletContentList, OngletList } from '../transversal';
import { Information } from './Information';

export class ActivitesComponent extends Component {
	constructor() {
		super('div', { name: 'id', value: 'container' }, [
			new OngletList(['Calendrier 2021', 'Informations']),
			new OngletContentList(['Calendrier 2021', new Information()]),
		]);
	}
}

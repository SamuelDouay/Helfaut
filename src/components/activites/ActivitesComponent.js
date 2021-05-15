import { Component } from '../global';
import { OngletContentList, OngletList } from '../transversal';

export class ActivitesComponent extends Component {
	constructor() {
		super('div', { name: 'id', value: 'container' }, [
			new OngletList(['Calendrier 2021', 'Informations']),
			new OngletContentList(['Clendrier 2021', 'Informations']),
		]);
	}

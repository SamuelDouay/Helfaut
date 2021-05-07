import { Component } from '../global';
import { Meteo } from './Meteo';
import { News } from './News';

export class HomeComponent extends Component {
	constructor() {
		super('div', [], [new News(), new Meteo()]);
	}
}

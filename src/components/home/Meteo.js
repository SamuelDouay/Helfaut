import { Component } from '../global';
//const APIKEY = d0f0478fb759f869cb291add389c4369;
export class Meteo extends Component {
	constructor() {
		super('div', { name: 'class', value: 'meteo' }, [
			new Component('h1', { name: 'id', value: 'temperature' }, '10° C'),
			new Component('img', [
				{ name: 'src', value: '' },
				{ name: 'alt', value: 'temps' },
				{ name: 'class', value: 'meteo-image' },
			]),
			new Component('h3', { name: 'id', value: 'date-meto' }, '05/05'),
		]);
	}
}

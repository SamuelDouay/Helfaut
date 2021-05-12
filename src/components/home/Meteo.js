import { Component } from '../global';
//const APIKEY = d0f0478fb759f869cb291add389c4369;
export class Meteo extends Component {
	constructor() {
		super('div', { name: 'id', value: 'meteo' }, [
			new Component('h1', { name: 'id', value: 'meteo_temperature' }, '10° C'),
			new Component('img', [
				{ name: 'src', value: '' },
				{ name: 'alt', value: 'temps' },
				{ name: 'id', value: 'meteo_image' },
			]),
			new Component('h3', { name: 'id', value: 'date_meteo' }, '05/05'),
		]);
	}
}

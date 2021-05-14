import { Component } from '../../global';
//const APIKEY = d0f0478fb759f869cb291add389c4369;
export class Meteo extends Component {
	constructor() {
		super('div', { name: 'id', value: 'meteo' }, [
			new Component('div', { name: 'id', value: 'meteo_temperature' }, '10° C'),
			new Component('img', [
				{ name: 'src', value: '/images/sun.svg' },
				{ name: 'alt', value: 'temps' },
				{ name: 'id', value: 'meteo_image' },
			]),
			new Component('div', { name: 'id', value: 'date_meteo' }, '05/05'),
		]);
	}
}

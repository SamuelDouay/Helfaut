import { MeteoResources } from '../../../resources/MeteoResources';
import { Component } from '../../global';
//const APIKEY = d0f0478fb759f869cb291add389c4369;
export class Meteo extends Component {
	meteoRessource;

	constructor() {
		super('div', { name: 'id', value: 'meteo' }, [
			new Component('div', { name: 'id', value: 'meteo_temperature' }, '-50°C'),
			new Component('img', [
				{ name: 'src', value: '/images/sun.svg' },
				{ name: 'alt', value: 'temps' },
				{ name: 'id', value: 'meteo_image' },
			]),
			new Component(
				'div',
				{ name: 'id', value: 'date_meteo' },
				new Date().getDate() + ' / ' + (new Date().getMonth() + 1)
			),
		]);
		this.meteoRessource = new MeteoResources();
		this.handleQueryChange = this.handleQueryChange.bind(this);
	}

	handleQueryChange() {
		const date = new Date();
		const options = { year: 'numeric', month: 'long', day: 'numeric' };

		this.meteoRessource.getOne().then(rep => {
			document.querySelector('#meteo_temperature').innerHTML =
				Math.round(rep.main.temp) + ' °C';
			document.querySelector('#meteo_image').setAttribute('src',`https://openweathermap.org/img/wn/${rep.weather[0].icon}@2x.png`);
		});
		document.querySelector('#date_meteo').innerHTML = date.toLocaleDateString('fr-FR', options);
	}

	initEvent() {
		this.handleQueryChange();
	}
}

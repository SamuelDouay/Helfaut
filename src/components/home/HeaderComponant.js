import { Component, Div } from '../global';

export class HeaderComponant extends Component {
	constructor() {
		super('div', { name: 'id', value: 'header_home_name' }, [
			new Component('img', [
				{ name: 'src', value: '/images/home.svg' },
				{ name: 'alt', value: 'logo helfaut' },
				{ name: 'id', value: 'helfaut_logo_header' },
			]),
			new Div({ name: 'id', value: 'welcome' }, [
				new Component('h1', null, 'Bienvenue à'),
				new Component('h2', null, 'Helfaut'),
			]),
		]);
	}
}

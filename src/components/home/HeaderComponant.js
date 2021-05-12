import { Component, Div } from '../global';

export class HeaderComponant extends Component {
	constructor() {
		super('div', { name: 'id', value: 'header_home_name' }, [
			new Component('img', [
				{ name: 'src', value: '/images/baniere_helfaut.png' },
				{ name: 'alt', value: 'logo helfaut' },
				{ name: 'id', value: 'helfaut_logo_header' },
			]),
		]);
	}
}

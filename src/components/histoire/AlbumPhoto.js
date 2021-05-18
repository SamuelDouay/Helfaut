import { Component, Div } from '../global';

export class AlbumPhoto extends Component {
	constructor() {
		super('div', { name: 'id', value: 'album_photo' }, [
			new Component('img', [
				{ name: 'src', value: '/images/fleche_gauche.svg' },
				{ name: 'alt', value: 'fleche' },
				{ name: 'id', value: 'fleche_de_gauche' },
				{ name: 'class', value: 'fleche' },
			]),
			new Div({ name: 'id', value: 'photos' }, ''),
			new Component('img', [
				{ name: 'src', value: '/images/fleche_droite.svg' },
				{ name: 'alt', value: 'fleche' },
				{ name: 'id', value: 'fleche_de_droite' },
				{ name: 'class', value: 'fleche' },
			]),
		]);
	}
}

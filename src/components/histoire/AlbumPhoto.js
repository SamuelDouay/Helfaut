import { Component, Div } from '../global';
import { PhotoList } from './PhotoList';

export class AlbumPhoto extends Component {
	constructor() {
		super('div', { name: 'id', value: 'album_photo' }, [
			new Div(
				{ name: 'class', value: 'fleche' },
				new Component('img', [
					{ name: 'src', value: '/images/fleche_gauche.svg' },
					{ name: 'alt', value: 'fleche' },
					{ name: 'id', value: 'fleche_de_gauche' },
					,
				])
			),
			new PhotoList([
				{ value: 'PHOTO 1' },
				{ value: 'PHOTO 2' },
				{ value: 'PHOTO 3' },
				{ value: 'PHOTO 4' },
				{ value: 'PHOTO 5' },
			]),
			new Div(
				{ name: 'class', value: 'fleche' },
				new Component('img', [
					{ name: 'src', value: '/images/fleche_droite.svg' },
					{ name: 'alt', value: 'fleche' },
					{ name: 'id', value: 'fleche_de_droite' },
				])
			),
		]);
	}
}

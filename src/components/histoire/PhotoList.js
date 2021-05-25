import { Component } from '../global';
import { PhotoCard } from './PhotoCard';

export class PhotoList extends Component {
	list;
	constructor(list) {
		super('div', { name: 'id', value: 'photo_container' }, [
			...list.map((e, index) => new PhotoCard(e, index)),
		]);
		this.list = list;
	}
}

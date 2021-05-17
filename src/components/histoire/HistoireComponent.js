import { Component } from '../global';
import { OngletContentList, OngletList } from '../transversal';
import { AlbumPhoto } from './AlbumPhoto';
import { HistoireCommune } from './HistoireCommune';

export class HistoireComponent extends Component {
	constructor() {
		super('div', { name: 'id', value: 'container' }, [
			new OngletList(['Histoire', 'Album Photo']),
			new OngletContentList([new HistoireCommune(), new AlbumPhoto()]),
		]);
	}
}

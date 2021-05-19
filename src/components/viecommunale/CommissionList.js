import { Component } from '../global';
import { Commission } from './Commission';

export class CommissonList extends Component {
	commissonsliste;

	constructor(commissonsliste) {
		super('div', { name: 'id', value: 'commisson_container' }, [
			...commissonsliste.map((e, index) => new Commission(index, e)),
		]);
		this.commissonsliste = commissonsliste;
	}
}

import { Component, Div } from '../global';
import { Personne } from './Personne';

export class PersonneList extends Component {
	personnesliste;

	constructor(personnesliste) {
		super('div', { name: 'id', value: 'personne_container' }, [
			new Div(
				{ name: 'id', value: 'maire' },
				new Personne(personnesliste.shift())
			),
			new Div({ name: 'id', value: 'autre_personne' }, [
				...personnesliste.map(e => new Personne(e)),
			]),
		]);
		this.personnesliste = personnesliste;
	}
}

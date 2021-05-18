import { Component } from '../global';
import { OngletContentList, OngletList } from '../transversal';
import { Bulletins } from './Bulletins';
import { MotDuMaire } from './MotDuMaire';
import { CompteRendu } from './CompteRendu';

export class VieCommunaleComponent extends Component {
	constructor() {
		super('div', { name: 'id', value: 'container' }, [
			new OngletList([
				'Conseil municipal',
				'Mot du maire',
				'Comptes rendus',
				'Bulletins municipaux',
			]),
			new OngletContentList([
				'Conseil municipal',
				new MotDuMaire(),
				new CompteRendu(),
				new Bulletins(),
			]),
		]);
	}
}

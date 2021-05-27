import { Component } from '../global';
import { OngletContentList, OngletList } from '../transversal';
import { Bulletins } from './Bulletins';
import { MotDuMaire } from './MotDuMaire';
import { CompteRendu } from './CompteRendu';
import { ConseilMunicipal } from './ConseilMunicipal';

export class VieCommunaleComponent extends Component {
	constructor(onglet) {
		super('div', { name: 'id', value: 'container' }, [
			new OngletList(
				[
					'Conseil municipal',
					'Mot du maire',
					'Comptes rendus',
					'Bulletins municipaux',
				],
				onglet
			),
			new OngletContentList(
				[
					new ConseilMunicipal(),
					new MotDuMaire(),
					new CompteRendu(),
					new Bulletins(),
				],
				onglet
			),
		]);
	}
}

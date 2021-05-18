import { Component } from '../global';
import { CompteRenduCard } from './CompteRenduCard';

export class CompteRenduList extends Component {
	compterendulist;

	constructor(compterendulist) {
		super('div', { name: 'id', value: 'bulletin_container' }, [
			...compterendulist.map(e => new CompteRenduCard(e)),
		]);
		this.compterendulist = compterendulist;
	}
}

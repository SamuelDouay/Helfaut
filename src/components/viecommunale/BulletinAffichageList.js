import { Component } from '../global';
import { BulletinCard } from './BulletinCard';

export class BulletinAffichageList extends Component {
	bulletinsliste;

	constructor(bulletinsliste) {
		super('div', { name: 'id', value: 'bulletin_container' }, [
			...bulletinsliste.map(e => new BulletinCard(e)),
		]);
		this.bulletinsliste = bulletinsliste;
	}
}

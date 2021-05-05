import { Component } from '../global';
import { News } from './News';

export class HomeComponent extends Component {
	constructor() {
		super('div', [], new News());
	}
}

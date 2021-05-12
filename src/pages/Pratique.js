import { PratiqueComponent } from '../components/pratique/PratiqueComponent';
import { Page } from './Page';

export class Pratique extends Page {
	constructor() {
		super('Pratique', 'home');
	}

	mount(element) {
		super.mount(element);
		this.children = new PratiqueComponent();
		this.element.innerHTML = this.render();
		this.children.initEvent();
	}

	unmount() {
		this.children.destroyEvent();
	}
}

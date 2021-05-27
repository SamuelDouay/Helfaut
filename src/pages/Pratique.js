import { PratiqueComponent } from '../components/pratique/PratiqueComponent';
import { Page } from './Page';

export class Pratique extends Page {
	constructor() {
		super('Pratique', 'home');
	}

	mount(element, index) {
		super.mount(element, index);
		this.children = new PratiqueComponent(index);
		this.element.innerHTML = this.render();
		this.children.initEvent();
	}

	unmount() {
		this.children.destroyEvent();
	}
}

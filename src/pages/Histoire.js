import { HistoireComponent } from '../components/histoire/HistoireComponent';
import { Page } from './Page';

export class Histoire extends Page {
	constructor() {
		super('Histoire', 'home');
	}

	get pageName() {
		return 'Histoire de la commune';
	}

	mount(element, index) {
		super.mount(element, index);
		this.children = new HistoireComponent(index);
		this.element.innerHTML = this.render();
		this.children.initEvent();
	}

	unmount() {
		this.children.destroyEvent();
	}
}

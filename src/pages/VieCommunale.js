import { VieCommunaleComponent } from '../components/viecommunale/VieCommunaleComponent';
import { Page } from './Page';

export class VieCommunale extends Page {
	constructor() {
		super('Vie communale', 'home');
	}

	mount(element) {
		super.mount(element);
		this.children = new VieCommunaleComponent();
		this.element.innerHTML = this.render();
		this.children.initEvent();
	}

	unmount() {
		this.children.destroyEvent();
	}
}

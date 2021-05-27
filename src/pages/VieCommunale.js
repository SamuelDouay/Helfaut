import { VieCommunaleComponent } from '../components/viecommunale/VieCommunaleComponent';
import { Page } from './Page';

export class VieCommunale extends Page {
	constructor() {
		super('Vie communale', 'home');
	}

	mount(element, index) {
		super.mount(element, index);
		this.children = new VieCommunaleComponent(this.onglet);
		this.element.innerHTML = this.render();
		this.children.initEvent();
	}

	unmount() {
		this.children.destroyEvent();
	}
}

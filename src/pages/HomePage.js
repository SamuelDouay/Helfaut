import { HomeComponent } from '../components/home';
import { Page } from './Page';

export class HomePage extends Page {
	constructor() {
		super('Acceuil', 'home');
	}

	mount(element) {
		super.mount(element);
		this.children = new HomeComponent();
		this.element.innerHTML = this.render();
		this.children.initEvent();
	}

	unmount() {
		this.children.destroyEvent();
	}
}

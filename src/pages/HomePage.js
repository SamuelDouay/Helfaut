import { HeaderComponant, HomeComponent } from '../components/home';
import { Page } from './Page';

export class HomePage extends Page {
	constructor() {
		super('Acceuil', 'home');
	}

	get pageName() {
		return new HeaderComponant().render();
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

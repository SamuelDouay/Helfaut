import { ActivitesComponent } from '../components/activites/ActivitesComponent';
import { Page } from './Page';

export class Activites extends Page {
	constructor() {
		super('Activités', 'home');
	}

	mount(element) {
		super.mount(element);
		this.children = new ActivitesComponent();
		this.element.innerHTML = this.render();
		this.children.initEvent();
	}

	unmount() {
		this.children.destroyEvent();
	}
}

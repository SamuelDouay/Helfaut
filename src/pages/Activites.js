import { ActivitesComponent } from '../components/activites/ActivitesComponent';
import { Page } from './Page';

export class Activites extends Page {
	constructor() {
		super('Activités', 'home');
	}

	mount(element, index) {
		super.mount(element, index);
		this.children = new ActivitesComponent(index);
		this.element.innerHTML = this.render();
		this.children.initEvent();
	}

	unmount() {
		this.children.destroyEvent();
	}
}

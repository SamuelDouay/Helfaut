import { Page } from './Page';

export class HomePage extends Page {
	constructor() {
		super('NOT FOUND', 'test');
	}

	mount(element) {
		super.mount(element);
		this.element.innerHTML = `<h1>Page not found</h1>`;
	}
}

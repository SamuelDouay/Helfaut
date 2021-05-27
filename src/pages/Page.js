import { Component } from '../components/global';

export class Page extends Component {
	element;
	#pageTitle;
	onglet;

	constructor(pageTitle, className, children) {
		super('section', { name: 'class', value: className }, children);
		this.#pageTitle = pageTitle;
		this.onglet = 1;
	}

	set pageTitle(pageT) {
		this.#pageTitle = pageT;
	}

	get pageTitle() {
		return this.#pageTitle + ' | Commune Helfaut';
	}

	get pageName() {
		return this.#pageTitle;
	}

	mount(element, onglet) {
		this.onglet = onglet;
		this.element = element;
	}

	unmount() {
		return;
	}
}

import { Component } from '../components/global';
import { Page } from './Page';

export class HomePage extends Page {
	constructor() {
		super('Acceuil', 'home');
	}

	mount(element) {
		super.mount(element);
		this.children = new Component(
			'h1',
			{ name: 'class', value: 'test' },
			'Home page'
		);
		this.element.innerHTML = this.render();
		this.children.initEvent();
	}

	unmount() {
		this.children.destroyEvent();
	}
}

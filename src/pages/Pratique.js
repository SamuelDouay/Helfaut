import { Component } from '../components/global';
import { Page } from './Page';

export class Pratique extends Page {
	constructor() {
		super('Pratique', 'home');
	}

	mount(element) {
		super.mount(element);
		this.children = new Component(
			'h1',
			{ name: 'class', value: 'test' },
			'Pratique'
		);
		this.element.innerHTML = this.render();
		this.children.initEvent();
	}

	unmount() {
		this.children.destroyEvent();
	}
}

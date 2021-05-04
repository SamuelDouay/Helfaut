import { Component } from '../components/global';
import { Page } from './Page';

export class Histoire extends Page {
	constructor() {
		super('Histoire', 'home');
	}

	mount(element) {
		super.mount(element);
		this.children = new Component(
			'h1',
			{ name: 'class', value: 'test' },
			'Histoire'
		);
		this.element.innerHTML = this.render();
		this.children.initEvent();
	}

	unmount() {
		this.children.destroyEvent();
	}
}

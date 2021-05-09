import { Component } from '../components/global';
import { Page } from './Page';

export class Activites extends Page {
	constructor() {
		super('Activités', 'home');
	}

	mount(element) {
		super.mount(element);
		this.children = new Component(
			'h1',
			{ name: 'class', value: 'test' },
			'Activites'
		);
		this.element.innerHTML = this.render();
		this.children.initEvent();
	}

	unmount() {
		this.children.destroyEvent();
	}
}

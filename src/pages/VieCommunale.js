import { Component } from '../components/global';
import { Page } from './Page';

export class VieCommunale extends Page {
	constructor() {
		super('vie_communale', 'home');
	}

	mount(element) {
		super.mount(element);
		this.children = new Component(
			'h1',
			{ name: 'class', value: 'test' },
			'Vie Communale'
		);
		this.element.innerHTML = this.render();
		this.children.initEvent();
	}

	unmount() {
		this.children.destroyEvent();
	}
}

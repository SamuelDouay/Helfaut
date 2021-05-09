import { Component, Div, P } from '../components/global';
import { HomeComponent } from '../components/home';
import { Page } from './Page';

export class HomePage extends Page {
	constructor() {
		super('Acceuil', 'home');
	}

	get pageName() {
		return new Div({ name: 'id', value: 'header_home_name' }, [
			new Component('img', [
				{ name: 'src', value: '/images/home.svg' },
				{ name: 'alt', value: 'logo helfaut' },
				{ name: 'id', value: 'helfaut_logo_header' },
			]),
			new Div({ name: 'id', value: 'welcome' }, [
				new P(null, 'Bienvenue à'),
				new P(null, 'Helfaut'),
			]),
		]).render();
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

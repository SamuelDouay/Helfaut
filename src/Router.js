import { routes } from './constants';

export default class Router {
	static routes = routes;
	static sectionHTMLContent;
	static #menuNavigation;
	static #footerNavigation;
	static currentPage;

	static set menuNavigation(element) {
		this.#menuNavigation = element;
		this.#menuNavigation.querySelectorAll('a').forEach(link => {
			link.addEventListener('click', e => {
				e.preventDefault();
				this.navigate(e.currentTarget.getAttribute('href'));
			});
		});
	}

	static set footerNavigation(element) {
		this.#footerNavigation = element;
		this.#footerNavigation.querySelectorAll('a').forEach(link => {
			if (link.classList.contains('notIndex')) return;
			link.addEventListener('click', e => {
				e.preventDefault();
				this.navigate(e.currentTarget.getAttribute('href'));
			});
		});
	}
	/**
	 * Realise la navigation au sein de notre application en montant les pages dans le contenant Router.sectionHTMLContent
	 * Realise aussi le changement du nom de l'onglet et effectue l'ajout d'une entre dans l'historique de navigation.
	 * @param {string} path
	 * @param {boolean} pushState
	 */
	static navigate(path, pushState = true) {
		const route = this.routes.find(route => route.pathMatcher.test(path));

		if (route) {
			window.scrollTo(0, 0);

			if (pushState) {
				window.history.pushState(
					{ pageTitle: route.page.pageTitle, path: path },
					route.page.pageTitle,
					path
				);
			}

			if (this.currentPage) {
				this.currentPage.unmount();
			}
			route.page.mount(this.sectionHTMLContent);
			this.currentPage = route.page;
			document.querySelector('head title').innerText = route.page.pageTitle;
		}
	}

	/**
	 * Initiliase le router en mettant en place le contenant des pages ainsi que le menu de notre SPA.
	 * Initialise aussi les evenement de deepLinking pour l'application
	 * @param {HTMLElement} sectionContent
	 * @param {HTMLElement} menuNav
	 */
	static initRouter(sectionContent, menuNav, footerNavigation) {
		this.sectionHTMLContent = sectionContent;
		this.menuNavigation = menuNav;
		this.footerNavigation = footerNavigation;

		const handleBack = EPopState => {
			Router.navigate(
				EPopState?.state?.path || document.location.pathname,
				false
			);
		};

		window.onpopstate = handleBack;
		this.navigate(document.location.pathname);
	}
}

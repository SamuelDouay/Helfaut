import { routes } from './constants';

export default class Router {
	static routes = routes;
	static sectionHTMLContent;
	static #menuNavigation;
	static currentPage;

	static set menuNavigation(element) {
		this.#menuNavigation = element;
		this.#menuNavigation.querySelectorAll('a').forEach((link, index) => {
			link.addEventListener('click', e => {
				e.preventDefault();
				if (index > 16) index = index - 15;
				else if (index > 15) index = index - 14;
				else if (index > 8) index = index - 8;
				else if (index > 4 && index != 5) index = index - 5;
				
				if (window.matchMedia("(max-width : 400px)").matches){
					document.querySelector("#menu_header").style.display = 'none';
					document.querySelector('#croix img').setAttribute('src', '/images/humburger.svg');
					document.querySelector("#header_title").style.height = '100%';
				}
				this.navigate(
					e.currentTarget.getAttribute('href'),
					index - 1 === -1 ? index : index - 1
				);
				if (window.matchMedia("(max-width : 400px)").matches){
					document.querySelector("#menu_header").style.display = 'none';
					document.querySelector('#croix img').setAttribute('src', '/images/humburger.svg');
					document.querySelector("#header_title").style.height = '100%';
				}
			});
		});
	}

	/**
	 * Realise la navigation au sein de notre application en montant les pages dans le contenant Router.sectionHTMLContent
	 * Realise aussi le changement du nom de l'onglet et effectue l'ajout d'une entre dans l'historique de navigation.
	 * @param {string} path
	 * @param {boolean} pushState
	 */
	static navigate(path, index, pushState = true) {
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
			route.page.mount(this.sectionHTMLContent, index == 0 ? 1 : index);
			this.currentPage = route.page;

			document.querySelector('head title').innerText = route.page.pageTitle;
			document.querySelector('#contain_header_page_title').innerHTML =
				route.page.pageName;
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
		this.navigate(document.location.pathname, 0);
	}
}

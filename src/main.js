//import { ConnexionButton } from './components/sign';
//import { UserButton } from './components/sign/UserButton';
//import { Connnexion } from './connexion/Connexion';
import Router from './Router';

window.onload = () => window.scrollTo(0, 0);

// On initialise le Router en lui passant la ou le contenu des pages doit etre rendu et le menu de notre SPA.
Router.initRouter(
	document.querySelector('#appContainer'),
	document.querySelector('header'),
	document.querySelector('footer')
);

function handleEventLog(e = null) {
	//const container = document.querySelector('.container-connexion-profile');
	/*const components =
		e?.detail?.logIn || Connnexion.isUserLog()
			? new UserButton(Connnexion.getInfoLogUser())
			: new ConnexionButton();
	container.innerHTML = components.render();
	components.initEvent();*/

	const light_darck = document.querySelector('#theme_l_d');
	let darck = false;
	light_darck.addEventListener('click', e => {
		e.preventDefault();
		if (!darck) {
			darckMode();
			darck = true;
		} else {
			lightMode();
			darck = false;
		}
	});
}

handleEventLog();
window.addEventListener('log', handleEventLog);

function darckMode() {
	const color_darck = ['#212121', '#181818', '#BABABA', '#fff'];
	document
		.querySelector('#theme_l_d')
		.setAttribute('src', '/images/moon_light.svg');
	document
		.querySelector('#home_header')
		.setAttribute('src', '/images/home_white.svg');
	document.querySelectorAll('nav img').forEach(e => {
		e.setAttribute('background', '#fff');
	});
	document.documentElement.style.setProperty('--color-main', color_darck[0]);
	document.documentElement.style.setProperty('--color-seg', color_darck[1]);
	document.documentElement.style.setProperty('--color-ter', color_darck[2]);
	document.documentElement.style.setProperty('--color-font', color_darck[3]);
}

function lightMode() {
	const color_light = ['#f1f1f1', '#ffffff', ' #bababa', ' #000'];
	document
		.querySelector('#theme_l_d')
		.setAttribute('src', '/images/moon_darck.svg');
	document
		.querySelector('#home_header')
		.setAttribute('src', '/images/home.svg');
	document.documentElement.style.setProperty('--color-main', color_light[0]);
	document.documentElement.style.setProperty('--color-seg', color_light[1]);
	document.documentElement.style.setProperty('--color-ter', color_light[2]);
	document.documentElement.style.setProperty('--color-font', color_light[3]);
}

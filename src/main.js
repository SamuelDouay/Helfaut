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
}

handleEventLog();
window.addEventListener('log', handleEventLog);

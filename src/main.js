import Router from './Router';

let dark = false;
window.onload = () => {
	window.scrollTo(0, 0);
	changeColor();
};



// On initialise le Router en lui passant la ou le contenu des pages doit etre rendu et le menu de notre SPA.
Router.initRouter(
	document.querySelector('#appContainer'),
	document.querySelector('header'),
	document.querySelector('footer')
);

function handleEventLog(e = null) {
	const light_darck = document.querySelector('#theme_l_d');
	light_darck.addEventListener('click', e => {
		e.preventDefault();
		changeColor();
	});

	let menu = false;
	const menu_click = document.querySelector("#croix");
	menu_click.addEventListener('click', e => {
		e.preventDefault();
		if (! menu) {
			document.querySelector("#menu_header").style.display = 'block';
			document.querySelector("#header_title").style.display = 'none';
			menu = true;
		}
		else {
			document.querySelector("#menu_header").style.display = 'none';
			document.querySelector("#header_title").style.display = 'block';
			menu = false;
		}
	})
}

handleEventLog();
window.addEventListener('log', handleEventLog);

function changeColor() {
	if (!dark) {
		darkMode();
		dark = true;
	} else {
		lightMode();
		dark = false;
	}
}

function darkMode() {
	const color_darck = ['#212121', '#181818', '#BABABA', '#ddd'];
	document
		.querySelector('#theme_l_d')
		.setAttribute('src', '/images/moon_light.svg');
	document
		.querySelector('#home_header')
		.setAttribute('src', '/images/home_white.svg');
	document.querySelectorAll('nav img').forEach(e => {
		e.setAttribute('background', '#fff');
	});
	document.documentElement.style.setProperty('--color-main', color_darck[1]);
	document.documentElement.style.setProperty('--color-seg', color_darck[0]);
	document.documentElement.style.setProperty('--color-ter', color_darck[2]);
	document.documentElement.style.setProperty('--color-font', color_darck[3]);
	document.documentElement.style.setProperty('--color-footer', color_darck[0]);
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
	document.documentElement.style.setProperty('--color-footer', color_light[2]);
}

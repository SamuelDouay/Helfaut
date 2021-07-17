import Router from './Router';

let dark,
	menu = false;
window.onload = () => {
	window.scrollTo(0, 0);
	matchMedia('(prefers-color-scheme: dark)').matches
		? (dark = false)
		: (dark = true);
	changeColor();
};

// On initialise le Router en lui passant la ou le contenu des pages doit etre rendu et le menu de notre SPA.
Router.initRouter(
	document.querySelector('#appContainer'),
	document.querySelector('header'),
	document.querySelector('footer')
);

function handleEventLog(e = null) {
	const darkmode = [
		document.querySelector('#theme_l_d'),
		document.querySelector('#darkmode_phone'),
	];
	darkmode.forEach(element => {
		element.addEventListener('click', e => {
			e.preventDefault();
			changeColor();
		});
	});
	const menu_click = document.querySelector('#croix');
	menu_click.addEventListener('click', e => {
		e.preventDefault();
		changemenu();
	});
}

handleEventLog();
window.addEventListener('log', handleEventLog);

window.addEventListener('scroll', e => {
	e.preventDefault();
	if (window.scrollY > 30 && window.matchMedia('(max-width : 400px)').matches) {
		document.querySelector('header').style.height = '80px';
		document.querySelector('#header_title').style.height = '60px';
		if (document.querySelector('#helfaut_logo_header') != undefined) {
			document.querySelector('#contain_header_page_title').innerHTML =
				'Acceuil';
		}
	} else if (window.matchMedia('(max-width : 400px)').matches) {
		document.querySelector('header').style.height = '150px';
		document.querySelector('#header_title').style.height = '100%';
	}
});

function changemenu() {
	if (!menu) {
		document.querySelector('#menu_header').style.display = 'block';
		document.querySelector('#header_title').style.height = '0';
		document.querySelector('#header_title').style.opacity = '0';
		document
			.querySelector('#croix img')
			.setAttribute('src', '/images/croix.svg');
		document.querySelector('#header').style.height = '400px';

		menu = true;
	} else {
		document.querySelector('#menu_header').style.display = 'none';
		document.querySelector('#header_title').style.height = '100%';
		document.querySelector('#header_title').style.opacity = '1';
		document.querySelector('#header').style.height = '150px';
		document
			.querySelector('#croix img')
			.setAttribute('src', '/images/humburger.svg');
		menu = false;
	}
}

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

	document
		.querySelector('#darkmode_phone img')
		.setAttribute('src', '/images/moon_light.svg');

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
	document
		.querySelector('#darkmode_phone img')
		.setAttribute('src', '/images/moon_darck.svg');
	document.documentElement.style.setProperty('--color-main', color_light[0]);
	document.documentElement.style.setProperty('--color-seg', color_light[1]);
	document.documentElement.style.setProperty('--color-ter', color_light[2]);
	document.documentElement.style.setProperty('--color-font', color_light[3]);
	document.documentElement.style.setProperty('--color-footer', color_light[2]);
}

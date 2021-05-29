import { Component, Div } from '../../global';

export class Information extends Component {
	heure = new Date().getHours();
	minute = new Date().getMinutes();
	jour = new Date().getDay();

	constructor() {
		super('div', { name: 'id', value: 'information_homepage' }, [
			new Div({ name: 'id', value: 'info_title' }, "Mairie d'Helfaut"),
			new Div({ name: 'id', value: 'info_horaire' }, ''),
		]);
	}

	initEvent() {
		let horraire_affichage = 'Ouvre Lundi à 8h30';

		if (this.jour != 0 && this.jour != 6) {
			if (this.heure < 8 && this.minute < 30)
				horraire_affichage = 'Fermer - Ouvre à 8h30';
			else if (this.heure < 9 && this.jour === 3)
				horraire_affichage = 'Fermer - Ouvre à 9h';
			else if (this.heure < 12) horraire_affichage = 'Ouvert - Ferme à 12h';
			else if (this.heure < 13 && this.minute < 30)
				horraire_affichage = 'Fermer - Ouvre à 13h30';
			else if (this.heure < 17 && this.minute < 30)
				horraire_affichage = 'Ouvert - Ferme à 17h30';
			else
				this.jour === 2
					? (horraire_affichage = 'Ouvre demain à 8h30')
					: (horraire_affichage = 'Ouvre demain à 8h30');
		}

		document.querySelector('#info_horaire').innerHTML = horraire_affichage;
	}
}

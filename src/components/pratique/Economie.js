import { Component, Div } from '../global';
import { CommercantList } from './CommercantList';

export class Economie extends Component {
	constructor() {
		super('div', { name: 'id', value: 'eco_container' }, [
			new Div({ name: 'id', value: 'presentation' }, [
				new Div(null, 'Artisans et commerçants'),
				new Div(
					null,
					'La mairie par l’intermédiaire de son site offre un espace publicitaire gratuit réservé aux artisans et commerçants d’Helfaut.'
				),
				new CommercantList('Lorem Ipsum', [
					{
						nom: 'NOM',
						prenom: 'Lorem Ipsum',
						description: 'Description',
						adresse: 'Adresse',
						numero: 'Numéro',
						horraire: 'Horaires',
					},
					{
						nom: 'NOM',
						prenom: 'Lorem Ipsum',
						description: 'Description',
						adresse: 'Adresse',
						numero: 'Numéro',
						horraire: 'Horaires',
					},
					{
						nom: 'NOM',
						prenom: 'Lorem Ipsum',
						description: 'Description',
						adresse: 'Adresse',
						numero: 'Numéro',
						horraire: 'Horaires',
					},
					{
						nom: 'NOM',
						prenom: 'Lorem Ipsum',
						description: 'Description',
						adresse: 'Adresse',
						numero: 'Numéro',
						horraire: 'Horaires',
					},
					{
						nom: 'NOM',
						prenom: 'Lorem Ipsum',
						description: 'Description',
						adresse: 'Adresse',
						numero: 'Numéro',
						horraire: 'Horaires',
					},
				]),
				new CommercantList('Lorem Ipsum', [
					{
						nom: 'NOM',
						prenom: 'Lorem Ipsum',
						description: 'Description',
						adresse: 'Adresse',
						numero: 'Numéro',
						horraire: 'Horaires',
					},
					{
						nom: 'NOM',
						prenom: 'Lorem Ipsum',
						description: 'Description',
						adresse: 'Adresse',
						numero: 'Numéro',
						horraire: 'Horaires',
					},
				]),
				new CommercantList('Lorem Ipsum', [
					{
						nom: 'NOM',
						prenom: 'Lorem Ipsum',
						description: 'Description',
						adresse: 'Adresse',
						numero: 'Numéro',
						horraire: 'Horaires',
					},
					{
						nom: 'NOM',
						prenom: 'Lorem Ipsum',
						description: 'Description',
						adresse: 'Adresse',
						numero: 'Numéro',
						horraire: 'Horaires',
					},
					{
						nom: 'NOM',
						prenom: 'Lorem Ipsum',
						description: 'Description',
						adresse: 'Adresse',
						numero: 'Numéro',
						horraire: 'Horaires',
					},
				]),
			]),
		]);
	}
}

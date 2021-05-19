import { Component, Div } from '../global';
import { CommissonList } from './CommissionList';
import { PersonneList } from './PersonneList';

export class ConseilMunicipal extends Component {
	constructor() {
		super('div', { name: 'id', value: 'conseil_container' }, [
			new Div(
				{ name: 'id', value: 'container_arbre' },
				new PersonneList([
					{ nom: 'NOM', prenom: 'Prenom', fonction: 'Fonction' },
					{ nom: 'NOM', prenom: 'Prenom', fonction: 'Fonction' },
					{ nom: 'NOM', prenom: 'Prenom', fonction: 'Fonction' },
					{ nom: 'NOM', prenom: 'Prenom', fonction: 'Fonction' },
					{ nom: 'NOM', prenom: 'Prenom', fonction: 'Fonction' },
					{ nom: 'NOM', prenom: 'Prenom', fonction: 'Fonction' },
					{ nom: 'NOM', prenom: 'Prenom', fonction: 'Fonction' },
				])
			),
			new Div({ name: 'class', value: 'container_autre' }, [
				new Div({ name: 'class', value: 'conseilles_municipaux' }, [
					new Div(
						{ name: 'class', value: 'title_conseil' },
						'Conseillé municipaux :'
					),
					new Div(null, [
						'Lorem IPSUM,',
						'Lorem IPSUM,',
						'Lorem IPSUM,',
						'Lorem IPSUM,',
						'Lorem IPSUM,',
						'Lorem IPSUM,',
						'Lorem IPSUM,',
						'Lorem IPSUM,',
						'Lorem IPSUM,',
						'Lorem IPSUM,',
						'Lorem IPSUM,',
						'Lorem IPSUM,',
						'Lorem IPSUM,',
						'Lorem IPSUM,',
						'Lorem IPSUM,',
						'Lorem IPSUM',
					]),
				]),
				new Div({ name: 'class', value: 'conseilles_municipaux' }, [
					new Div({ name: 'class', value: 'title_conseil' }, 'Commissions :'),
					new CommissonList([
						{
							delegue: 'Lorem IPSUM',
							membres: [
								'Lorem IPSUM',
								'Lorem IPSUM',
								'Lorem IPSUM',
								'Lorem IPSUM',
								'Lorem IPSUM',
								'Lorem IPSUM',
								'Lorem IPSUM',
								'Lorem IPSUM',
							],
						},
						{
							delegue: 'Lorem IPSUM',
							membres: [
								'Lorem IPSUM',
								'Lorem IPSUM',
								'Lorem IPSUM',
								'Lorem IPSUM',
								'Lorem IPSUM',
								'Lorem IPSUM',
								'Lorem IPSUM',
								'Lorem IPSUM',
							],
						},
						{
							delegue: 'Lorem IPSUM',
							membres: [
								'Lorem IPSUM',
								'Lorem IPSUM',
								'Lorem IPSUM',
								'Lorem IPSUM',
								'Lorem IPSUM',
								'Lorem IPSUM',
								'Lorem IPSUM',
								'Lorem IPSUM',
							],
						},
					]),
				]),
			]),
		]);
	}
}

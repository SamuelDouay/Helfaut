import {
	NotFoundPage,
	HomePage,
	Histoire,
	Pratique,
	Activites,
	VieCommunale,
} from '../pages';

/**
 * Tableau regroupant tout nos routes auquel peut repondre notre application.
 */
export const routes = [
	{
		page: new HomePage(),
		pathMatcher: new RegExp(/^\/$/, ''),
	},
	{
		page: new Histoire(),
		pathMatcher: new RegExp(/^\/histoire$/),
	},
	{
		page: new Pratique(),
		pathMatcher: new RegExp(/^\/pratique$/),
	},
	{
		page: new Activites(),
		pathMatcher: new RegExp(/^\/activites$/),
	},
	{
		page: new VieCommunale(),
		pathMatcher: new RegExp(/^\/vie-communale$/),
	},
	{
		page: new NotFoundPage(),
		pathMatcher: new RegExp(/.*/),
	},
];

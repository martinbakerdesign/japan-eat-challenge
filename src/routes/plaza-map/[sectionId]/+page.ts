import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import {episodes,  restaurants } from '$data'
import { PlazaSections } from '$constants';

export type PlazaPageData = {
	section: PlazaSection,
	restaurants: Restaurant[],
	episodes: Episode[],
	highlight: number|null
}

export const load: PageLoad<PlazaPageData> = ({ params, url }: {params: {sectionId: PlazaSection, url: URL}}) => {
	if (!PlazaSections.includes(params.sectionId)) {
		error(404, 'Episode not found');
	}

	const highlight = url.searchParams.get('highlight')

	const sectionRestaurants = restaurants.filter(restaurant => restaurant.id.includes(`${params.sectionId}__`));
	const sectionEpisodes = episodes.filter(ep => ep.restaurant.includes(`${params.sectionId}__`));

	return {
		section: params.sectionId,
		restaurants: sectionRestaurants,
		episodes: sectionEpisodes,
		highlight: highlight != null ? +highlight : null
	} as PlazaPageData
}; 
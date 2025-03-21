import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import {episodes,  restaurants } from '$data'
import { PlazaSections } from '$types';

export const load: PageLoad = ({ params }) => {
	if (!PlazaSections.includes(params.sectionId as PlazaSection)) {
		error(404, 'Episode not found');
	}

	const sectionRestaurants = restaurants.filter(restaurant => restaurant.id.includes(`${params.sectionId}__`));
	const sectionEpisodes = episodes.filter(ep => ep.restaurant.includes(`${params.sectionId}__`));

	return {
		section: params.sectionId,
		restaurants: sectionRestaurants,
		episodes: sectionEpisodes
	}

};
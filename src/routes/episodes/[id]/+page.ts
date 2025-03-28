import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import {episodes}from '$data'
import {getEpisodeById} from '$utils';

export const load: PageLoad<Episode> = ({ params }) => {
	const epIds = episodes.map(ep => ep.id.toString());

	if (epIds.includes(params.id)) {
		return getEpisodeById(episodes,params.id);
	}

	error(404, 'Episode not found');
};
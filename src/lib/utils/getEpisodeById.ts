import type { Episode } from "../../types";

export default function getEpisodeById(episodes: Episode[], id: string) {
	return episodes.find(ep => ep.id.toString() === id);
}
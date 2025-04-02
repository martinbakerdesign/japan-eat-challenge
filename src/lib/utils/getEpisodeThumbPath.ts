export default function getEpisodeThumbPath(episodeId: number|null|undefined) {
	return (episodeId != null) ? `/assets/thumbnails/episode-${episodeId}.webp` : ''
}
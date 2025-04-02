
declare global {
    type EpisodeID = number;
    type Episode = {
        id: EpisodeID,
        vidId: ShortID,
        restaurant: RestaurantID,
        dish: string,
        tier: Tier,
        date: DateString,
    }
}

export {
    type EpisodeID,
    type Episode
}
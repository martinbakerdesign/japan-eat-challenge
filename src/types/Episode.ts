export type EpisodeID = number;

export type Episode = {
    id: Number,
    vidId: ShortID,
    restaurant: RestaurantID,
    dish: string,
    tier: Tier,
    date: DateString,
}
import removeEmojis from "./removeEmojis";

export default function extractCategoriesFromRestaurants(restaurants: Restaurant[]) {
    return Array.from(
        new Set(
            restaurants.map(r => r.cat).flat()
        )
    ).sort(
        (a,b) => removeEmojis(a) < removeEmojis(b) ? -1 : 1
    )
}
export type ShopNumber = number;

export type ShopCoords = [PlazaSection, ShopNumber];

export type Shop = Record<string, any>;

export type RestaurantID = `${PlazaSection}__${ShopNumber}`;

export type RestaurantCategory = string;

export type Restaurant = {
    id: RestaurantID,
    name: string,
    cat: RestaurantCategory[],
    website?: string,
    thumbnail?: string,
}
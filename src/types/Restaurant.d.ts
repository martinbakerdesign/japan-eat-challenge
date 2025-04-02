declare global {
    type ShopNumber = number;
    
    type ShopCoords = [PlazaSection, ShopNumber];
    
    type Shop = Record<string, any>;
    
    type RestaurantID = `${PlazaSection}__${ShopNumber}`;
    
    type RestaurantCategory = string;
    
    type Restaurant = {
        id: RestaurantID,
        name: string,
        cat: RestaurantCategory[],
        website?: string,
        thumbnail?: string,
    }
}

export {
    type ShopNumber,
    type ShopCoords,
    type Shop,
    type RestaurantID,
    type Restaurant,
    type RestaurantCategory,
}
export interface PlacesState {
    autoRepairShops: AutoRepairShopItem[]
    polyline: any;
}


export interface AutoRepairShopItem {
    name: string;
    address: string;
    rating: number;
    userTotalRating: number;
    distance: number;
    favorite: boolean;
    location: Location
}

interface Location {
    lat: number,
    lng: number,
}
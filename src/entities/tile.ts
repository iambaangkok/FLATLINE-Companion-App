export interface TileI {
    name: string,
    width: number,
    height: number

    getFullName: () => string;
}

export class Tile implements TileI {
    name: string;
    width: number;
    height: number;

    constructor(name: string, width: number, height: number) {
        this.name = name;
        this.width = width;
        this.height = height;
    }

    getFullName = (): string => {
        return `${this.width}x${this.height} ${this.name}`
    }
}

export const
    CorridorIStraight = new Tile("Corridor - I straight", 2, 2),
    CorridorLCorner = new Tile("Corridor - L corner", 2, 2),
    CorridorTJunction = new Tile("Corridor - L corner", 2, 2),
    CorridorPlusIntersection = new Tile("Corridor - + intersection", 2, 2),
    ToiletMultiDoor = new Tile("Toilet - Multidoor", 2, 3),
    ToiletInnerDoor = new Tile("Toilet - Inner door", 2, 3),
    LivingRoom = new Tile("Living room", 4, 4),
    BedroomSmall = new Tile("Bedroom - Small", 3, 4),
    BedroomMedium = new Tile("Bedroom - Medium", 5, 5),
    StorageRoom = new Tile("Storage", 6, 4),
    Storefront = new Tile("Storefront", 10, 5),
    BossRoom = new Tile("Boss room", 10, 10),
    TILES: TileI[] = [
        CorridorIStraight,
        CorridorLCorner,
        CorridorTJunction,
        CorridorPlusIntersection,
        ToiletMultiDoor,
        ToiletInnerDoor,
        LivingRoom,
        BedroomSmall,
        BedroomMedium,
        StorageRoom,
        Storefront,
        BossRoom,
    ]

export const getSortedTilesBySize = (tiles: TileI[]): TileI[] => {
    return [...tiles].sort((a: TileI, b : TileI) => {
        if (a.width == b.width) {
            if (a.height == b.height) {
                return a.name < b.name ? 1 : -1
            }
            return a.height - b.height
    }
        return a.width - b.width
    })
}

export const getTile = (tileName: string): TileI => {
    const tile = TILES.find((tile) => tile.name == tileName)
    return tile != undefined? tile : new Tile("UNDEFINED", 0, 0);
}
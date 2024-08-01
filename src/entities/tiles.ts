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

export const TILES: Tile[] = [
    new Tile("Corridor - I straight", 2, 2),
    new Tile("Corridor - L corner", 2, 2),
    new Tile("Corridor - T junction", 2, 2),
    new Tile("Corridor - + intersection", 2, 2),
    new Tile("Toilet - Multidoor", 2, 3),
    new Tile("Toilet - Inner door", 2, 3),
    new Tile("Living room", 4, 4),
    new Tile("Bedroom - Small", 3, 4),
    new Tile("Bedroom - Medium", 5, 5),
    new Tile("Storage", 6, 4),
    new Tile("Storefront", 10, 5),
    new Tile("Boss room", 10, 10),
]

export const getSortedTilesBySize = (tiles : Tile[]): Tile[] => {
    return [...tiles].sort((a: Tile, b : Tile) => {
        if (a.width == b.width) {
            if (a.height == b.height) {
                return a.name < b.name ? 1 : -1
            }
            return a.height - b.height
    }
        return a.width - b.width
    })
}
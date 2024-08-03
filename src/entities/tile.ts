/* eslint-disable @typescript-eslint/no-var-requires */
import imgCorridorIStraight from "../assets/2x2 corridor - I.png"
import imgCorridorLCorner from "../assets/2x2 corridor - L.png"
import imgCorridorTJunction from "../assets/2x2 corridor - T junction.png"
import imgCorridorPlusIntersection from "../assets/2x2 corridor - 4 way intersection.png"
import imgToiletMultiDoor from "../assets/2x3 toilet - multiple door.png"
import imgToiletInnerDoor from "../assets/2x3 toilet - inner door.png"
import imgLivingRoom from "../assets/4x4 living room.png"
import imgBedroomSmall from "../assets/3x4 bedroom.png"
import imgBedroomMedium from "../assets/5x5 bedroom.png"
import imgStorageRoom from "../assets/6x4 storage.png"
import imgStorefront from "../assets/10x5 convenience storefront.png"
import imgBossRoom from "../assets/10x10 boss room.png"
export interface TileI {
    name: string,
    width: number,
    height: number,
    image: string,

    getFullName: () => string;
}

export class Tile implements TileI {
    name: string;
    width: number;
    height: number;
    image: string;

    constructor(name: string, width: number, height: number, string: string = "") {
        this.name = name;
        this.width = width;
        this.height = height;
        this.image = string;
    }

    getFullName = (): string => {
        return `${this.width}x${this.height} ${this.name}`
    }
}

export const
    UndefinedTile = new Tile ("Undefined", 0, 0),
    CorridorIStraight = new Tile("Corridor - I straight", 2, 2, imgCorridorIStraight),
    CorridorLCorner = new Tile("Corridor - L corner", 2, 2, imgCorridorLCorner),
    CorridorTJunction = new Tile("Corridor - T junction", 2, 2, imgCorridorTJunction),
    CorridorPlusIntersection = new Tile("Corridor - + intersection", 2, 2, imgCorridorPlusIntersection),
    ToiletMultiDoor = new Tile("Toilet - Multidoor", 2, 3, imgToiletMultiDoor),
    ToiletInnerDoor = new Tile("Toilet - Inner door", 2, 3, imgToiletInnerDoor),
    LivingRoom = new Tile("Living room", 4, 4, imgLivingRoom),
    BedroomSmall = new Tile("Bedroom - Small", 3, 4, imgBedroomSmall),
    BedroomMedium = new Tile("Bedroom - Medium", 5, 5, imgBedroomMedium),
    StorageRoom = new Tile("Storage", 6, 4, imgStorageRoom),
    Storefront = new Tile("Storefront", 10, 5, imgStorefront),
    BossRoom = new Tile("Boss room", 10, 10, imgBossRoom),
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
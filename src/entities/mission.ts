import { LivingRoom, StorageRoom, Storefront, TileI, TILES, ToiletInnerDoor } from "./tile";

export interface MissionI {
    name: string,
    tiles: Map<TileI, number>,
}

export class Mission implements MissionI {
    name: string;
    tiles: Map<TileI, number>;

    constructor(name: string, tiles: Map<TileI, number>) {
        this.name = name;
        this.tiles = tiles;
    }

}

export const MISSIONS: MissionI[] = [
    new Mission("All Tiles",
        new Map(TILES.map((tile) => [tile, 1]))
    ),
    new Mission("A Little In-Convenience",
        new Map([
            [Storefront, 1],
            [StorageRoom, 1],
            [ToiletInnerDoor, 1],
            [LivingRoom, 1]
        ])
    ),
]
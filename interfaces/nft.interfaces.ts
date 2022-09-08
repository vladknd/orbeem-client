import { contracts } from "../config";

export interface INFT {
    name: string;
    description: string;
    image: string;

    id: string;
    tokenId: number;
    itemId: number;
    tokenURI: string;
    imageURI: string;
    level: number;
    game: {
        name: string;
    };
    collection: {
        name: string;
    }
    nftAddress: string;
    owner: string;

    price: string;
}

export interface IAegis extends INFT {
    basePower: number;
    baseDurability: number;
    baseIntelligence: number;

    power: number;
    durability: number;
    intelligence: number;
}
export interface IRune extends INFT {}
export type NFT = IAegis | IRune

export interface ICollection {
    id: string;
    name: string;
    description: string;
}
enum COLLECTION {
    AEGIS = "AEGIS",
    RUNE = "RUNE"
}
export interface IGame {
    id: string;
    name: string;
    collections?: Array<ICollection>;
    nfts?: Array<INFT>

}
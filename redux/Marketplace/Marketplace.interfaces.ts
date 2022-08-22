import { INFT } from "../../interfaces/nft.interfaces";

export interface IMarketplaceState {
    loading: boolean;
    error: string | null;
    collections: Array<ICollection>;
    nfts: Array<INFT>;
    type: ITAB
}


export interface ICollection {
    name: COLLECTION;
    description: string;
    game: GAME;
    
}
export interface IGame {
    name: GAME
}


export interface ITAB {
    tab: TAB,
    game: GAME | null,
    collection: COLLECTION | null,
}
// ENUMS:
export enum TAB {
    GAMES,
    GAME,
    COLLECTION
}

export enum GAME {
    DOTA2,
    PUBG
}


export enum COLLECTION {
    RUNE
}
import { ICollection, INFT, NFT } from "../../interfaces/nft.interfaces";

export interface IMarketplaceState {
    loading: boolean;
    error: string | null;
    collections: Array<ICollection>;
    nfts: Array<NFT>;
    
    tab: TAB,
    game: string | null,
    collection: string | null,

    breadcrumbs: Array<string>
}
    

// ENUMS:
export enum TAB {
    GAMES,
    GAME,
    COLLECTION
}

// export enum GAME {
//     DOTA2 = "DOTA2",
//     PUBG = "PUBG"
// }


// export enum COLLECTION {
//     RUNE
// }
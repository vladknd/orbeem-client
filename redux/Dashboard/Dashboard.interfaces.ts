import { ICollection, INFT, IAegis, NFT } from '../../interfaces/nft.interfaces'



export enum DASHBOARD_TAB {
    MY_NFT,
    MY_GAMES,
    DOTA,
    CS, 
    PUBG
}
export interface IDashboardState {
    tab: DASHBOARD_TAB,
    loading: boolean;
    error: string;

    items: Array<NFT> | null;
    collections: Array<Pick<ICollection, "name">> | null;
    selected: NFT | null;

    filterItems: Array<NFT> | null;
    filterGames: Array<string>;
    filterCollections: Array<string>;
}


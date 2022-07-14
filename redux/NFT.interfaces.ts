import { INFT } from '../web3/web3Utils'

export interface INFTData {
    name: string;
    description: string;
    tokenId: number;
    itemId: number;
    tokenURI: string;
    image: string;

    owner: string;
    sold: boolean;
    price: string;

    level: number;

    basePower: number;
    baseDurability: number;
    baseIntelligence: number;


    power: number;
    durability: number;
    intelligence: number;
}

export interface INFTState extends INFTData {
    upgrading?: boolean;
}

export interface INFTInitState {
    loading: boolean;
    upgrading: boolean;
    item: INFTState | null;
    error: string;
}

export enum PROFILE_TAB {
    MY_NFT,
    MY_GAMES
}
export interface IProfileState {
    loading: boolean;
    tab: PROFILE_TAB,
    items: Array<INFT> | null;
    error: string;
    selected: INFT | null;
}

export interface IMarketNFTInitState {
    loading: boolean;
    items: Array<INFT> | null;
    error: string;
}


import { NFT } from "../../interfaces/nft.interfaces";

// export interface INFTState extends IRune {
//     upgrading?: boolean;
// }

export interface INFTInitState {
    loading: boolean;
    upgrading: boolean;
    item: NFT | null;
    error: string;
}
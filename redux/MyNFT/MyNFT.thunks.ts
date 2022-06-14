import { getMyNFTs, getNFTData } from "../../web3/web3Utils"
import { AppDispatch } from "../store"
import { INFTInitState } from "../NFT.interfaces"
import { myNFTActions } from "./MyNFT.slice"

export function fetchMyNFT() {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(myNFTActions.MyNFTFetching)
            // const nftData = await getNFTData(_tokenID)
            const myNfts = await getMyNFTs()
            dispatch(myNFTActions.MyNFTFetchingSuccess(myNfts))
        } catch (error: any) {
            dispatch(myNFTActions.MyNFTFetchingFailure(error))
        }
    }
}
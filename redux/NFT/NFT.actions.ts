import { getNFTData } from "../../web3/web3Utils"
import { AppDispatch } from "../store"
import { INFTInitState } from "../NFT.interfaces"
import { nftActions } from "./NFT.slice"

export const fetchNFT = async (dispatch: AppDispatch, _tokenID: number) => {
    try {
        dispatch(nftActions.nftFetching)
        const nftData = await getNFTData(_tokenID)
        dispatch(nftActions.nftFetchingSuccess(nftData))
    } catch (error: any) {
        dispatch(nftActions.nftFetchingFailure(error))
    }
}

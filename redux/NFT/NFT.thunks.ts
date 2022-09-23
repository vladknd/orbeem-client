import { getNFTData } from '../../services/nft.service'
import { AppDispatch } from "../store"
import { nftActions } from "./NFT.slice"

export const fetchNFT = async (dispatch: AppDispatch, _tokenId: string, _nftAddress: string) => {
    try {
        dispatch(nftActions.nftFetching)
        const nftData = await getNFTData(_tokenId, _nftAddress)
        dispatch(nftActions.nftFetchingSuccess(nftData))
    } catch (error: any) {
        dispatch(nftActions.nftFetchingFailure(error))
    }
}

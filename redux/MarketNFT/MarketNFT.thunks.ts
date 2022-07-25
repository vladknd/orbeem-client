import { getNFTs, getNFTData } from "../../services/nft.service"
import { AppDispatch } from "../store"
import { marketNFTActions } from "./MarketNFT.slice"

export function fetchMarketNFT() {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(marketNFTActions.MarketNFTFetching)
            // const nftData = await getNFTData(_tokenID)
            const myNfts = await getNFTs()
            dispatch(marketNFTActions.MarketNFTFetchingSuccess(myNfts))
        } catch (error: any) {
            dispatch(marketNFTActions.MarketNFTFetchingFailure(error))
        }
    }
}
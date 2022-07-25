import { getMyNFTs, getNFTData } from "../../services/nft.service"
import { AppDispatch } from "../store"
import { profileActions } from "./Profile.slice"

export function fetchMyNFT(publicAddress: string) {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(profileActions.MyNFTFetching())
            const myNfts = await getMyNFTs(publicAddress)
            console.log("GOTIT", myNfts);
            
            if(myNfts) dispatch(profileActions.MyNFTFetchingSuccess(myNfts))
        } catch (error: any) {
            await dispatch(profileActions.MyNFTFetchingFailure(error))
        }

    }
}

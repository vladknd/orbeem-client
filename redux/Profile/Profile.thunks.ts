import { getMyNFTs, getNFTData } from "../../services/nft.service"
import { AppDispatch } from "../store"
import { profileActions } from "./Profile.slice"

export function fetchMyNFT(_publicAddress: string, _offset: number) {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(profileActions.MyNFTFetching())
            const myNfts = await getMyNFTs(_publicAddress, 0)
            console.log("GOTIT", myNfts);
            
            if(myNfts) dispatch(profileActions.MyNFTFetchingSuccess(myNfts))
        } catch (error: any) {
            await dispatch(profileActions.MyNFTFetchingFailure(error))
        }

    }
}

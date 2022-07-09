import { getMyNFTs, getNFTData } from "../../web3/web3Utils"
import { AppDispatch } from "../store"
import { profileActions } from "./Profile.slice"

export function fetchMyNFT(publicAddress: string) {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(profileActions.MyNFTFetching())
            const myNfts = await getMyNFTs(publicAddress)

            if(myNfts) dispatch(profileActions.MyNFTFetchingSuccess(myNfts))
        } catch (error: any) {
            await dispatch(profileActions.MyNFTFetchingFailure(error))
        }

        // dispatch(profileActions.MyNFTFetching)
        // getMyNFTs(publicAddress).then(_myNFT => {
        //     if(_myNFT) dispatch(profileActions.MyNFTFetchingSuccess(_myNFT))
        //     else throw new Error("PROBABLY NO METAMASK ADDRESS")
        // }).catch(_error => {
        //     dispatch(profileActions.MyNFTFetchingFailure(_error))
        // })
    }
}
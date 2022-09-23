import { fetchCollections } from "../../services/collection.service"
import { getMyNFTs, getNFTData } from "../../services/nft.service"
import { AppDispatch } from "../store"
import { dashboardActions } from "./Dashboard.slice"

export function fetchMyNFT(_publicAddress: string, _offset: number) {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(dashboardActions.MyNFTFetching())
            const myNfts = await getMyNFTs(_publicAddress, 0)
            console.log("GOTIT", myNfts);
            
            if(myNfts) dispatch(dashboardActions.MyNFTFetchingSuccess(myNfts))
        } catch (error: any) {
            await dispatch(dashboardActions.MyNFTFetchingFailure(error))
        }

    }
}


export function getCollections() {
    return async (dispatch: AppDispatch) => {
        try {
            const collections = await fetchCollections()
            console.log("GET-COLLECTIONS", collections);
            
            if(collections) dispatch(dashboardActions.GetCollectionsSuccess(collections))
        } catch (error: any) {
        }
    }
} 
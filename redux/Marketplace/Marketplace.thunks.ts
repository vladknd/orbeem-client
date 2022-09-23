import { fetchCollection, fetchGameCollections } from "../../services/collection.service";
import { AppDispatch } from "../store";
import { marketplaceActions } from "./Marketplace.slice";

export function getGameCollections(_game: string) {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(marketplaceActions.CollectionsLoading())

            const collections = await fetchGameCollections(_game)      
            console.log("GET-COLLECTIONS-THUNK: COLLECTIONs", collections);
            dispatch(marketplaceActions.CollectionsSuccess(collections))
            dispatch(marketplaceActions.CollectionsLoaded())
    
        } catch (error: any) {
            await dispatch(marketplaceActions.CollectionsFailure(error))
        }
    }
}

export function getCollection(_collection: string, _orderBy: string, _orderDirection: string) {
    return async (dispatch: AppDispatch) => {
        try {
            console.log("GET-COLLECTION-THUNK: COLLECTION NAME", _collection);
            dispatch(marketplaceActions.CollectionClear())
            dispatch(marketplaceActions.CollectionLoading())
            
            const collection = await fetchCollection(_collection, _orderBy, _orderDirection)      
            console.log("GET-COLLECTIONS-THUNK: COLLECTIONs", collection);
            
            dispatch(marketplaceActions.CollectionSuccess(collection))
            dispatch(marketplaceActions.CollectionLoaded())

        } catch (error: any) {
            await dispatch(marketplaceActions.CollectionFailure(error))
            dispatch(marketplaceActions.CollectionLoaded())
        }
    }
}
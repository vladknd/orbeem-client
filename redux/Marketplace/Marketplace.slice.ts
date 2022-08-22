import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//IMPORT-INTERFACES:__________________________
import { ICollection, IMarketplaceState, ITAB, TAB } from './Marketplace.interfaces'



const initState: IMarketplaceState = {
    loading: false,
    error: null,
    collections: [],
    nfts: [],
    type: {
        tab: TAB.GAMES,
        game: null,
        collection: null
    }
}

const marketplaceSlice = createSlice({
    name: "MARKETPLACE",
    initialState: initState,
    reducers: {
        ChangedTab(state: IMarketplaceState, action: PayloadAction<ITAB>){
            state.type = action.payload
        },


        CollectionsLoading(state:IMarketplaceState){
            state.loading = true
        },
        CollectionsLoaded(state:IMarketplaceState){
            state.loading = false
        },
        CollectionsSuccess(state: IMarketplaceState, action: PayloadAction<Array<ICollection>>){
            state.collections = action.payload
        },
        CollectionsFailure(state: IMarketplaceState, action: PayloadAction<string>){
            state.error = action.payload
        }
    }
})

export const marketplaceActions = marketplaceSlice.actions
export default marketplaceSlice.reducer
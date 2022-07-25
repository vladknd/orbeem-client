import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { INFT } from '../../interfaces/nft.interfaces'
//IMPORT-INTERFACES:__________________________
import { INFTData, IMarketNFTInitState, INFTState } from '../NFT.interfaces'


const initState: IMarketNFTInitState = {
    loading: false,
    items: null,
    error: ""
}

const marketNFTSlice = createSlice({
    name: "MyNFTs",
    initialState: initState,
    reducers: {
        MarketNFTFetching(state: IMarketNFTInitState) {
            state.loading = true
        },
        MarketNFTFetchingSuccess(state: IMarketNFTInitState, action: PayloadAction<INFT[]>) {
            state.loading = false
            state.items = action.payload
        },
        MarketNFTFetchingFailure(state: IMarketNFTInitState, action: PayloadAction<string>) {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const marketNFTActions = marketNFTSlice.actions
export default marketNFTSlice.reducer
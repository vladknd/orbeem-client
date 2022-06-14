import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { INFT } from '../../web3/web3Utils'
//IMPORT-INTERFACES:__________________________
import { INFTData, IMyNFTInitState, INFTState } from '../NFT.interfaces'


const initState: IMyNFTInitState = {
    loading: false,
    items: null,
    error: ""
}

const myNFTSlice = createSlice({
    name: "MyNFTs",
    initialState: initState,
    reducers: {
        MyNFTFetching(state: IMyNFTInitState) {
            state.loading = true
        },
        MyNFTFetchingSuccess(state: IMyNFTInitState, action: PayloadAction<INFT[]>) {
            state.loading = false
            state.items = action.payload
        },
        MyNFTFetchingFailure(state: IMyNFTInitState, action: PayloadAction<string>) {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const myNFTActions = myNFTSlice.actions
export default myNFTSlice.reducer
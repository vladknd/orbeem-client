import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//IMPORT-INTERFACES:__________________________
import { INFTData, INFTInitState, INFTState } from '../NFT.interfaces'


const initState: INFTInitState = {
    loading: false,
    upgrading: false,
    item: null,
    error: ""
}

const nftSlice = createSlice({
    name: "NFT",
    initialState: initState,
    reducers: {
        // fetchNFT: fetchNFTReducer
        nftFetching(state: INFTInitState) {
            state.loading = true
        },
        nftFetchingSuccess(state: INFTInitState, action: PayloadAction<INFTData>) {
            state.loading = false
            state.item = action.payload
        },
        nftFetchingFailure(state: INFTInitState, action: PayloadAction<string>) {
            state.loading = false
            state.error = action.payload
        },
        nftSetUpgrading(state: INFTInitState) {
            state.upgrading = !state.upgrading
        },
        nftIncrPower(state: INFTInitState) {
            if(state.nft){
                const total = state.nft.power + state.nft.durability 
                const baseTotal = state.nft.basePower + state.nft.baseDurability
                const allowance = state.nft.level*4 + baseTotal

                if(total < allowance) state.nft.power = (state.nft.power+1)
            } 
        },
        nftIncrDurability(state: INFTInitState) {
            if(state.nft){
                const total = state.nft.power + state.nft.durability 
                const baseTotal = state.nft.basePower + state.nft.baseDurability
                const allowance = state.nft.level*4 + baseTotal
                console.log("REDUCER's alllowance", allowance);
                console.log("REDUCER's total", total)
                
                if(total < allowance) state.nft.durability = (state.nft.durability+1)
            } 
        },

    }
})

export const nftActions = nftSlice.actions
export default nftSlice.reducer
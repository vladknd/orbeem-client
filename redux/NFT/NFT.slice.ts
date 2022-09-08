import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NFT } from '../../interfaces/nft.interfaces'
import { INFTInitState } from './NFT.interfaces'
//IMPORT-INTERFACES:__________________________



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
        nftFetching(state: INFTInitState) {
            state.loading = true
        },
        nftFetchingSuccess(state: INFTInitState, action: PayloadAction<NFT>) {
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
            if(state.item && "power" in state.item ){
                const total = state.item.power + state.item.durability + state.item.intelligence
                const baseTotal = state.item.basePower + state.item.baseDurability + state.item.baseIntelligence
                const allowance = state.item.level*6 + baseTotal

                if(total < allowance) state.item.power = (state.item.power+1)
            } 
        },
        nftIncrDurability(state: INFTInitState) {
            if(state.item && "power" in state.item ){
                const total = state.item.power + state.item.durability + state.item.intelligence
                const baseTotal = state.item.basePower + state.item.baseDurability + state.item.baseIntelligence
                const allowance = state.item.level*6 + baseTotal
                console.log("REDUCER's alllowance", allowance);
                console.log("REDUCER's total", total)
                
                if(total < allowance) state.item.durability = (state.item.durability+1)
            } 
        },
        nftIncrIntelligence(state: INFTInitState) {
            if(state.item && "power" in state.item ){
                const total = state.item.power + state.item.durability + state.item.intelligence
                const baseTotal = state.item.basePower + state.item.baseDurability + state.item.baseIntelligence
                const allowance = state.item.level*6 + baseTotal

                if(total < allowance) state.item.intelligence = (state.item.intelligence+1)
            } 
        },

    }
})

export const nftActions = nftSlice.actions
export default nftSlice.reducer
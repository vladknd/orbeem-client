import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { INFT } from '../../web3/web3Utils'
//IMPORT-INTERFACES:__________________________
import { IProfileState, PROFILE_TAB } from '../NFT.interfaces'


const initState: IProfileState = {
    loading: false,
    tab: PROFILE_TAB.MY_NFT,
    items: null,
    error: "",
    selected: null
}

const profileSlice = createSlice({
    name: "MyNFTs",
    initialState: initState,
    reducers: {
        MyNFTFetching(state: IProfileState) {
            state.loading = true
        },
        MyNFTFetchingSuccess(state: IProfileState, action: PayloadAction<INFT[]>) {
            state.loading = false
            state.items = action.payload
        },
        MyNFTFetchingFailure(state: IProfileState, action: PayloadAction<string>) {
            state.loading = false
            state.error = action.payload
        },
        setTabMyNFT(state: IProfileState, action: PayloadAction<PROFILE_TAB>) {
            state.tab = action.payload
        },
        selectNFT(state: IProfileState, action: PayloadAction<INFT>){
            state.selected = action.payload
        }
    }
})

export const profileActions = profileSlice.actions
export default profileSlice.reducer
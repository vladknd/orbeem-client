//GLOBAL-IMPORTS:________________________________
import { configureStore, ThunkAction, Action, AnyAction } from '@reduxjs/toolkit'

//REDUCERS:___________________________
import fetchNFTReducer from './NFT/NFT.slice'
import profileReducer from './Profile/Profile.slice'
import fetchMarketNFTReducer from './MarketNFT/MarketNFT.slice'


const store = configureStore({
    reducer: {
        NFT: fetchNFTReducer,
        PROFILE: profileReducer,
        MarketNFT: fetchMarketNFTReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,  
    unknown,
    AnyAction
>
export default store 
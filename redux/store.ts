//GLOBAL-IMPORTS:________________________________
import { configureStore, ThunkAction, Action, AnyAction } from '@reduxjs/toolkit'
import { composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { combineReducers, applyMiddleware,compose } from 'redux'

//REDUCERS:___________________________
// import reducerNFT from './NFT/NFT.reducer'
import fetchNFTReducer from './NFT/NFT.slice'
import fetchMyNFTReducer from './MyNFT/MyNFT.slice'
import fetchMarketNFTReducer from './MarketNFT/MarketNFT.slice'
import { fetchMyNFT } from './MyNFT/MyNFT.thunks'
// import fetchNFTReducer from './NFT/NFT.reducer'

const store = configureStore({
    reducer: {
        NFT: fetchNFTReducer,
        MyNFT: fetchMyNFTReducer,
        MarketNFT: fetchMarketNFTReducer
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
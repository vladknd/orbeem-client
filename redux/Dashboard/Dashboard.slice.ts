import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICollection, INFT, NFT } from '../../interfaces/nft.interfaces'
//IMPORT-INTERFACES:__________________________
import { IDashboardState, DASHBOARD_TAB} from './Dashboard.interfaces'


const initState: IDashboardState = {
    tab: DASHBOARD_TAB.MY_NFT,
    loading: false,
    error: "",

    items: null,
    collections: null,
    selected: null,

    filterItems: null,
    filterGames: [],
    filterCollections: []
}

const dashboardSlice = createSlice({
    name: "MyNFTs",
    initialState: initState,
    reducers: {
        setTab(state: IDashboardState, action: PayloadAction<DASHBOARD_TAB>) {
            state.tab = action.payload
        },

        MyNFTFetching(state: IDashboardState) {
            state.loading = true
        },
        MyNFTFetchingSuccess(state: IDashboardState, action: PayloadAction<NFT[]>) {
            state.loading = false
            state.items = action.payload
            state.filterItems = action.payload
        },
        MyNFTFetchingFailure(state: IDashboardState, action: PayloadAction<string>) {
            state.loading = false
            state.error = action.payload
        },
        
        selectNFT(state: IDashboardState, action: PayloadAction<INFT>){
            state.selected = action.payload
        },

        GetCollectionsSuccess(
            state: IDashboardState, 
            action: PayloadAction<Pick<ICollection, "name">[]>
        ){
            state.collections = action.payload
        },

        setCollectionFilter(
            state: IDashboardState, 
            action: PayloadAction<string>
        ){ 

            if(state.filterCollections.includes(action.payload)){
                console.log("HERE");
                
                state.filterCollections = state.filterCollections.filter(collection => collection !== action.payload)
            } else {
                state.filterCollections.push(action.payload)
            }
        },

        filterNfts(state: IDashboardState){
            if(state.items) {
                if(state.filterCollections.length && state.filterGames.length){
                    state.filterItems = state.items.filter(_item => 
                        state.filterGames.filter(_game => _game === _item.game.name) &&
                        state.filterCollections.filter(_collection => _collection ===_item.collection.name)
                    )        
                }
                else if(state.filterCollections.length){
                    console.log("YEAH");
                    
                    state.filterItems = state.items.filter(_item => 
                        state.filterCollections.filter(_collection => _collection === _item.collection.name).length
                    )
                }
                else if(state.filterGames.length){
                    state.filterItems = state.items.filter(_item => 
                        state.filterGames.filter(_game => _game === _item.game.name)
                    )
                }
                else {
                    state.filterItems = state.items
                }

            }
        }

    }
})

export const dashboardActions = dashboardSlice.actions
export default dashboardSlice.reducer

console.log([].length ? 2: 1);

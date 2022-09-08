import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAegis, ICollection, IRune } from '../../interfaces/nft.interfaces'

//IMPORT-INTERFACES:__________________________
import { IMarketplaceState, TAB } from './Marketplace.interfaces'



const initState: IMarketplaceState = {
    loading: false,
    error: null,
    collections: [],
    nfts: [],
    
    tab: TAB.GAMES,
    game: null,
    collection: null,

    breadcrumbs: ["GAMES"]   
}

const marketplaceSlice = createSlice({
    name: "MARKETPLACE",
    initialState: initState,
    reducers: {
        // ChangedTab(state: IMarketplaceState, action: PayloadAction<>){
        //     state.tab = action.payload
        // },

        setTabGames(state: IMarketplaceState){
            state.collections = []
            state.nfts = []
            while(state.breadcrumbs.length !== 1){
                state.breadcrumbs.pop()
            }
            state.tab = TAB.GAMES
        },
        setTabGame(state: IMarketplaceState, action: PayloadAction<string>){
            state.nfts = []
            state.tab = TAB.GAME
            state.game = action.payload
            if(state.breadcrumbs.length === 3){
                state.breadcrumbs.pop()
            } else if(state.breadcrumbs.length === 1){
                state.breadcrumbs.push(action.payload)
            }
            
        },
        setTabCollection(state: IMarketplaceState, action: PayloadAction<string>){
            state.tab = TAB.COLLECTION
            state.collection = action.payload
            state.breadcrumbs.push(action.payload)
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
        },

        CollectionLoading(state:IMarketplaceState){
            state.loading = true
        },
        CollectionLoaded(state:IMarketplaceState){
            state.loading = false
        },
        CollectionSuccess(state: IMarketplaceState, action: PayloadAction<Array<IAegis | IRune>>){
            state.nfts = action.payload
        },
        CollectionFailure(state: IMarketplaceState, action: PayloadAction<string>){
            state.error = action.payload
        },
        CollectionClear(state:IMarketplaceState){
            state.nfts = []
        }
    }
})

export const marketplaceActions = marketplaceSlice.actions
export default marketplaceSlice.reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//IMPORT-INTERFACES:__________________________
import { IDotaState, IDotaMatch } from './Dota.interfaces'


const initState: IDotaState = {
    loading: false,
    match: null, 
    error: null,
    open: false,
    mintSuccess: false
}

const dotaSlice = createSlice({
    name: "DOTA",
    initialState: initState,
    reducers: {
        DotaMatchLoading(state: IDotaState){
            state.loading = true
        },
        DotaMatchLoaded(state: IDotaState){
            state.loading = false
        },
        DotaMatchSuccess(state: IDotaState, action: PayloadAction<IDotaMatch | null>){
            state.match = action.payload
            state.loading = false
        },
        DotaMintSuccess(state: IDotaState){
            state.mintSuccess = true
        },
        DotaMintDone(state: IDotaState){
            state.mintSuccess = false
            state.match = null
        },
        DotaMatchFailure(state: IDotaState, action: PayloadAction<string | null>){
            state.error = action.payload
        },

        SetDota(state:IDotaState){
            state.open = !state.open
        }
    }
})

export const dotaActions = dotaSlice.actions
export default dotaSlice.reducer
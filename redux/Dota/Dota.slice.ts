import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//IMPORT-INTERFACES:__________________________
import { IDotaState, IDotaMatch } from './Dota.interfaces'


const initState: IDotaState = {
    loading: false,
    match: null, 
    error: null,
}

const dotaSlice = createSlice({
    name: "DOTA",
    initialState: initState,
    reducers: {
        DotaMatchLoading(state: IDotaState){
            state.loading = true
        },
        DotaMatchSuccess(state: IDotaState, action: PayloadAction<IDotaMatch>){
            state.match = action.payload
        },
        DotaMatchFailure(state: IDotaState, action: PayloadAction<string>){
            state.error = action.payload
        }
    }
})

export const dotaActions = dotaSlice.actions
export default dotaSlice.reducer
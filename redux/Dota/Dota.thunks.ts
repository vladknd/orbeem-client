import { isNull } from "util"
import { URIs } from "../../config"
import { claimTokens, mintTokens } from "../../services/game.service"
import { AppDispatch } from "../store"
import { IDotaMatch } from "./Dota.interfaces"
import { dotaActions } from "./Dota.slice"

export function getMatchResults(_nftID: string, _publicAddress: string) {
    return async (dispatch: AppDispatch) => {
        console.log("GET-MATCH-RESULTS THUNK INITIATED", _nftID, _publicAddress);
        
        try {
            await dispatch(dotaActions.DotaMatchSuccess(null))
            dispatch(dotaActions.DotaMatchLoading())
            const claimRes = await claimTokens(_publicAddress, _nftID)      
            
            if(claimRes.data.claimTokens.__typename === "ClaimError"){
                dispatch(dotaActions.DotaMatchLoaded())
                await dispatch(dotaActions.DotaMatchFailure(claimRes.data.claimTokens.error))
            } else {
                await dispatch(dotaActions.DotaMatchSuccess(claimRes.data.claimTokens.success))
                await dispatch(dotaActions.DotaMatchFailure(null))
            }

        } catch (error: any) {
            await dispatch(dotaActions.DotaMatchFailure(error))
        }
    }
}

export function mintTokensThunk(_nftID: string, _publicAddress: string) {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(dotaActions.DotaMatchLoading())

            const mintRes = await mintTokens(_nftID, _publicAddress)
            if(mintRes.data.mintTokens.__typename === "MintError"){
                await dispatch(dotaActions.DotaMatchFailure(mintRes.data.mintTokens.error))
            } else {
                console.log("I AM HEEEERE");
                dispatch(dotaActions.DotaMatchLoaded())
                await dispatch(dotaActions.DotaMintSuccess())
            }
  
        } catch (error: any) {
            await dispatch(dotaActions.DotaMatchFailure(error))
        }
    }
}
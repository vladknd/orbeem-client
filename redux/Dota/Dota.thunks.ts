import { URIs } from "../../config"
import { claimTokens } from "../../services/game.service"
import { AppDispatch } from "../store"
import { IDotaMatch } from "./Dota.interfaces"
import { dotaActions } from "./Dota.slice"

export function getMatchResults(_tokenID: number, _publicAddress: string) {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(dotaActions.DotaMatchLoading())
            // const lastMatch = await fetchMatchData(steamID)
            const matchResults = await claimTokens(_tokenID, _publicAddress)

            if(matchResults) dispatch(dotaActions.DotaMatchSuccess(matchResults.data.claimTokens))
        } catch (error: any) {
            await dispatch(dotaActions.DotaMatchFailure(error))
        }
    }
}

// async function fetchMatchData(steamID: string): Promise<IDotaMatch> {
//     const res = await fetch(`https://api.opendota.com/api/players/${steamID}/recentMatches`, {
//         method: "GET"
//     })
//     console.log("RES DOTA", res);
    
//     const matches = await res.json()
//     console.log("MATCHES DOTA", matches);

//     const {kills, deaths, assists} = matches[0]
//     return {
//         kills, 
//         deaths, 
//         assists
//     }
// }


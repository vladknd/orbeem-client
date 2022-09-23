import React from 'react'
import { TAB } from '../../redux/Marketplace/Marketplace.interfaces'
import { marketplaceActions } from '../../redux/Marketplace/Marketplace.slice'
import { useAppDispatch } from '../../redux/reduxHooks'
import { 
    GameContainer, 
    GamesContainer 
} from './Marketplace.games.styled'

const MarketplaceGames = () => {
  const dispatch = useAppDispatch()
  // const 
  return (
    <GamesContainer>
        <GameContainer clicky={true} img="dotaMarket.png"
          onClick={()=> {
            // dispatch(marketplaceActions.ChangedTab({tab: TAB.GAME, game: "DOTA2", collection: null}))
            dispatch(marketplaceActions.setTabGame("DOTA2"))
          }}
        />
        <GameContainer img="pubgMarket.png"/>
        <GameContainer img="csMarket.png"/>
    </GamesContainer>
  )
}

export default MarketplaceGames
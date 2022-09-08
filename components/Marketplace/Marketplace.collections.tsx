import React, { useEffect } from 'react'
import { TAB } from '../../redux/Marketplace/Marketplace.interfaces'
import { marketplaceActions } from '../../redux/Marketplace/Marketplace.slice'
import { getCollection, getGameCollections } from '../../redux/Marketplace/Marketplace.thunks'
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks'
import LoadingComponent from '../Loading/Loading.component'
import { 
    CollectionContainer, 
    CollectionHeader, 
    CollectionsContainer, 
    CollectionText 
} from './Marketplace.collections.styled'

const MarketplaceCollections = () => {
  const {game, collections} = useAppSelector(state => state.MARKETPLACE)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(game) dispatch(getGameCollections(game))
  }, [])
  
  // if(!collections) {
  //   return (
  //     <LoadingComponent/> 
  //   )
  // }
  return (
    <CollectionsContainer>
        {collections.map((collection) => {
          return (
            <CollectionContainer key={collection.name} clicky={true} img="runeCollection.png"
              onClick={() => {
                console.log("COLLECTION NAME", collection.name);
                // dispatch(marketplaceActions.ChangedTab({tab: TAB.COLLECTION, game: "DOTA2", collection: collection.name}))
                dispatch(marketplaceActions.setTabCollection(collection.name))

                dispatch(getCollection(collection.name, "price", "asc"))
              }}
            >
              <CollectionHeader>{collection.name}</CollectionHeader>
              <CollectionText>{collection.description} </CollectionText>
            </CollectionContainer>
          )
        })}
        
    </CollectionsContainer>
  )
}

export default MarketplaceCollections
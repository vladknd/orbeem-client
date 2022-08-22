import React from 'react'
import { 
    CollectionContainer, 
    CollectionHeader, 
    CollectionsContainer, 
    CollectionText 
} from './Marketplace.collections.styled'

const MarketplaceCollections = () => {
  return (
    <CollectionsContainer>
        <CollectionContainer clicky={true} img="runeCollection.png">
            <CollectionHeader>AEGIS Collection</CollectionHeader>
            <CollectionText>The first DOTA2 collection on orbeem-space. It gives a </CollectionText>
        </CollectionContainer>

        {/* <CollectionContainer clicky={true} img="runeCollection.png">
            
        </CollectionContainer>

        <CollectionContainer clicky={true} img="runeCollection.png">
            
        </CollectionContainer>

        <CollectionContainer clicky={true} img="runeCollection.png">
            
        </CollectionContainer> */}
        
    </CollectionsContainer>
  )
}

export default MarketplaceCollections
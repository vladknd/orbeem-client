import Image from "next/image"
import { useEffect, useState } from "react"
import { marketplaceActions } from "../../redux/Marketplace/Marketplace.slice"
import { getCollection } from "../../redux/Marketplace/Marketplace.thunks"
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks"
import { Text } from "../../styles/Components.styled"
import { BreadcrumbsContainer, BreadcrumbsText } from "./MarketplaceBreadcrumbs.styled"
import { SortingContainer, SortingItem, SortingText } from "./NFTs.sorting.styled"


const NftsSorting = () => {
    const { collection } = useAppSelector(state => state.MARKETPLACE)
    const dispatch = useAppDispatch()

    enum NFT_SORT {
      DEFAULT,
      PRICE_UP,
      PRICE_DOWN,
      LEVEL_UP,
      LEVEL_DOWN
    }
    const [sort, setSort] = useState<NFT_SORT>(
      NFT_SORT.DEFAULT
    )
    
    useEffect(() => {
      console.log(sort);
      
    }, [sort])
    
    return (
      <SortingContainer>
        <SortingItem>
          SORT_BY:
        </SortingItem>

        <SortingItem active={(sort === NFT_SORT.PRICE_UP) || (sort === NFT_SORT.PRICE_DOWN)}
          onClick={async()=> {
            switch (sort) {
              case NFT_SORT.DEFAULT:
                
                
                await setSort(NFT_SORT.PRICE_UP)
                console.log("CURRENT SORT:", sort);
                if(collection){
                  dispatch(getCollection(collection, "price", "desc"))
                }
                break;
              case NFT_SORT.PRICE_UP:
                
                await setSort(NFT_SORT.PRICE_DOWN)
                console.log("CURRENT SORT:", sort);
                if(collection){
                  dispatch(getCollection(collection, "price", "asc"))
                }
                break
              case NFT_SORT.PRICE_DOWN:
                
                await setSort(NFT_SORT.DEFAULT)
                console.log("CURRENT SORT:", sort);
                break
              default:
                break;
            }
          }}
        >
          PRICE
          {
            sort === NFT_SORT.PRICE_DOWN ? 
              <svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.7655 26.1333L14.7948 6.89372M14.7655 26.1333L7.4005 17.8765M14.7655 26.1333L22.1556 17.899" stroke="#D6D6D6" stroke-opacity="0.75" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> :
            sort === NFT_SORT.PRICE_UP ?
              <svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.7804 6.89355L14.7804 26.1331M14.7804 6.89355L22.158 15.1391M14.7804 6.89355L7.40283 15.1391" stroke="#D6D6D6" stroke-opacity="0.75" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> :
            null
          }
        </SortingItem>

        <SortingItem active={sort === (NFT_SORT.LEVEL_UP || NFT_SORT.LEVEL_DOWN)}>
          LEVEL
        </SortingItem>
      </SortingContainer>
    )
  }

  export default NftsSorting
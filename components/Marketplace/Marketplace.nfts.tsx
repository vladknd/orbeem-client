import React, { useEffect } from 'react'
import { TAB } from '../../redux/Marketplace/Marketplace.interfaces'
import { marketplaceActions } from '../../redux/Marketplace/Marketplace.slice'
import { getCollection, getGameCollections } from '../../redux/Marketplace/Marketplace.thunks'
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks'
import LoadingComponent from '../Loading/Loading.component'
import NftsComponent from '../NFTs/Nfts.component'


const MarketplaceNfts = () => {
  const { nfts, loading} = useAppSelector(state => state.MARKETPLACE)
  const dispatch = useAppDispatch()

  
  if(!nfts) {
    return (
      <LoadingComponent/> 
    )
  }
  return <NftsComponent gridSize="1fr 1fr 1fr 1fr 1fr" items={nfts} loading={loading} mode="marketplace"/>
}

export default MarketplaceNfts
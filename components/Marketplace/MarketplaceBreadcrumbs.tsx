import { marketplaceActions } from "../../redux/Marketplace/Marketplace.slice"
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks"
import { BreadcrumbsContainer, BreadcrumbsText } from "./MarketplaceBreadcrumbs.styled"


const Breadcrumbs = () => {
    const breadcrumbs  = useAppSelector(state => state.MARKETPLACE.breadcrumbs)
    const dispatch = useAppDispatch()
    return (
      <BreadcrumbsContainer>
        <BreadcrumbsText 
            onClick={()=> {
                dispatch(marketplaceActions.setTabGames())
            }}
        >{breadcrumbs[0]}</BreadcrumbsText>
  
        { breadcrumbs.length >= 2 ? 
          <BreadcrumbsText arrow={true}
            onClick={()=> {
                dispatch(marketplaceActions.setTabGame(""))
            }}
          >
            {breadcrumbs[1]}
          </BreadcrumbsText> 
        : null } 
  
        { breadcrumbs.length === 3  ? <BreadcrumbsText arrow={true}>{`${breadcrumbs[2]}_COLLECTION`}</BreadcrumbsText> : null } 
      </BreadcrumbsContainer>
    )
  }

  export default Breadcrumbs
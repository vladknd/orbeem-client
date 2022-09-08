import Image from "next/image"
import { useEffect, useState } from "react"
import { getCollections } from "../../../redux/Dashboard/Dashbaord.thunks"
import { dashboardActions } from "../../../redux/Dashboard/Dashboard.slice"
import { useAppDispatch, useAppSelector } from "../../../redux/reduxHooks"
import LoadingComponent from "../../Loading/Loading.component"
import { FiltersArrow, ComponentContainer, FiltersContainer, FilterContainer, FiltersHeader, FilterHeader, FilterElement } from "./Filters.styled"

const FiltersComponent = () => {
    const dispatch = useAppDispatch()
    const {collections, filterCollections} = useAppSelector(state => state.DASHBOARD)

    const [collectionsOpen, setCollectionsOpen] = useState<boolean>()
    useEffect(() => {
      dispatch(getCollections())
    }, [])
    
    
    return (
        <ComponentContainer>
            <FiltersHeader>FILTERS</FiltersHeader>
            {/* <FiltersGame>GAME
                <FiltersArrow>
                </FiltersArrow>
            </FiltersGame> */}
            { collections ?
                <FiltersContainer>
                    <FilterContainer clicky={true}
                        onClick={(e)=> {
                            setCollectionsOpen(prev => !prev)
                        }}
                    >
                        <FilterHeader>
                            COLLECTIONS
                        </FilterHeader>
                        {collectionsOpen ? collections.map((collection, index) => 
                            <FilterElement 
                                key={index}
                                onClick={e=> {
                                    e.stopPropagation()
                                    dispatch(dashboardActions.setCollectionFilter(collection.name))
                                    dispatch(dashboardActions.filterNfts())
                                }}
                            >
                                {collection.name}
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {filterCollections.includes(collection.name) ? <path d="M5.5 12L10.5 17L20.5 7"  stroke-linecap="round" stroke-linejoin="round"
                                        stroke={"#ead2ff"}
                                    />: null}
                                    <path d="M5 0.5H19C21.4853 0.5 23.5 2.51472 23.5 5V19C23.5 21.4853 21.4853 23.5 19 23.5H5C2.51472 23.5 0.5 21.4853 0.5 19V5C0.5 2.51472 2.51472 0.5 5 0.5Z" fill="#111111" fill-opacity="0.1" 
                                        stroke={filterCollections.includes(collection.name) ? "#8d01ff" : "#8B8B8B"}
                                    />
                                </svg>
                            </FilterElement>
                        ) : null}
                        {/* <FilterElement></FilterElement>
                        <FilterElement></FilterElement>
                        <FilterElement></FilterElement> */}

                    </FilterContainer>
                </FiltersContainer>
            : <LoadingComponent/>}   
            
        </ComponentContainer>
    )
}

export default FiltersComponent
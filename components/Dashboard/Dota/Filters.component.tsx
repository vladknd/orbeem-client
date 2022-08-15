import Image from "next/image"
import { FiltersArrow, FiltersContainer, FiltersGame, FiltersHeader } from "./Filters.styled"

const FiltersComponent = () => {
    return (
        <FiltersContainer>
            <FiltersHeader>FILTERS</FiltersHeader>
            <FiltersGame>GAME
                <FiltersArrow>
                    {/* <Image src=""/> */}
                </FiltersArrow>
            </FiltersGame>
            <FiltersGame>COLLECTION
                <FiltersArrow>
                    {/* <Image src=""/> */}
                </FiltersArrow>
            </FiltersGame>
        </FiltersContainer>
    )
}

export default FiltersComponent
import styled from "styled-components"
import colors from "../../styles/colors"
import { GlowText, Text } from "../../styles/Components.styled"

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: ${colors.container_bg};
    width: 100%;
    height: 15%;
`

export const TitleText = styled(GlowText)`
    font-size: 35px;
`
import React from 'react'
import styled from 'styled-components'
const StyledSmallHeroCard = styled.article`
    border-radius: 1rem;
    padding: 1rem;
    color: white;
    background-color: white;
    background-image: url('${props => props.background}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    h2 {
        font-weight: bold;
        margin-bottom: 2rem;
    }
    p {
        margin-bottom: 2rem;
    }
`

const SmallHeroCard = ({ title, text, background, titleColor, gridName }) => {
    return (
        <StyledSmallHeroCard background={background} style={{ gridArea: gridName }}>
            <h2 style={{ color: titleColor }}>{title}</h2>
            <p>{text}</p>
        </StyledSmallHeroCard>
    )
}

export default SmallHeroCard

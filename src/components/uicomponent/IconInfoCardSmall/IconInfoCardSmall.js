import React from 'react'
import styled from 'styled-components'
const StyledIconInfoCardSmall = styled.article`
    border-radius: 1rem;
    display: grid;
    place-content: center;
    background-color: white;

    min-width: 150px;

    svg {
        font-size: 3rem;
        margin: 0 auto;
        margin-bottom: 1.5rem;
    }
    h2 {
        color: white;
        font-weight: bold;
    }
`

const IconInfoCardSmall = ({ icon, title, backgroundColor }) => {
    return (
        <StyledIconInfoCardSmall style={{ backgroundColor: backgroundColor }}>
            {icon}
            <h2>{title}</h2>
        </StyledIconInfoCardSmall>
    )
}

export default IconInfoCardSmall

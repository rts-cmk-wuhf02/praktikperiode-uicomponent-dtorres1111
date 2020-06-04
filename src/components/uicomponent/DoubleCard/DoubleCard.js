import React from 'react'
import styled from 'styled-components'
const StyledDoubleCardContainer = styled.section`
    border-radius: 1rem;
    padding: 2rem;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const StyledDoubleCardItem = styled.article`
    display: flex;
    align-items: center;
    img {
        border-radius: .5rem;
        margin-right: 1rem;
        width: 150px;
        height: 150px;
        object-fit: cover;
        object-position: center;
    }
    div {
        h2 {
            margin-bottom: 1rem;
        }
    }
`

const DoubleCardItem = ({ title, titleColor, text, img }) => {
    return (
        <StyledDoubleCardItem>
            <img src={img} alt={title} />
            <div>
                <h2 style={{ color: titleColor }}>{title}</h2>
                <p>{text}</p>
            </div>
        </StyledDoubleCardItem>
    )
}



const DoubleCard = ({ gridName }) => {
    return (
        <StyledDoubleCardContainer style={{ gridArea: gridName }}>
            <DoubleCardItem title="FOOD &amp; LIFESTYLE" titleColor="#E44385" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam" img="https://images.pexels.com/photos/4321944/pexels-photo-4321944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <DoubleCardItem title="FASHION" titleColor="#0AACDC" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam" img="https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </StyledDoubleCardContainer>
    )
}

export default DoubleCard

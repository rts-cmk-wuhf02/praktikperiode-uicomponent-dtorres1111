import React, { useState } from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa'

import styled from 'styled-components'
const StyledMustSeeCard = styled.section`
    grid-area: MustSeeCard;
`
const StyledMustSeeCardItem = styled.article`
    padding: 1rem;
    background-color: lightblue;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 1rem;
    font-weight: bold;
    color: white;
    h2 {
        margin-top: 6rem;
        margin-bottom: 1rem;
        font-size: 3rem;
    }
    p {
        font-weight: lighter;
        margin-bottom: 2rem;
    }
`
const StyledMustSeeCardItemHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        border-radius: 50%;
        display: block;
        height: 1rem;
        width: 1rem;
    }
    h3 {
        flex: auto;
        margin-left: .25rem;
    }
    svg {
        cursor: pointer;
    }
`

const MustSeeCard = ({ background, title, text, author, profileImg }) => {
    const [Heart, setHeart] = useState(true)
    const params = {
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    }
    return (
        <StyledMustSeeCard >
            <Swiper {...params}>
                <StyledMustSeeCardItem style={{ backgroundImage: `url(${background})` }}>
                    <StyledMustSeeCardItemHeader>
                        <img src={profileImg} alt={author} />
                        <h3>{author}</h3>
                        <div onClick={() => setHeart(!Heart)}>
                            {Heart ? <FaRegHeart /> : <FaHeart />}
                        </div>
                    </StyledMustSeeCardItemHeader>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </StyledMustSeeCardItem>
                <StyledMustSeeCardItem style={{ backgroundImage: `url(${background})` }}>
                    <StyledMustSeeCardItemHeader>
                        <img src={profileImg} alt={author} />
                        <h3>{author}</h3>
                        <div onClick={() => setHeart(!Heart)}>
                            {Heart ? <FaRegHeart /> : <FaHeart />}
                        </div>
                    </StyledMustSeeCardItemHeader>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </StyledMustSeeCardItem>
            </Swiper>
        </StyledMustSeeCard>
    )
}

export default MustSeeCard

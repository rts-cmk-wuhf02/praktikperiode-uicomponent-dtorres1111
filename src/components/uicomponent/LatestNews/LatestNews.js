import React from 'react'
import placholderimage from '../../../images/Rectangle52.png'
import styled from 'styled-components'
const StyledLatestNews = styled.section`
    border-radius: 1rem;
    background-color: #fff;
    header {
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        background-color: #3F51B5;
        h3 {
            padding: .5rem;
            color: white;
            text-transform: uppercase;
            font-weight: bold;
            text-align: center;
        }
    }
    main {
        padding: 1.5rem;
    }
    footer {
        h3 {
            padding: .5rem;
            border-top: 1px solid #7B8591;
            color: #7B8591;
            text-align: center;
        }
    }
`

/* Article */
const StyledLatestNewsArticle = styled.article`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    img {
        border-radius: 1rem;
        display: block;
        width: 125px;
        height: 125px;
        object-fit: cover;
    }
    div {
        padding: .5rem;
        h2 {
            font-size: .8rem;
            text-transform: uppercase;
            font-weight: bold;
            margin-bottom: 1rem;
        }
    }
`

const LatestNewsArticle = ({ img, title, text, titleColor }) => {
    return (
        <StyledLatestNewsArticle>
            <img src={img} alt="" />
            <div>
                <h2 style={{ color: titleColor }}>{title}</h2>
                <p>{text}</p>
            </div>
        </StyledLatestNewsArticle>
    )
}

/* Article end */

const LatestNews = ({ gridName }) => {
    return (
        <StyledLatestNews style={{ gridArea: gridName }} >
            <header>
                <h3>LATEST NEWS</h3>
            </header>
            <main>
                <LatestNewsArticle titleColor="#40BE65" title="NATURE" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam" img={placholderimage} />
                <LatestNewsArticle titleColor="#0072CA" title="ANIMAL KINGDOM" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam" img={placholderimage} />
                <LatestNewsArticle titleColor="#D9A34A" title="TECHNOLOGY" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam" img={placholderimage} />
                <LatestNewsArticle titleColor="#FF4967" title="EXPLORE" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam" img={placholderimage} />
                <LatestNewsArticle titleColor="#0072CA" title="AFRICA ZOO" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam" img={placholderimage} />
            </main>
            <footer>
                <h3>MORE NEWS</h3>
            </footer>
        </StyledLatestNews>
    )
}

export default LatestNews

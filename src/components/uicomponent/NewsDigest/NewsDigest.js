import React from 'react'
import styled from 'styled-components'
const StyledNewsDigest = styled.section`
    border-radius: 1rem;
    background-color: #fff;
    header {
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        background-color: #3CA773;
        h3 {
            padding: .5rem;
            color: white;
            text-transform: uppercase;
            font-weight: bold;
            text-align: center;
        }
    }
    main {
        padding: 2rem;
    }
`

const StyledNewsDigestItem = styled.article`
    padding: 1rem 0;
    border-bottom: 1px solid rgba(123, 133, 145, .3);
    text-align: center;

    div {
        color: white;
        font-weight: bold;
        margin: .5rem auto;
        border-radius: 50%;
        display: grid;
        place-content: center;
        width: 2rem;
        height: 2rem;
    }
    h2 {
        color: #303336;
        margin-bottom: 1rem;
    }
    p {
        color: #7B8591;
    }
`

const NewsDigestItem = ({ number, numberColor, title, text }) => {
    return (
        <StyledNewsDigestItem>
            <div style={{ backgroundColor: numberColor }}>
                {number}
            </div>
            <h2>{title}</h2>
            <p>{text}</p>
        </StyledNewsDigestItem>
    )
}


const NewsDigest = ({ gridName }) => {
    return (
        <StyledNewsDigest style={{ gridArea: gridName }} >
            <header>
                <h3>NEWS DIGEST</h3>
            </header>
            <main>
                <NewsDigestItem number="1" numberColor="#D9A34A" title="Technology" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit" />
                <NewsDigestItem number="2" numberColor="#007AC2" title="Nature" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit" />
                <NewsDigestItem number="3" numberColor="#3CA773" title="Design" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit" />
                <NewsDigestItem number="4" numberColor="#53BBB3" title="Development" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit" />
            </main>
        </StyledNewsDigest>
    )
}

export default NewsDigest

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
const StyledImageCard = styled.article`
  grid-area: ImageCard;
  border-radius: 1rem;
  background-color: white;
  img {
    width: 100%;
    display: block;
    margin-bottom: 1rem;
  }
  div {
    padding: 0.5rem;
    font-weight: bold;
    letter-spacing: 0;
    h3 {
      text-transform: uppercase;
      font-size: 0.8rem;
      color: #33439b;
      margin-bottom: 1rem;
    }
    h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
    p {
      font-weight: 400;
      color: #7b8591;
    }
  }
`

const ImageCard = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulImagecard {
        nodes {
          title
          category
          img {
            fluid {
              src
            }
          }
          text {
            content {
              content {
                value
              }
            }
          }
        }
      }
    }
  `)
  /*   console.log(text.content[0].content[0].value) */
  const { category, img, text, title } = data.allContentfulImagecard.nodes[0]

  const travelText = text.content[0].content[0].value

  return (
    <StyledImageCard>
      <img src={img.fluid.src} alt={title} />
      <div>
        <h3>{category[0]}</h3>
        <h2>{title}</h2>
        <p>{travelText}</p>
      </div>
    </StyledImageCard>
  )
}

export default ImageCard

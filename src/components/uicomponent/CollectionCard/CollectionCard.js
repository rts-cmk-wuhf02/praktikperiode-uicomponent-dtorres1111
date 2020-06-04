import React from "react"
import styled from "styled-components"
const StyledCollectionCard = styled.article`
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  h4 {
    padding-top: 1rem;
    padding-left: 1rem;
    padding-bottom: 12rem;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
  }
`
const StyledCollectionCardInfo = styled.div`
  background-color: white;
  text-align: center;
  img {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    margin-top: -1.5rem;
    margin-left: -60%;
    margin-bottom: 2rem;
  }
  h2 {
    font-weight: bold;
  }
  h3 {
    color: #7b8591;
    padding-bottom: 2rem;
  }
`

const CollectionCard = ({
  background,
  collection,
  name,
  author,
  profileImg,
  gridName,
}) => {
  return (
    <StyledCollectionCard
      style={{ backgroundImage: `url(${background})`, gridArea: gridName }}
    >
      <h4>collection #{collection}</h4>
      <StyledCollectionCardInfo>
        <img src={profileImg} alt="" />
        <h2>{name}</h2>
        <h3>By: {author}.</h3>
      </StyledCollectionCardInfo>
    </StyledCollectionCard>
  )
}

export default CollectionCard

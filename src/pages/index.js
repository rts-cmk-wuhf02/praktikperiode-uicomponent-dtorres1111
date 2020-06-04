import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaHtml5, FaCss3Alt, FaReact, FaBeer, FaFileExcel } from 'react-icons/fa'
import SEO from "../components/seo"
import { breakpoints } from "../theme/breakpoints"
import ImageCard from '../components/uicomponent/ImageCard/ImageCard'
import ImageCardGallery from '../components/uicomponent/ImageCardGallery/ImageCardGallery'
import IconInfoCard from '../components/uicomponent/IconInfoCard/IconInfoCard'
import CollectionCard from '../components/uicomponent/CollectionCard/CollectionCard'
import MustSeeCard from '../components/uicomponent/MustSeeCard/MustSeeCard'
import LatestNews from '../components/uicomponent/LatestNews/LatestNews'
import DoubleCard from '../components/uicomponent/DoubleCard/DoubleCard'
import SmallHeroCard from '../components/uicomponent/SmallHeroCard/SmallHeroCard'
import NewsDigest from '../components/uicomponent/NewsDigest/NewsDigest'
import ReadMoreCard from '../components/uicomponent/ReadMoreCard/ReadMoreCard'
import VirtualReality from '../components/uicomponent/VirtualReality/VirtualReality'
import IconInfoCardSmall from '../components/uicomponent/IconInfoCardSmall/IconInfoCardSmall'
import placeholderImg from '../images/Rectangle52.png'
import styled from 'styled-components'
const Wrapper3ColumnsTop = styled.section`
 @media ${breakpoints.sm} {
   /* color: red; */
 }
  max-width: 1000px;
  margin: 0 auto;
  padding: .5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .5rem;
  grid-template-areas: "ImageCard ImageCardGallery ImageCardGallery";
`

const Wrapper4Columns = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: .5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: .5rem;
  grid-template-areas: 
  "IconInfoCard1 IconInfoCard2 IconInfoCard3 IconInfoCard4";
`

const Wrapper3ColumnsBottom = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: .5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: .5rem;
  grid-template-areas: 
  "CollectionCard1 CollectionCard2 CollectionCard3"
  "MustSeeCard MustSeeCard LatestNews "
  "DoubleCard DoubleCard LatestNews"
  "SmallHeroCard1 SmallHeroCard2 LatestNews"
  "SmallHeroCard3 NewsDigest ReadMoreCard1"
  "SmallHeroCard4 NewsDigest ReadMoreCard1"
  "VirtualReality NewsDigest ReadMoreCard2"
  "IconInfoCardSmallContainer NewsDigest ReadMoreCard2"
;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allImageSharp {
      nodes {
        fluid {
          src
        }
      }
    }
  }
  `)
  const images = data.allImageSharp.nodes

  return (
    <>
      <SEO title="Home" />

      <Wrapper3ColumnsTop>
        <ImageCard img={placeholderImg} title="Surfing in Maldives" category="TRAVEL" text="It’s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside." />
        <ImageCardGallery images={images} title="Outdoor Experience" category="LEISURE" text="It’s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside." />
      </Wrapper3ColumnsTop >

      <Wrapper4Columns >
        <IconInfoCard gridName="IconInfoCard1" title="ON-TIME DELIVERY" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit " icon={<FaHtml5 />} backgroundColor="#005AEE" />
        <IconInfoCard gridName="IconInfoCard2" title="PARCELS" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit " icon={<FaCss3Alt />} backgroundColor="#FFA767" />
        <IconInfoCard gridName="IconInfoCard3" title="QUALITY CHECK" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit " icon={<FaReact />} backgroundColor="#0AACDC" />
        <IconInfoCard gridName="IconInfoCard4" title="CUSTOMER SERVICE" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit " icon={<FaBeer />} backgroundColor="#597AEF" />
      </Wrapper4Columns>

      <Wrapper3ColumnsBottom >
        <CollectionCard gridName="CollectionCard1" name="Off-the-grid experiences" author="Melanie S" profileImg={images[5].fluid.src} background={images[1].fluid.src} collection="10" />
        <CollectionCard gridName="CollectionCard2" name="Shapes, triangles &amp; fashion" author="Saraha F" profileImg={images[2].fluid.src} background={images[2].fluid.src} collection="1" />
        <CollectionCard gridName="CollectionCard3" name="In-depth architecture" author="Benhour" profileImg={images[1].fluid.src} background={images[3].fluid.src} collection="123" />
        <MustSeeCard title="Must see places for summer" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus." author="THE NEW YORK TIMES" profileImg={images[1].fluid.src} background={placeholderImg} />
        <LatestNews gridName="LatestNews" />
        <DoubleCard gridName="DoubleCard" />
        <SmallHeroCard gridName="SmallHeroCard1" title="ARCHITECTURE" titleColor="#FFD430" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus." background={placeholderImg} />
        <SmallHeroCard gridName="SmallHeroCard2" title="TRAVEL &amp; LEISURE" titleColor="#D0E2FF" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus." background={placeholderImg} />
        <SmallHeroCard gridName="SmallHeroCard3" title="GREENERY" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus." background={placeholderImg} />
        <NewsDigest gridName="NewsDigest" />
        <ReadMoreCard gridName="ReadMoreCard1" profileImg={images[1].fluid.src} />
        <SmallHeroCard gridName="SmallHeroCard4" title="BEACHES" titleColor="#FFD430" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus." background={placeholderImg} />
        <ReadMoreCard gridName="ReadMoreCard2" profileImg={images[1].fluid.src} background={images[1].fluid.src} linkColor="black" />
        <div style={{ gridArea: 'IconInfoCardSmallContainer', display: 'flex', justifyContent: 'space-between' }}>
          <IconInfoCardSmall icon={<FaHtml5 />} title="DESIGN" backgroundColor="#53BBB3" />
          <IconInfoCardSmall icon={<FaBeer />} title="EDUCATION" backgroundColor="#358ED7" />
        </div>
        <VirtualReality gridName="VirtualReality" />
      </Wrapper3ColumnsBottom>
    </>
  )
}

export default IndexPage

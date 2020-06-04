import React from 'react'
import placeholder from '../../../images/vr.png'
import redmark from '../../../images/redmark.png'
import styled from 'styled-components'
const StyledVirtualReality = styled.article`
    height: 300px;
    border-radius: 1rem;
    padding: 1rem;
    background-color: white;
    background-image: url('${props => props.background}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: relative;
    
    img {
        display: block;
        object-fit: cover; 
        object-position: center;
        width: 15px;
        position: absolute;
        top: 0;
        right: 1.5rem;
    }
    h2 {
        font-weight: bold;
        text-align: center;
    }
    h3 {
        align-self: flex-end;
        color: #D9A34A;
        text-transform: uppercase;
    }
`

const VirtualReality = ({ gridName }) => {
    return (
        <StyledVirtualReality background={placeholder} style={{ gridArea: gridName }}>
            <img src={redmark} alt="redmark" />
            <h2>Virtual Reality</h2>
            <h3>TECHNOLOGY</h3>
        </StyledVirtualReality>
    )
}

export default VirtualReality

import React from 'react'
import styled from 'styled-components'
import i1 from './offer1.jpg'

const Product = () => {
    return (
        <Container>
            <ProductImage src={i1}></ProductImage>    
            <DetailsContainer>
                <h3>Product Name</h3>
                <p>Rs.Price</p>
            </DetailsContainer>
        </Container>
    )
}

export default Product

const Container=styled.div`
padding:10px;
margin:10px;
display:flex;
flex-direction: row;
background-color:white
`
const ProductImage=styled.img`
height:150px;
width:150px;
margin:25px;
`

const DetailsContainer=styled.div`
display:flex;
flex-direction:column;
margin:25px
`
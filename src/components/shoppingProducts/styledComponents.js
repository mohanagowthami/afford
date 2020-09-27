import styled from 'styled-components'


export const ProductContainer = styled.div`
display:flex;

flex:1;
padding:10px;
border:1px solid black;

`

export const ProductImage = styled.img`
width:200px;
height:auto;
flex:1;

`

export const Container = styled.div`
display:flex;

justify-content:center;
align-items:center;
min-height:100vh;
flex:1;

`
export const ProductsWrapper = styled.div`
dispaly:flex;
flex-direction:row;
flex-wrap:wrap;

`

export const ProductDetails = styled.div`

display:flex;
flexdirection:column;
flex:0.5;
justify-content:center;
align-items:center;

`
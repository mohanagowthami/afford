import React, { useEffect, useState } from 'react'
import fetchApiProducts from '../../services/fetchApiProducts'
import { v4 as uuidv4 } from 'uuid';
import Loader from '../common/Loader';
import { Container, ProductContainer, ProductImage, ProductsWrapper } from './styledComponents';
export default function ShoppingProducts() {

    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {

        async function getProducts() {
            setLoading(true)
            const response = await fetchApiProducts()
            if (!response.error)
                setProducts(response.data)
            else {
                setError(response.error)
            }
            setLoading(false)
        }
        getProducts()

    }, [])


    const renderProducts = () => {
        return products.map(product => {
            const { Name,
                Price,
                Description,
                Category,
                Type,
                Image,
                Manufacturer,
                Seller,
                Quantity,
                Tax } = product
            return <ProductContainer key={() => uuidv4()}>
                <ProductImage src={Image}></ProductImage>
                <p>{Name}</p>
                <p>{Price}</p>
                <p>{Description}</p>
                <p>{Category}</p>
                <p>{Type}</p>

                <p>{Manufacturer}</p>
                <p>{Seller}</p>
                <p>{Quantity}</p>
                <p>{Tax}</p>

            </ProductContainer>
        })

    }








    return (
        <>
            <Container>{isLoading ? <Loader /> : <ProductsWrapper>{renderProducts()}</ProductsWrapper>}</Container>
        </>)
}
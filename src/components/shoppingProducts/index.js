import React, { useEffect, useState } from 'react'
import fetchApiProducts from '../../services/fetchApiProducts'
import { v4 as uuidv4 } from 'uuid';
import Loader from '../common/Loader';
import { Container, ProductContainer, ProductDetails, ProductImage, ProductsListContainer } from './styledComponents';
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
                <ProductImage src={Image} />
                <ProductDetails>
                    <span><strong>Name:   </strong>{Name}</span>
                    <span><strong>Price:   </strong>{Price}</span>
                    <span><strong>Description:   </strong>{Description}</span>
                    <span><strong>Category:   </strong>{Category}</span>
                    <span><strong>Type:   </strong>{Type}</span>
                    <span><strong>Manufacturer:   </strong>{Manufacturer}</span>
                    <span><strong>Seller:   </strong>{Seller}</span>
                    <span><strong>Quantity:   </strong>{Quantity}</span>
                    <span><strong>Tax:   </strong>{Tax}</span>
                </ProductDetails>

            </ProductContainer>
        })

    }








    return (
        <>
            {isLoading ? <Container><Loader /></Container> : <ProductsListContainer>{renderProducts()}</ProductsListContainer>}
        </>)
}
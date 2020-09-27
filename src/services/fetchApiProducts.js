import { INTERNAL_SERVER_ERROR } from "../utils/apiConstants"
export default async function fetchApiProducts() {

    try {

        const result = await fetch("http://localhost:5000/api/products/")
        const products = await result.json()
        console.log(products, "products")
        return { error: false, data: products }
    }
    catch (error) {
        return { error: true, data: INTERNAL_SERVER_ERROR }
    }


}
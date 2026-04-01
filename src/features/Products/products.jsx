import { useGetAllProductsQuery } from "../../services/productsApi";

function Products() {
    const { isLoading, data } = useGetAllProductsQuery();
    return (<div>
        <h1>Products</h1>
        {isLoading && <h3>Loading....</h3>}
        {!isLoading && <ul>
            {data?.products.map((product) => {
                return <li>{product.title}</li>
            })}
        </ul>}
    </div>)
}

export default Products;
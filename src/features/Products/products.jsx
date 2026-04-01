import { useGetAllProductsQuery } from "../../services/productsApi";

function Products() {
    const {isLoading,data}=useGetAllProductsQuery();
    return (<div>
        <h1>Products</h1>
        {isLoading && <h3>Loading....</h3>}
        {isLoading && console.log(data)}
    </div>)
}

export default Products;
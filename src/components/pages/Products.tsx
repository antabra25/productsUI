import axios from "axios";
import {useEffect, useState} from "react";
import {ProductsProps} from "../types";
import ListProduct from "../products/ListProduct";
import Pagination from "../common/Pagination";
import useFetchProducts from "../../hooks/useFetchProducts";




const Products = () => {
    const limit = 10
    const [page, setPage] = useState<number>(1)
    const{products,loading,error} = useFetchProducts()

    const indexOfLastProduct = page * limit;
    const indexOfFirstProduct = indexOfLastProduct - limit;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const changePage = (page: number) => {
        setPage(page)
    }

    return (
        <div className="profiles-container">
            <div className="profiles">
                {loading && <h1 className="loading-message">Loading...</h1>}
                {error && <h1>error</h1>}
                <h1 className="title">RESULTS</h1>
                <ListProduct products={currentProducts}/>
            </div>
            <Pagination  total={products.length} changePage={changePage}  pageSize={limit} />
        </div>
    )
}
export default Products;
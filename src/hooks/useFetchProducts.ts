import {useEffect} from "react";
import {useState} from "react";
import axios from "axios";

const useFetchProducts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const URL = 'https://dummyjson.com/products';
    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await axios.get(URL);
            setProducts(response.data.products);
            setLoading(false);
        } catch (e) {
            setError(e.response.data);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);
    return {products, loading, error};

}

export default useFetchProducts;
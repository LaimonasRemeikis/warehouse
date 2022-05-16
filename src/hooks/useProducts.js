import { useCallback, useEffect, useState } from "react";
import { ProductsClient } from "../api";

const useProducts = () => {
    const [products, setProducts] = useState([]);
  
    // Kad galetum naudoti funkcija useEffect viduje
    const updateProducts = useCallback(() => {
      const initialProducts = ProductsClient.getProducts();
      setProducts(initialProducts);
    }, []);
  
    useEffect(() => {
      updateProducts();
    }, [updateProducts]);
  
    const addProduct = (formData) => {
        ProductsClient.addProduct(formData);
        console.log(formData);
      updateProducts();
    };
    
  
    const deleteProduct = (ean) => {
        ProductsClient.deleteProduct(ean);
      updateProducts();
    };
  
    const editProduct = (ean, formData) => {
        ProductsClient.editProduct(ean, formData);
      updateProducts();
    };
  
    return { products, deleteProduct, addProduct, editProduct };
  };
  
  export default useProducts;
  
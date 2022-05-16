// Nuskaitome scooterius is local storage
export const getProducts = () => {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : []; // [{id: 1}, {id: 2}, {id: 3}]
  };
  
  export const nextProductsDbId = () => {
    const productsDbId = localStorage.getItem('products_db_id') ?? 0;
    const newProductsDbId = Number(productsDbId) + 1;
    localStorage.setItem('products_db_id', newProductsDbId.toString());
    return Number(newProductsDbId);
  };
  
  // Irasome scooterius i local storage
  export const setProducts = (products /*[{}, {}, {}]*/) => {
    localStorage.setItem('products', JSON.stringify(products));
  };
  
  export const addProduct = (formData) => {
    const products = getProducts();
  
    console.log(formData);

    const newProduct = {
      ean: nextProductsDbId(),
    ...formData
    };
  
    console.log(newProduct);
  
    products.push(newProduct);
    setProducts(products);
  }; // [{}, {}, {}, {}]
  
  export const editProduct = (ean /*ean: 3*/, formData /*{}*/) => {
    const products = getProducts(formData);
    console.log(ean, formData)
  
    // const scooterIndex = scooters.findIndex(scooter => scooter.ean === ean);
    // scooters[scooterIndex].registrationDate = "2020-10-11";
    // scooters[scooterIndex].ean = 3;
  
    const updatedProducts = products.map((product) => {
      if (product.ean !== ean) return product;
      return { ...product, ...formData };
    });
  
    setProducts(updatedProducts);
  };
  
  export const deleteProduct = (ean) => {
    const products = getProducts();
    const updatedProducts = products.filter(product => product.ean !== ean);
    setProducts(updatedProducts);
  }
  
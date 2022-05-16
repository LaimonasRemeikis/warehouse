import { useState } from 'react';
import { useProducts } from './hooks';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from './Routes/HomePage';
import Create from './Routes/Create';




function App() {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const { products, deleteProduct, addProduct, editProduct } = useProducts();

  const handleOnEdit = (formData) => {
    editProduct(selectedProduct.id, formData);
    handleOnClose();
  };

  const handleOnClose = () => {
    setSelectedProduct(null);
  };

  return (
    <>
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/Create" element={<Create></Create>}></Route>
        <Route path="/Edit/:ean" element={<Create></Create>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </>
      );
};


export default App;

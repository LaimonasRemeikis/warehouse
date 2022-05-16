import { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useProducts } from "../hooks";
import { ProductEditForm } from "../components";
import { Link } from "react-router-dom";
import View from "../components/View";


const HomePage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProduct2, setSelectedProduct2] = useState(null);
  const { products, deleteProduct, editProduct } = useProducts();


    const handleActiveChange = (product, checked) => {
        editProduct(product.ean, {...product, active: checked});
    }
   
  
  const handleOnEdit = (formData) => {
    console.log(formData);
    editProduct(selectedProduct.ean, formData);
    
    handleOnClose();
  };

  const handleOnClose = () => {
    setSelectedProduct(null);
    setSelectedProduct2(null);
  };

  return (
    <div className="background">
    <div className="p-4">
      <Link to="/">
        <Button> Home </Button>
      </Link>
      <Link to="/create">
        <Button> Create </Button>
      </Link>
      <div className="container">
        <div className="d-flex align-items-end justify-content-end mb-2"></div>
        <Table className="mb-2" striped bordered hover>
          <thead>
            <tr>
              <td>EAN</td>
              <td>Name</td>
              <td>Price</td>
              <td>Expiry date</td>
              <td>Active</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.ean}>
                <td>{product.ean}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.expiryDate}</td>
                <td>
                  <Form.Check
                    type="checkbox"
                    readOnly
                    checked={product.active}
                    onChange={($event) => handleActiveChange(product, $event.currentTarget.checked)}
                  />
                </td>
                <td className="d-flex align-items-center">
                <Button 
                onClick={() => setSelectedProduct2(product)} 
                   className="me-2"
                    size="sm">
                        View
                    </Button>
                  <Button
                  onClick={() => setSelectedProduct(product)} 
                    className="me-2"
                    size="sm"
                    disabled={!product.active}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => deleteProduct(product.ean)}
                    variant="danger"
                    size="sm"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <ProductEditForm
        onClose={handleOnClose}
        onSave={handleOnEdit}
        product={selectedProduct}
    
      />
      <div>
          <View
          onClose={handleOnClose}
          product={selectedProduct2}
          ></View>
      </div>
    </div>
    </div>
    
  );
};

export default HomePage;

import { useState } from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import { useProducts } from '../hooks';
import { Link, useParams } from "react-router-dom";

const Create = () => {

    let { ean } = useParams();

    const [formData, setFormData] = useState({
        name:'',
        price: 0,
        quantity: 0,
        expiryDate: '2022-05-11',
        active: false,
    });
    const { addProduct, editProduct } = useProducts();

    const handleFieldChange = (key, value) => {
      setFormData({...formData, [key]: value});
    };
  
    const handleOnSave = () => {
        if(ean){
            editProduct()
        }
      addProduct(formData);
    };

  
  
    return (
        <div className="p-4">
            <Link to="/">
            <Button> Home </Button>
            </Link>
            <Link to="/create">
              <Button> Create </Button>
            </Link>
          <div className="container">
            <div className="d-flex align-items-end justify-content-end mb-2">
            </div>
            <Row className="mb-2">
          <Col>
            <Form.Group className="mb-3" controlId="ean">
              <Form.Label>EAN</Form.Label>
              <Form.Control value={formData.ean} disabled />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control value={formData.name} onChange={($event) => handleFieldChange('name', $event.currentTarget.value)} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control value={formData.price}  onChange={($event) => handleFieldChange('price', $event.currentTarget.value)} />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <Form.Group className="mb-3" controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type='number' value={formData.quantity}  onChange={($event) => handleFieldChange('quantity', $event.currentTarget.value)} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="expiryDate">
              <Form.Label>Expiry date</Form.Label>
              <Form.Control type='date' value={formData.expiryDate}  onChange={($event) => handleFieldChange('expiryDate', $event.currentTarget.value)} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="active">
              <Form.Label>Active</Form.Label>
              <Form.Check type="checkbox" onChange={($event) => handleFieldChange('active', $event.currentTarget.checked)} checked={formData.active} />
            </Form.Group>
          </Col>
        </Row>
        <Button onClick={handleOnSave} variant="success">Save</Button>
          </div>
        </div>
      );
}

export default Create;
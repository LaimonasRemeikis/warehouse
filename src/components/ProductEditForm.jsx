import { Button, Col, Row, Form, Modal } from "react-bootstrap";
import {useState} from "react";

const ProductEditForm = (props) => {
  const { onClose, product, onSave } = props;
  const [formData, setFormData] = useState({});

  const handleFieldChange = (key, value) => {
    setFormData({...formData, [key]: value});
  };

  const handleOnSave = () => {
    onSave(formData);
  };

  const handleOnShow = () => {
    setFormData(formData);
  };
 

  return (
    <Modal onShow={handleOnShow} show={!!product} onHide={onClose} className="product-form">
      <Modal.Header closeButton>
        <Modal.Title>Edit </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose} variant="secondary" className="me-2">Close</Button>
        <Button onClick={handleOnSave} variant="success">Save</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default ProductEditForm;

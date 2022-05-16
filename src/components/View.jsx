import { Button, Col, Row, Form, Modal, Card } from "react-bootstrap";
import { useState } from "react";

const View = ({ onClose, product }) => {
  const [formData, setFormData] = useState({});

  const handleOnShow = () => {
    setFormData(formData);
  };

  return (
    <Modal
      onShow={handleOnShow}
      show={!!product}
      onHide={onClose}
      className="product-form"
    >
      <Modal.Header closeButton>
        <Modal.Title>view product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./img/warehouse.png" alt="#" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose} variant="secondary" className="me-2">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default View;

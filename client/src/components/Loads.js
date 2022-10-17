import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Loads({ customers, carriers }) {
  const [customerId, setCustomerId] = useState(null);
  const [carrierId, setCarrierId] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h2 className="text-center text-decoration-underline">
        Build a new load
      </h2>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Customer</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={customerId}
                  onChange={(e) => setCustomerId(e.target.value)}
                >
                  {/* <option>Choose a Customer</option> */}
                  {customers.map((customer) => (
                    <option value={customer.id}>{customer.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Carrier</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={carrierId}
                  onChange={(e) => setCarrierId(e.target.value)}
                >
                  {carriers.map((carrier) => (
                    <option value={carrier.id}>{carrier.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

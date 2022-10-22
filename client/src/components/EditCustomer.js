import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function EditCustomer({ viewCustomer }) {
  const [customerInfo, setCustomerInfo] = useState({});
  const [name, setName] = useState(customerInfo.name);
  const [address, setAddress] = useState(customerInfo.address);
  const [contact_name, setContact_name] = useState(customerInfo.contact_name);
  const [contact_email, setContact_email] = useState(
    customerInfo.contact_email
  );
  const [contact_phone, setContact_phone] = useState(
    customerInfo.contact_phone
  );
  const [notes, setNotes] = useState(customerInfo.notes);

  useEffect(() => {
    fetch(`/customers/${viewCustomer}`)
      .then((res) => res.json())
      .then(setCustomerInfo);
  }, [customerInfo]);

  function handleSubmit(e) {
    e.preventDefault();

    let editCustomer = {
      name,
      address,
      contact_name,
      contact_email,
    };

    fetch(`/customers/${viewCustomer}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editCustomer),
    })
      .then((res) => res.json)
      .then(setCustomerInfo);
  }
  if (customerInfo)
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>{customerInfo.name}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>{customerInfo.address}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>{customerInfo.contact_name}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={contact_name}
                  onChange={(e) => setContact_name(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>{customerInfo.contact_email}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={contact_email}
                  onChange={(e) => setContact_email(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>{customerInfo.contact_phone}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={contact_phone}
                  onChange={(e) => setContact_phone(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>{customerInfo.notes}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={notes}
                  placeholder=""
                  onChange={(e) => setNotes(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" align="center">
                Edit Customer
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
}

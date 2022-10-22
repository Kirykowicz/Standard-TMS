import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function EditCustomer({ viewCustomer }) {
  const [customerInfo, setCustomerInfo] = useState({});
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [contact_name, setContact_name] = useState();
  const [contact_email, setContact_email] = useState();
  const [contact_phone, setContact_phone] = useState();
  const [notes, setNotes] = useState();

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
      contact_phone,
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
  if (customerInfo && customerInfo.id != 39)
    // I added this functionality, if the customer unassigned customer is chosen I do not want that object to be able to be modified. So the edit form will not be rendered.
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name: {customerInfo.name}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address: {customerInfo.address}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  Contact Name: {customerInfo.contact_name}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={contact_name}
                  onChange={(e) => setContact_name(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  Contact Email: {customerInfo.contact_email}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={contact_email}
                  onChange={(e) => setContact_email(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  Contact Phone: {customerInfo.contact_phone}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={contact_phone}
                  onChange={(e) => setContact_phone(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Notes: {customerInfo.notes}</Form.Label>
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

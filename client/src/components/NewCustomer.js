import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function NewCustomer({ customers, setCustomers }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact_name, setContact_name] = useState("");
  const [contact_email, setContact_email] = useState("");
  const [contact_phone, setContact_phone] = useState("");
  const [notes, setNotes] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [newCustomerDetails, setNewCustomerDetails] = useState();

  function handleClick() {
    setSuccessMessage(false);
    setName();
    setAddress();
    setContact_name();
    setContact_email();
    setContact_phone();
    setNotes();
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newCustomer = {
      name,
      address,
      contact_name,
      contact_email,
      contact_phone,
      notes,
    };

    fetch("/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCustomer),
    })
      .then((res) => res.json())
      .then((res) => {
        setCustomers([...customers, res]);
        setNewCustomerDetails(res);
        setSuccessMessage(true);
      });
  }

  if (successMessage)
    return (
      <Container>
        <h1 className="text-center text-success">Success!</h1>

        <p className="text-center">Name: {newCustomerDetails.name}</p>
        <p className="text-center">Address: {newCustomerDetails.address}</p>
        <p className="text-center">
          Contact Name: {newCustomerDetails.contact_name}
        </p>
        <p className="text-center">
          Contact Email: {newCustomerDetails.contact_email}
        </p>
        <p className="text-center">
          Contact Phone: {newCustomerDetails.contact_phone}
        </p>
        <p className="text-center">notes: {newCustomerDetails.notes}</p>

        {console.log(newCustomerDetails)}
        <Container className="text-center">
          <Button variant="success" className="text-end" onClick={handleClick}>
            Exit or add another customer
          </Button>
        </Container>
      </Container>
    );

  if (!successMessage)
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Customer Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="123 S Main St"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Contact Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={contact_name}
                  onChange={(e) => setContact_name(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Contact Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  value={contact_email}
                  onChange={(e) => setContact_email(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Contact Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="000-000-0000"
                  value={contact_phone}
                  onChange={(e) => setContact_phone(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Customer Notes</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={8}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" align="center">
                Add New Customer
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
}

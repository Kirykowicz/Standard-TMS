import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function NewCarrier({ carriers, setCarriers }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mc_number, setMc_number] = useState();
  const [contact_name, setContact_name] = useState("");
  const [contact_email, setContact_email] = useState("");
  const [contact_phone, setContact_phone] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let newCarrier = {
      name,
      address,
      mc_number,
      contact_name,
      contact_email,
      contact_phone,
      notes,
    };

    fetch("/carriers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCarrier),
    })
      .then((res) => res.json())
      .then((res) => setCarriers([...carriers, res]));
  }
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Carrier Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Carrier Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="123 Main st"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>MC Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="000000"
                value={mc_number}
                onChange={(e) => setMc_number(e.target.value)}
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
              <Form.Label>Carrier Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" align="center">
              Add New Carrier
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

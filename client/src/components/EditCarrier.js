import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function EditCarrier({ viewCarrier, setViewCarrier }) {
  const [carrierInfo, setCarrierInfo] = useState({});
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [mc_number, setMc_number] = useState();
  const [contact_name, setContact_name] = useState();
  const [contact_email, setContact_email] = useState();
  const [contact_phone, setContact_phone] = useState();
  const [notes, setNotes] = useState();

  useEffect(() => {
    fetch(`/carriers/${viewCarrier}`)
      .then((res) => res.json())
      .then((res) => {
        setCarrierInfo(res);
        setName();
        setAddress();
        setMc_number();
        setContact_name();
        setContact_email();
        setContact_phone();
        setNotes();
      });
  }, [viewCarrier]);

  function handleSubmit(e) {
    e.preventDefault();

    let editCarrier = {
      name,
      address,
      mc_number,
      contact_name,
      contact_email,
      contact_phone,
      notes,
    };

    fetch(`/carriers/${viewCarrier}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editCarrier),
    })
      .then((res) => res.json())
      .then((res) => {
        setCarrierInfo(res);
        setViewCarrier(res.id);
      });
    setName("");
    setAddress("");
    setMc_number("");
    setContact_name("");
    setContact_email("");
    setContact_phone("");
    setNotes("");
  }

  if (carrierInfo && carrierInfo.id != 30)
    // I added this functionality, if the carrier is unassigned (the model) I do not want that object to be able to be modified. So the edit form will not be rendered.
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name: {carrierInfo.name}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address: {carrierInfo.address}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>MC Number: {carrierInfo.mc_number}</Form.Label>
                <Form.Control
                  type="number"
                  placeholder=""
                  value={mc_number}
                  onChange={(e) => setMc_number(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  Contact Name: {carrierInfo.contact_name}
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
                  Contact Email: {carrierInfo.contact_email}
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
                  Contact Phone: {carrierInfo.contact_phone}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={contact_phone}
                  onChange={(e) => setContact_phone(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Notes: {carrierInfo.notes}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={8}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" align="center">
                Edit Carrier
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
}

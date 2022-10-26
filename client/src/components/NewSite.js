import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function NewSite({ sites, setSites }) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState();
  const [contact_name, setContact_name] = useState("");
  const [contact_email, setContact_email] = useState("");
  const [contact_phone, setContact_phone] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [newSiteDetails, setNewSiteDetails] = useState();

  function handleClick() {
    setSuccessMessage(false);
    setName();
    setCity();
    setState();
    setAddress();
    setZip();
    setContact_name();
    setContact_email();
    setContact_phone();
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newSite = {
      name,
      city,
      state,
      address,
      zip,
      contact_name,
      contact_email,
      contact_phone,
    };

    fetch("/sites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSite),
    })
      .then((res) => res.json())
      .then((res) => {
        setSites([...sites, res]);
        setNewSiteDetails(res);
        setSuccessMessage(true);
      });

    setName("");
    setAddress("");
    setCity("");
    setState("");
    setZip("");
    setContact_name("");
    setContact_email("");
    setContact_phone("");
  }

  if (successMessage)
    return (
      <Container>
        <h1 className="text-center text-success">Success!</h1>

        <p className="text-center">Name: {newSiteDetails.name}</p>
        <p className="text-center">Address: {newSiteDetails.address}</p>
        <p className="text-center">City: {newSiteDetails.city}</p>
        <p className="text-center">State: {newSiteDetails.state}</p>

        <p className="text-center">Zip Code: {newSiteDetails.zip}</p>
        <p className="text-center">
          Contact Name: {newSiteDetails.contact_name}
        </p>
        <p className="text-center">
          Contact Email: {newSiteDetails.contact_email}
        </p>
        <p className="text-center">
          Contact Phone: {newSiteDetails.contact_phone}
        </p>

        {console.log(newSiteDetails)}
        <Container className="text-center">
          <Button variant="success" className="text-end" onClick={handleClick}>
            Exit or add another carrier
          </Button>
        </Container>
      </Container>
    );

  if (!successMessage)
    return (
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Site Name</Form.Label>
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
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex IL, OH, etc"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Zip Code"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
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
                  placeholder="Phone"
                  value={contact_phone}
                  onChange={(e) => setContact_phone(e.target.value)}
                />
              </Form.Group>
              <Row>
                <Button variant="primary" type="submit" align="end">
                  Add New Site
                </Button>
              </Row>
            </Col>
          </Row>
        </Form>
      </Container>
    );
}

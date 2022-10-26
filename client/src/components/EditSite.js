import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function EditSite({ viewSite, setViewSite }) {
  const [siteInfo, setSiteInfo] = useState({});
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [address, setAddress] = useState();
  const [zip, setZip] = useState();
  const [contact_name, setContact_name] = useState();
  const [contact_email, setContact_email] = useState();
  const [contact_phone, setContact_phone] = useState();

  useEffect(() => {
    fetch(`/sites/${viewSite}`)
      .then((res) => res.json())
      .then((res) => {
        setSiteInfo(res);
        setName();
        setCity();
        setState();
        setAddress();
        setZip();
        setContact_name();
        setContact_email();
        setContact_phone();
      });
  }, [viewSite]);

  function handleSubmit(e) {
    e.preventDefault();

    let editSite = {
      name,
      city,
      state,
      address,
      zip,
      contact_name,
      contact_email,
      contact_phone,
    };

    fetch(`/sites/${viewSite}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editSite),
    })
      .then((res) => res.json())
      .then((res) => {
        setSiteInfo(res);
        setViewSite(res.id);
      });

    setName("");
    setCity("");
    setState("");
    setAddress("");
    setZip();
    setContact_name("");
    setContact_email("");
    setContact_phone("");
  }

  if (siteInfo && siteInfo.id != 52)
    // I added this functionality, if the carrier is unassigned (the model) I do not want that object to be able to be modified. So the edit form will not be rendered.

    return (
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Site Name: {siteInfo.name}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address: {siteInfo.address}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>City: {siteInfo.city}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>State: {siteInfo.state}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Zip Code: {siteInfo.zip}</Form.Label>
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
                <Form.Label>Contact Name: {siteInfo.contact_name}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={contact_name}
                  onChange={(e) => setContact_name(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Contact Email: {siteInfo.contact_email}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={contact_email}
                  onChange={(e) => setContact_email(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Contact Phone: {siteInfo.contact_phone}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={contact_phone}
                  onChange={(e) => setContact_phone(e.target.value)}
                />
              </Form.Group>
              <Row>
                <Button variant="primary" type="submit" align="end">
                  Edit Site
                </Button>
              </Row>
            </Col>
          </Row>
        </Form>
      </Container>
    );
}

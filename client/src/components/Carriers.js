import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import NewCarrier from "./NewCarrier";
import EditCarrier from "./EditCarrier";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Carriers({ carriers, setCarriers }) {
  const [viewCarrier, setViewCarrier] = useState(false);
  return (
    <Container className="bg-light">
      <Tabs
        defaultActiveKey="addCarrier"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="addCarrier" title="Add a Carrier">
          <NewCarrier carriers={carriers} setCarriers={setCarriers} />
        </Tab>
        <Tab eventKey="SearchEdit" title="Edit a Carrier">
          <Container>
            <Row>
              <Col></Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Select a Carrier</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={viewCarrier}
                    onChange={(e) => setViewCarrier(e.target.value)}
                  >
                    <option value="+30">Carrier Unassigned</option>
                    {carriers.map((carrier) => (
                      <option value={carrier.id}>{carrier.name}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col></Col>
            </Row>
            {viewCarrier ? (
              <EditCarrier
                viewCarrier={viewCarrier}
                setViewCarrier={setViewCarrier}
              />
            ) : null}
          </Container>
        </Tab>
      </Tabs>
    </Container>
  );
}

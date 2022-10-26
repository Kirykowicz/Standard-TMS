import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import NewSite from "./NewSite";
import EditSite from "./EditSite";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

export default function Sites({ sites, setSites }) {
  const [viewSite, setViewSite] = useState(false);
  return (
    <Container className="bg-light">
      <Tabs
        defaultActiveKey="addSite"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="addSite" title="Add a Site">
          <NewSite sites={sites} setSites={setSites} />
        </Tab>
        <Tab eventKey="SearchEdit" title="Edit a Site">
          <Container>
            <Row>
              <Col></Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Select a Site</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={viewSite}
                    onChange={(e) => {
                      setViewSite(e.target.value);
                    }}
                  >
                    <option value="+52">Site Unassigned</option>
                    {sites.map((site) => (
                      <option value={site.id}>{site.name}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col></Col>
            </Row>
            {viewSite ? (
              <EditSite viewSite={viewSite} setViewSite={setViewSite} />
            ) : null}
          </Container>
        </Tab>
      </Tabs>
    </Container>
  );
}

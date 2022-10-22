import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import NewCustomer from "./NewCustomer";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EditCustomer from "./EditCustomer";

export default function Customers({ customers, setCustomers }) {
  const [viewCustomer, setViewCustomer] = useState(null);
  return (
    <Container>
      <Tabs
        defaultActiveKey="addCustomer"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="addCustomer" title="Add a Customer">
          <NewCustomer customers={customers} setCustomer={setCustomers} />
        </Tab>
        <Tab eventKey="SearchEdit" title="Edit a Customer">
          <Container>
            <Row>
              <Col></Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Select a Customer</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={viewCustomer}
                    onChange={(e) => setViewCustomer(e.target.value)}
                  >
                    {customers.map((customer) => (
                      <option value={customer.id}>{customer.name}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col></Col>
            </Row>
            {viewCustomer ? <EditCustomer viewCustomer={viewCustomer} /> : null}
          </Container>
        </Tab>
      </Tabs>
    </Container>
  );
}

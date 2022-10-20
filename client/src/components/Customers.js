import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import NewCustomer from "./NewCustomer";

export default function Customers() {
  return (
    <Container>
      <Tabs
        defaultActiveKey="addCustomer"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="addCustomer" title="Add a Customer">
          <NewCustomer />
        </Tab>
        <Tab eventKey="SearchEdit" title="Search or Edit a Customer">
          <h1>My name is robert</h1>
        </Tab>
      </Tabs>
    </Container>
  );
}

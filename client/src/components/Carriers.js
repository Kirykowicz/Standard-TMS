import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import NewCarrier from "./NewCarrier";

export default function Carriers({ carriers, setCarriers }) {
  return (
    <Container>
      <Tabs
        defaultActiveKey="addCarrier"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="addCarrier" title="Add a Carrier">
          <NewCarrier carriers={setCarriers} setCarriers={setCarriers} />
        </Tab>
        <Tab eventKey="SearchEdit" title="Search or Edit a Carrier">
          <h1>Under Construction</h1>
        </Tab>
      </Tabs>
    </Container>
  );
}

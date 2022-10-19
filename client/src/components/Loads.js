import NewLoad from "./NewLoad";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";

export default function Loads({
  customers,
  carriers,
  sites,
  equipment,
  users,
  feeTypes,
  loads,
  setLoads,
}) {
  return (
    <>
      <Container>
        <Tabs
          defaultActiveKey="newLoad"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="newLoad" title="New Load">
            <NewLoad
              customers={customers}
              carriers={carriers}
              sites={sites}
              equipment={equipment}
              users={users}
              feeTypes={feeTypes}
              loads={loads}
              setLoads={setLoads}
            />
          </Tab>
          <Tab eventKey="SearchEdit" title="Search or Edit a Load">
            <h1>My name is robert</h1>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

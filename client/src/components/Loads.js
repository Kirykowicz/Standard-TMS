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
  setViewIndividualLoad,
  individualLoad,
  setIndividualLoad,
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
              setViewIndividualLoad={setViewIndividualLoad}
              individualLoad={individualLoad}
              setIndividualLoad={setIndividualLoad}
            />
          </Tab>
          <Tab eventKey="SearchEdit" title="Search or Edit a Load">
            <h1>Under Construction</h1>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

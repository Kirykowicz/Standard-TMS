import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import NewSite from "./NewSite";

export default function Sites({ sites, setSites }) {
  return (
    <Container>
      <Tabs
        defaultActiveKey="addSite"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="addSite" title="Add a Site">
          <NewSite sites={sites} setSites={setSites} />
        </Tab>
        <Tab eventKey="SearchEdit" title="Search or Edit a Site">
          <h1>Under Construction</h1>
        </Tab>
      </Tabs>
    </Container>
  );
}

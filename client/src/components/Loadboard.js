// This component renders a table with individual load details per row.

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import LoadboardRow from "./LoadboardRow";
import { useState, useEffect } from "react";

export default function Loadboard({
  loads,
  setLoads,
  setViewIndividualLoad,
  setIndividualLoad,
}) {
  //   const [loads, setLoads] = useState([]);

  //   useEffect(() => {
  //     fetch("/loads")
  //       .then((res) => res.json())
  //       .then((res) => setLoads(res));
  //   }, []);
  return (
    <>
      <Container fluid>
        <Table hover bordered size="sm">
          <thead>
            <tr className="bg-primary text-white mb-5" bordered>
              <th>Load #</th>
              <th>Load Status</th>
              <th>Truck Status</th>
              <th>Customer</th>
              <th>Origin City</th>
              <th>Origin State</th>
              <th>Ship Date</th>
              <th>Destination City</th>
              <th>Destination State</th>
              <th>Delivery Date</th>
              <th>Pickup Time</th>
              <th>Delivery Time</th>
              <th>Carrier Rep</th>
              <th>Equipment</th>
            </tr>
          </thead>
          <tbody>
            {loads.map((load) => (
              <LoadboardRow
                load={load}
                setViewIndividualLoad={setViewIndividualLoad}
                setIndividualLoad={setIndividualLoad}
              />
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

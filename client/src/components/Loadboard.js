import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import LoadboardRow from "./LoadboardRow";
import { useState, useEffect } from "react";

export default function Loadboard() {
  const [loads, setLoads] = useState([]);

  useEffect(() => {
    fetch("/loads")
      .then((res) => res.json())
      .then((res) => setLoads(res));
  }, []);
  return (
    <>
      <Container fluid>
        <Table striped hover>
          <thead>
            <tr>
              <th>Load #</th>
              <th>Load Status</th>
              <th>Truck Status</th>
              <th>Customer</th>
              <th>Origin City</th>
              <th>Origin State</th>
              <th>Ship date</th>
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
              <LoadboardRow load={load} />
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function EditLoad({ individualLoad }) {
  console.log(individualLoad);
  return (
    <Container>
      <h1 className="text-center mb-5">Summary</h1>
      <Row>
        <Col>
          <h4 className="text-primary">
            Load Number:{" "}
            <span className="text-dark">
              {individualLoad.id ? individualLoad.id : "-----"}
            </span>
          </h4>
          <h4 className="text-primary">
            Load Status:{" "}
            <span className="text-dark">
              {individualLoad.load_status
                ? individualLoad.load_status
                : "-----"}
            </span>
          </h4>
          <h4 className="text-primary">
            Truck Status:{" "}
            <span className="text-dark">
              {individualLoad.truck_status
                ? individualLoad.truck_status
                : "-----"}
            </span>
          </h4>
          <h4 className="text-primary">
            Customer:{" "}
            <span className="text-dark">
              {individualLoad.customer_name
                ? individualLoad.customer_name
                : "-----"}
            </span>
          </h4>
          <h4 className="text-primary">
            Carrier:{" "}
            <span className="text-dark">
              {individualLoad.carrier_name
                ? individualLoad.carrier_name
                : "-----"}
            </span>
          </h4>
          <h4 className="text-primary">
            Customer Rep:{" "}
            <span className="text-dark">
              {individualLoad.customer_rep.first_name
                ? individualLoad.customer_rep.first_name
                : "-----"}{" "}
              {individualLoad.customer_rep.last_name
                ? individualLoad.customer_rep.last_name
                : "-----"}
            </span>
          </h4>
          <h4 className="text-primary">
            Carrier Rep:{" "}
            <span className="text-dark">
              {individualLoad.carrier_rep.first_name
                ? individualLoad.carrier_rep.first_name
                : "-----"}{" "}
              {individualLoad.carrier_rep.last_name
                ? individualLoad.carrier_rep.last_name
                : "-----"}
            </span>
          </h4>
          <h4 className="text-primary">
            Equipment:{" "}
            <span className="text-dark">
              {individualLoad.equipment ? individualLoad.equipment : "-----"}
            </span>
          </h4>
          <h4 className="text-primary">
            Length:{" "}
            <span className="text-dark">
              {individualLoad.equipment_length
                ? individualLoad.equipment_length
                : "-----"}
            </span>
          </h4>
        </Col>
        <Col>
          <h4 className="text-primary">
            Commodity:{" "}
            <span className="text-dark">
              {individualLoad.commodity ? individualLoad.commodity : "-----"}
            </span>
          </h4>
          <h4 className="text-primary">
            Temperature:{" "}
            <span className="text-dark">
              {individualLoad.temperature
                ? individualLoad.temperature
                : "-----"}
            </span>
          </h4>
          <h4 className="text-primary">
            Weight:{" "}
            <span className="text-dark">
              {individualLoad.weight ? individualLoad.weight : "-----"}
            </span>
          </h4>
          <h4 className="text-primary">
            Pallet Count:{" "}
            <span className="text-dark">
              {individualLoad.pallet_count
                ? individualLoad.pallet_count
                : "-----"}
            </span>
          </h4>
          <h4 className="text-primary">
            Driver Name:{" "}
            <span className="text-dark">
              {individualLoad.driver_name
                ? individualLoad.driver_name
                : "-----"}
            </span>
          </h4>
          <h4 className="text-primary">
            Driver Cell:{" "}
            <span className="text-dark">
              {individualLoad.driver_cell
                ? individualLoad.driver_cell
                : "-----"}
            </span>
          </h4>
          <h4 className="text-primary">
            Truck Number:{" "}
            <span className="text-dark">
              {individualLoad.truck_number
                ? individualLoad.truck_number
                : "-----"}
            </span>
          </h4>
          <h4 className="text-primary">
            Trailer Number:{" "}
            <span className="text-dark">
              {individualLoad.trailer_number
                ? individualLoad.trailer_number
                : "-----"}
            </span>
          </h4>
        </Col>
      </Row>
    </Container>
  );
}

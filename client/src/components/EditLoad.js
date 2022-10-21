import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function EditLoad({
  individualLoad,
  customers,
  carriers,
  sites,
  equipment,
  users,
  feeTypes,
  loads,
  setLoads,
}) {
  const [customerId, setCustomerId] = useState(39);
  const [carrierId, setCarrierId] = useState(30);
  const [originId, setOriginId] = useState();
  const [pickupDate, setPickupDate] = useState();
  const [pickupTime, setPickupTime] = useState("");
  const [pickupNotes, setPickupNotes] = useState();
  const [destinationId, setDestinationId] = useState();
  const [deliverDate, setDeliveryDate] = useState();
  const [deliveryTime, setDeliveryTime] = useState("");
  const [deliveryNotes, setDeliveryNotes] = useState();
  const [equipmentType, setEquipmentType] = useState();
  const [commodity, setCommodity] = useState();
  const [weight, setWeight] = useState();
  const [temperature, setTemperature] = useState();
  const [pallets, setPallets] = useState();
  const [equipmentLength, setEquipmentLength] = useState();
  const [carrierRep, setCarrierRep] = useState();
  const [customerRep, setCustomerRep] = useState();
  const [customerFeeType, setCustomerFeeType] = useState();
  const [customerFee, setCustomerFee] = useState();
  const [carrierFeeType, setCarrierFeeType] = useState();
  const [carrierFee, setCarrierFee] = useState();
  const [notes, setNotes] = useState();
  const [driverName, setDriverName] = useState();
  const [driverCell, setDriverCell] = useState();
  const [truckNumber, setTruckNumber] = useState();
  const [trailerNumber, setTrailerNumber] = useState();
  console.log(individualLoad);

  function handleEdit(e) {
    e.preventDefault();
  }
  return (
    <>
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
      <Container className="mt-5">
        <Form onSubmit={handleEdit}>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Customer</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={customerId}
                  onChange={(e) => setCustomerId(e.target.value)}
                >
                  {/* <option>Choose a Customer</option> */}
                  {customers.map((customer) => (
                    <option value={customer.id}>{customer.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Carrier</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={carrierId}
                  onChange={(e) => setCarrierId(e.target.value)}
                >
                  {carriers.map((carrier) => (
                    <option value={carrier.id}>{carrier.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Origin</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={originId}
                  onChange={(e) => setOriginId(e.target.value)}
                >
                  <option>Choose a Site</option>
                  {sites.map((site) => (
                    <option value={site.id}>{site.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Pickup Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Pickup Time</Form.Label>
                <Form.Control
                  type="time"
                  placeholder="Time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Pickup Number / Notes</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={1}
                  value={pickupNotes}
                  onChange={(e) => setPickupNotes(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Destination</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={destinationId}
                  onChange={(e) => setDestinationId(e.target.value)}
                >
                  <option>Choose a Site</option>
                  {sites.map((site) => (
                    <option value={site.id}>{site.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Delivery Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Date"
                  value={deliverDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Delivery Time</Form.Label>
                <Form.Control
                  type="time"
                  placeholder="Time"
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Delivery Number / Notes</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={1}
                  value={deliveryNotes}
                  onChange={(e) => setDeliveryNotes(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Equipment</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={equipmentType}
                  onChange={(e) => setEquipmentType(e.target.value)}
                >
                  <option>Choose Equipment</option>
                  {equipment.map((eq) => (
                    <option value={eq.id}>{eq.equipment_type}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Length</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="feet"
                  value={equipmentLength}
                  onChange={(e) => setEquipmentLength(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Temperature</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Degrees"
                  value={temperature}
                  onChange={(e) => setTemperature(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Commodity </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description"
                  value={commodity}
                  onChange={(e) => setCommodity(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Weight</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="lbs"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Pallet Count</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="#"
                  value={pallets}
                  onChange={(e) => setPallets(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Driver Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={driverName}
                  onChange={(e) => setDriverName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Driver Cell</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  value={driverCell}
                  onChange={(e) => setDriverCell(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Truck Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="#"
                  value={truckNumber}
                  onChange={(e) => setTruckNumber(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Trailer Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="#"
                  value={trailerNumber}
                  onChange={(e) => setTrailerNumber(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Load Notes</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={8}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Customer Rep</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      value={customerRep}
                      onChange={(e) => setCustomerRep(e.target.value)}
                    >
                      <option>Unassigned</option>
                      {users.map((user) => (
                        <option value={user.id}>
                          {user.first_name}
                          {user.last_name}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Carrier Rep</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      value={carrierRep}
                      onChange={(e) => setCarrierRep(e.target.value)}
                    >
                      <option>Unassigned</option>
                      {users.map((user) => (
                        <option value={user.id}>
                          {user.first_name}
                          {user.last_name}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Customer Rate Type</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      value={customerFeeType}
                      onChange={(e) => setCustomerFeeType(e.target.value)}
                    >
                      {/* <option>Unassigned</option> */}
                      {feeTypes.map((fee) => (
                        <option value={fee.id}>{fee.name}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Customer Rate</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Dollars"
                      value={customerFee}
                      onChange={(e) => setCustomerFee(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Carrier Rate Type</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      value={carrierFeeType}
                      onChange={(e) => setCarrierFeeType(e.target.value)}
                    >
                      {/* <option>Unassigned</option> */}
                      {feeTypes.map((fee) => (
                        <option value={fee.id}>{fee.name}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Carrier Rate</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Dollars"
                      value={carrierFee}
                      onChange={(e) => setCarrierFee(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>
          <Container className="text-end mt-4">
            <Button variant="primary" type="submit" align="center">
              Edit Load
            </Button>
          </Container>
        </Form>
      </Container>
    </>
  );
}

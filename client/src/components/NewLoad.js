import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function NewLoad({
  customers,
  carriers,
  sites,
  equipment,
  users,
  feeTypes,
}) {
  const [customerId, setCustomerId] = useState(19);
  const [carrierId, setCarrierId] = useState(15);
  const [originId, setOriginId] = useState(undefined);
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState(undefined);
  const [pickupNotes, setPickupNotes] = useState("");
  const [destinationId, setDestinationId] = useState(undefined);
  const [deliverDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState(undefined);
  const [deliveryNotes, setDeliveryNotes] = useState("");
  const [equipmentType, setEquipmentType] = useState(undefined);
  const [commodity, setCommodity] = useState("");
  const [weight, setWeight] = useState(undefined);
  const [temperature, setTemperature] = useState(undefined);
  const [pallets, setPallets] = useState(undefined);
  const [equipmentLength, setEquipmentLength] = useState(undefined);
  const [carrierRep, setCarrierRep] = useState(undefined);
  const [customerRep, setCustomerRep] = useState(undefined);
  const [customerFeeType, setCustomerFeeType] = useState(undefined);
  const [customerFee, setCustomerFee] = useState(undefined);
  const [carrierFeeType, setCarrierFeeType] = useState(undefined);
  const [carrierFee, setCarrierFee] = useState(undefined);
  const [notes, setNotes] = useState("");
  const [driverName, setDriverName] = useState("");
  const [driverCell, setDriverCell] = useState("");
  const [truckNumber, setTruckNumber] = useState("");
  const [trailerNumber, setTrailerNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newLoad = {
      customer_id: customerId,
      carrier_id: carrierId,
      weight,
      pallet_count: pallets,
      temperature,
      equipment_id: equipmentType,
      truck_status_id: 50,
      load_status_id: 23,
      commodity,
      notes,
      driver_name: driverName,
      driver_cell: driverCell,
      truck_number: truckNumber,
      trailer_number: trailerNumber,
      equipment_lenght: equipmentLength,
    };

    let newOrigin = {
      load_id: 2,
      site_id: originId,
      date: pickupDate,
      time: pickupTime,
    };

    console.log(newLoad);
    console.log(newOrigin);
  };
  return (
    <>
      <Container className="mt-5">
        <Form onSubmit={handleSubmit}>
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
              Build This Load
            </Button>
          </Container>
        </Form>
      </Container>
    </>
  );
}

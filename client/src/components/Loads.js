import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Loads({
  customers,
  carriers,
  sites,
  equipment,
  users,
  feeTypes,
}) {
  const [customerId, setCustomerId] = useState(null);
  const [carrierId, setCarrierId] = useState(null);
  const [originId, setOriginId] = useState(null);
  const [pickupDate, setPickupDate] = useState(null);
  const [pickupTime, setPickupTime] = useState(null);
  const [destinationId, setDestinationId] = useState(null);
  const [deliverDate, setDeliveryDate] = useState(null);
  const [deliveryTime, setDeliveryTime] = useState(null);
  const [equipmentType, setEquipmentType] = useState(null);
  const [commodity, setCommodity] = useState(null);
  const [weight, setWeight] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [pallets, setPallets] = useState(null);
  const [equipmentLength, setEquipmentLength] = useState(null);
  const [carrierRep, setCarrierRep] = useState(null);
  const [customerRep, setCustomerRep] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h2 className="text-center text-decoration-underline mb-5">NEW LOAD</h2>
      <Container>
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
                  <option>Choose Origin</option>
                  {sites.map((site) => (
                    <option value={site.id}>{site.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
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
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="time"
                  placeholder="Time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
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
                  <option>Choose Destination</option>
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
                <Form.Label>Commodity Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Commodity"
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
                  placeholder=""
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
                  placeholder=""
                  value={pallets}
                  onChange={(e) => setPallets(e.target.value)}
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
                <Form.Control as="textarea" rows={6} />
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
              <Row></Row>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
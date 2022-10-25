import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
import Map from "./Map";
import Table from "react-bootstrap/Table";

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
  setViewIndividualLoad,
  loadStatuses,
  truckStatuses,
  setIndividualLoad,
}) {
  const [customerId, setCustomerId] = useState();
  const [carrierId, setCarrierId] = useState();
  const [originId, setOriginId] = useState();
  const [pickupDate, setPickupDate] = useState();
  const [pickupTime, setPickupTime] = useState();
  const [pickupNotes, setPickupNotes] = useState();
  const [destinationId, setDestinationId] = useState();
  const [deliverDate, setDeliveryDate] = useState();
  const [deliveryTime, setDeliveryTime] = useState();
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
  const [loadStatus, setLoadStatus] = useState();
  const [truckStatus, setTruckStatus] = useState();

  function handleDelete() {
    fetch(`/loads/${individualLoad.id}`, {
      method: "DELETE",
    });
    setLoads(loads.filter((load) => load.id !== individualLoad.id));
    setViewIndividualLoad(false);
  }

  function handleEdit(e) {
    e.preventDefault();
    let editLoad = {
      customer_id: customerId,
      carrier_id: carrierId,
      weight,
      pallet_count: pallets,
      temperature,
      equipment_id: equipmentType,
      truck_status_id: truckStatus,
      load_status_id: loadStatus,
      commodity,
      notes,
      driver_name: driverName,
      driver_cell: driverCell,
      equipment_length: equipmentLength,
      truck_number: truckNumber,
      trailer_number: trailerNumber,
    };

    let editOrigin = {
      site_id: originId,
      date: pickupDate,
      time: pickupTime,
    };

    let editDestination = {
      site_id: destinationId,
      date: deliverDate,
      time: deliveryTime,
    };

    let editCustomerRep = {
      user_id: customerRep,
    };

    let editCarrierRep = {
      user_id: carrierRep,
    };

    // patch request to edit details specific to the load object
    fetch(`/loads/${individualLoad.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editLoad),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setIndividualLoad(res);
      });

    setCustomerId();
    setCarrierId();
    setWeight();
    setPallets();
    setTemperature();
    setEquipmentType();
    setTruckStatus();
    setLoadStatus();
    setCommodity();
    setNotes();
    setDriverName();
    setDriverCell();
    setTrailerNumber();
    setTruckNumber();

    // Patch request to edit the origin

    fetch(`/stops/${individualLoad.stops[0].id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editOrigin),
    });

    setOriginId();
    setPickupDate();
    setPickupTime();

    fetch(`/stops/${individualLoad.stops[1].id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editDestination),
    });

    setDestinationId();
    setDeliveryDate();
    setDeliveryTime();

    // set customer rep

    fetch(`/customer_reps/${individualLoad.customer_rep.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editCustomerRep),
    });

    setCustomerRep();

    // set customer rep

    fetch(`/carrier_reps/${individualLoad.carrier_rep.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editCarrierRep),
    });
    setCarrierRep();
  }
  console.log(individualLoad);

  return (
    <>
      <Map individualLoad={individualLoad} />
      <Container className="mt-5">
        <Button
          variant="outline-primary"
          className="mb-2"
          onClick={() => setViewIndividualLoad(false)}
        >
          Exit Load
        </Button>

        <Table bordered>
          <tr>
            <td className="text-primary">Load Number:</td>
            <td>{individualLoad.id ? individualLoad.id : "-----"}</td>
            <td className="text-primary">Customer Email:</td>
            <td>
              {individualLoad.customer_contact_email
                ? individualLoad.customer_contact_email
                : "-----"}
            </td>
            <td className="text-primary">Carrier Phone:</td>
            <td>
              {individualLoad.carrier_contact_phone
                ? individualLoad.carrier_contact_phone
                : "-----"}
            </td>
            <td className="text-primary">Weight:</td>
            <td>{individualLoad.weight ? individualLoad.weight : "-----"}</td>
          </tr>
          <tr>
            <td className="text-primary">Load Status:</td>
            <td>
              {individualLoad.load_status
                ? individualLoad.load_status
                : "-----"}
            </td>
            <td className="text-primary">Customer Phone:</td>
            <td>
              {individualLoad.customer_contact_phone
                ? individualLoad.customer_contact_phone
                : "-----"}
            </td>
            <td className="text-primary">Customer Rep:</td>
            <td>
              {individualLoad.customer_rep_name.first_name
                ? individualLoad.customer_rep_name.first_name
                : "-----"}{" "}
              {individualLoad.customer_rep_name.last_name
                ? individualLoad.customer_rep_name.last_name
                : "-----"}
            </td>
            <td className="text-primary">Pallet Count:</td>
            <td>
              {individualLoad.pallet_count
                ? individualLoad.pallet_count
                : "-----"}
            </td>
          </tr>
          <tr>
            <td className="text-primary">Truck Status:</td>
            <td>
              {individualLoad.truck_status
                ? individualLoad.truck_status
                : "-----"}
            </td>
            <td className="text-primary">Carrier:</td>
            <td>
              {individualLoad.carrier_name
                ? individualLoad.carrier_name
                : "-----"}
            </td>
            <td className="text-primary">Carrier Rep:</td>
            <td>
              {individualLoad.carrier_rep_name.first_name
                ? individualLoad.carrier_rep_name.first_name
                : "-----"}{" "}
              {individualLoad.carrier_rep_name.last_name
                ? individualLoad.carrier_rep_name.last_name
                : "-----"}
            </td>
            <td className="text-primary">Driver Name / Cell:</td>
            <td>
              {individualLoad.driver_name
                ? individualLoad.driver_name
                : "-----"}
              :{" "}
              {individualLoad.driver_cell
                ? individualLoad.driver_cell
                : "-----"}
            </td>
          </tr>
          <tr>
            <td className="text-primary">Customer:</td>
            <td>
              {individualLoad.customer_name
                ? individualLoad.customer_name
                : "-----"}
            </td>
            <td className="text-primary">Carrier Contact:</td>
            <td>
              {individualLoad.carrier_contact_name
                ? individualLoad.carrier_contact_name
                : "-----"}
            </td>
            <td className="text-primary">Equipment / Temperature:</td>
            <td>
              {individualLoad.equipment ? individualLoad.equipment : "-----"}:{" "}
              {individualLoad.temperature ? individualLoad.temperature : "Dry"}
            </td>
            <td className="text-primary">Truck Number:</td>
            <td>
              {individualLoad.truck_number
                ? individualLoad.truck_number
                : "-----"}
            </td>
          </tr>
          <tr>
            <td className="text-primary">Customer Contact:</td>
            <td>
              {individualLoad.customer_contact_name
                ? individualLoad.customer_contact_name
                : "-----"}
            </td>
            <td className="text-primary">Carrier Email:</td>
            <td>
              {individualLoad.carrier_contact_email
                ? individualLoad.carrier_contact_email
                : "-----"}
            </td>
            <td className="text-primary">Length:</td>
            <td>
              {individualLoad.equipment_length
                ? individualLoad.equipment_length
                : "-----"}
            </td>
            <td className="text-primary">Trailer Number:</td>
            <td>
              {individualLoad.trailer_number
                ? individualLoad.trailer_number
                : "-----"}
            </td>
          </tr>
        </Table>
      </Container>

      <Container className="mt-5">
        <Form onSubmit={handleEdit}>
          <Row>
            <Col>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Load Status</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      value={loadStatus}
                      onChange={(e) => setLoadStatus(e.target.value)}
                    >
                      <option>-</option>
                      {loadStatuses.map((status) => (
                        <option value={status.id}>{status.status}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Truck Status</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      value={truckStatus}
                      onChange={(e) => setTruckStatus(e.target.value)}
                    >
                      <option>-</option>
                      {truckStatuses.map((status) => (
                        <option value={status.id}>{status.status}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Customer</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={customerId}
                  onChange={(e) => setCustomerId(e.target.value)}
                >
                  <option>-</option>
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
                  <option>-</option>
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
                    <Form.Label>Fee Type</Form.Label>
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
                  {/* <Form.Group className="mb-3">
                    <Form.Label>Carrier Rate Type</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      value={carrierFeeType}
                      onChange={(e) => setCarrierFeeType(e.target.value)}
                    >
                      {feeTypes.map((fee) => (
                        <option value={fee.id}>{fee.name}</option>
                      ))}
                    </Form.Select>
                  </Form.Group> */}
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
            <Button variant="danger" className="mr-5" onClick={handleDelete}>
              Delete Load # {individualLoad.id}
            </Button>

            <Button variant="primary" type="submit" align="center">
              Edit Load
            </Button>
          </Container>
        </Form>
      </Container>
    </>
  );
}

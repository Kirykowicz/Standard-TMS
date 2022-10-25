import { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route, Routes } from "react-router-dom";
import Loadboard from "./components/Loadboard";
import Customers from "./components/Customers";
import Carriers from "./components/Carriers";
import History from "./components/History";
import Sites from "./components/Sites";
import Loads from "./components/Loads";
import IndividualLoad from "./components/IndividualLoad";
import Map from "./components/Map";

function App() {
  // const [user, setUser] = useState(null);
  const [viewIndividualLoad, setViewIndividualLoad] = useState(false);
  const [individualLoad, setIndividualLoad] = useState({});
  const [sites, setSites] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [carriers, setCarriers] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [users, setUsers] = useState([]);
  const [feeTypes, setFeeTypes] = useState([]);
  const [loads, setLoads] = useState([]);
  const [truckStatuses, setTruckStatuses] = useState([]);
  const [loadStatuses, setLoadStatuses] = useState([]);

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => {
  //         setUser(user);
  //       });
  //     }
  //   });
  // }, []);

  useEffect(() => {
    fetch("/loads")
      .then((res) => res.json())
      .then(setLoads);

    fetch("/sites")
      .then((res) => res.json())
      .then(setSites);

    fetch("/customers")
      .then((res) => res.json())
      .then(setCustomers);

    fetch("/carriers")
      .then((res) => res.json())
      .then(setCarriers);

    fetch("/equipment")
      .then((res) => res.json())
      .then(setEquipment);

    fetch("/users")
      .then((res) => res.json())
      .then(setUsers);

    fetch("/fee_types")
      .then((res) => res.json())
      .then(setFeeTypes);

    fetch("/truck_statuses")
      .then((res) => res.json())
      .then(setTruckStatuses);

    fetch("/load_statuses")
      .then((res) => res.json())
      .then(setLoadStatuses);
  }, [individualLoad]);

  // if (!user) return <Login onLogin={setUser} />;

  // when a load on the load board is clicked, view that individual load
  if (viewIndividualLoad)
    return (
      <IndividualLoad
        setViewIndividualLoad={setViewIndividualLoad}
        individualLoad={individualLoad}
        loads={loads}
        setLoads={setLoads}
        customers={customers}
        carriers={carriers}
        sites={sites}
        equipment={equipment}
        users={users}
        feeTypes={feeTypes}
        loadStatuses={loadStatuses}
        truckStatuses={truckStatuses}
        setIndividualLoad={setIndividualLoad}
      />
    );
  return (
    <>
      <Container fluid className="bg-white" style={{ height: "100vh" }}>
        <Container fluid className="text-center">
          <h1 className="text-secondary">Standard TMS</h1>
        </Container>
        {/* <Navbar setUser={setUser} /> */}
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Loadboard
                loads={loads}
                setLoads={setLoads}
                setViewIndividualLoad={setViewIndividualLoad}
                setIndividualLoad={setIndividualLoad}
              />
            }
          />
          <Route
            path="/customers"
            element={
              <Customers customers={customers} setCustomers={setCustomers} />
            }
          />
          <Route
            path="/carriers"
            element={<Carriers carriers={carriers} setCarriers={setCarriers} />}
          />
          <Route path="/history" element={<History />} />
          <Route
            path="/sites"
            element={<Sites sites={sites} setSites={setSites} />}
          />
          <Route
            path="/loads"
            element={
              <Loads
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
            }
          />
          <Route path="/map" element={<Map />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

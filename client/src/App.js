import { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
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

function App() {
  // const [user, setUser] = useState(null);

  const [sites, setSites] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [carriers, setCarriers] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [users, setUsers] = useState([]);
  const [feeTypes, setFeeTypes] = useState([]);
  const [loads, setLoads] = useState([]);

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
  }, []);

  useEffect(() => {
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
  }, []);

  // if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      {/* <Navbar setUser={setUser} /> */}
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={<Loadboard loads={loads} setLoads={setLoads} />}
        />
        <Route path="/customers" element={<Customers />} />
        <Route path="/carriers" element={<Carriers />} />
        <Route path="/history" element={<History />} />
        <Route path="/sites" element={<Sites />} />
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
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

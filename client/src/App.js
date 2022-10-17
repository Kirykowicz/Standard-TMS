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
    fetch("/sites")
      .then((res) => res.json())
      .then((res) => {
        setSites(res);
      });
  }, []);

  // if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      {/* <Navbar setUser={setUser} /> */}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Loadboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/carriers" element={<Carriers />} />
        <Route path="/history" element={<History />} />
        <Route path="/sites" element={<Sites />} />
        <Route path="/loads" element={<Loads />} />
      </Routes>
    </>
  );
}

export default App;

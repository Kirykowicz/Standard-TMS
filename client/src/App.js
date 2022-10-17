import { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  // const [user, setUser] = useState(null);
  const [loads, setLoads] = useState([]);
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
    fetch("/loads")
      .then((res) => res.json())
      .then((res) => {
        setLoads(res);
        console.log(loads);
      });

    fetch("/sites")
      .then((res) => res.json())
      .then((res) => {
        setSites(res);
        console.log(sites);
      });
  }, []);

  // if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      {/* <Navbar setUser={setUser} /> */}
      <Navbar />
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function EditCarrier({ viewCarrier }) {
  const [carrierInfo, setCarrierInfo] = useState({});
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mc_number, setMc_number] = useState();
  const [contact_name, setContact_name] = useState("");
  const [contact_email, setContact_email] = useState("");
  const [contact_phone, setContact_phone] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    fetch(`/carriers/${viewCarrier}`)
      .then((res) => res.json())
      .then(setCarrierInfo);
  }, [carrierInfo]);

  function handleSubmit(e) {
    e.preventDefault();

    let editCarrier = {
      name,
      address,
      mc_number,
      contact_name,
      contact_email,
      contact_phone,
      notes,
    };

    fetch(`/carriers/${viewCarrier}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editCarrier),
    })
      .then((res) => res.json)
      .then(setCarrierInfo);
  }
  if (carrierInfo && carrierInfo.id != 30)
    // I added this functionality, if the carrier is unassigned (the model) I do not want that object to be able to be modified. So the edit form will not be rendered.
    return <h1>Under Construction</h1>;
}

import React from "react";
import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Container from "react-bootstrap/esm/Container";

function Map({ individualLoad }) {
  const [originLatLng, setOriginLatLng] = useState({});
  const [destinationLatLng, setDestinationLatLng] = useState({});

  const originAddress = individualLoad.stops[0].site_address.split("");
  const originCity = individualLoad.stops[0].site_city.split(" ");
  for (let i = 0; i < originAddress.length; i++) {
    if (originAddress[i] === " ") {
      originAddress[i] = "%20";
    }
  }
  for (let i = 0; i < originCity.length; i++) {
    if (originCity[i] === " ") {
      originAddress[i] = "%20";
    }
  }

  const origin = `${originAddress.join("")}%20${originCity.join("")}%20${
    individualLoad.stops[0].site_state
  }%20${individualLoad.stops[0].site_zip}`;

  const destinationAddress = individualLoad.stops[1].site_address.split("");
  const destinationCity = individualLoad.stops[1].site_city.split(" ");
  for (let i = 0; i < originAddress.length; i++) {
    if (destinationAddress[i] === " ") {
      destinationAddress[i] = "%20";
    }
  }
  for (let i = 0; i < destinationCity.length; i++) {
    if (destinationCity[i] === " ") {
      destinationAddress[i] = "%20";
    }
  }

  const destination = `${destinationAddress.join("")}%20${destinationCity.join(
    ""
  )}%20${individualLoad.stops[1].site_state}%20${
    individualLoad.stops[1].site_zip
  }`;

  const containerStyle = {
    width: "98vw",
    height: "400px",
  };

  const centerLat = (originLatLng.lat + destinationLatLng.lat) / 2;
  const centerLng = (originLatLng.lng + destinationLatLng.lng) / 2;

  const center = {
    lat: centerLat,
    lng: centerLng,
  };

  useEffect(() => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${origin}&key=AIzaSyC54Xv04BjwdUTZfIMI897dVZRVlCtgue0`
    )
      .then((res) => res.json())
      .then((res) => {
        setOriginLatLng(res.results[0].geometry.location);
        console.log(res.results[0].geometry.location);
      });
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${destination}&key=AIzaSyC54Xv04BjwdUTZfIMI897dVZRVlCtgue0`
    )
      .then((res) => res.json())
      .then((res) => {
        setDestinationLatLng(res.results[0].geometry.location);
        console.log(res.results[0].geometry.location);
      });
  }, [individualLoad]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyC54Xv04BjwdUTZfIMI897dVZRVlCtgue0">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={4}>
        <Marker position={originLatLng} />
        <Marker position={destinationLatLng} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
// export default Map;

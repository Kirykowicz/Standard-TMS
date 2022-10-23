import React from "react";
import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Map({ individualLoad }) {
  const [originLatLng, setOriginLatLng] = useState({});

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

  const destination = individualLoad.stops[0];
  const origin = `${originAddress.join("")}%20${originCity.join("")}%20${
    individualLoad.stops[0].site_state
  }%20${individualLoad.stops[0].site_zip}`;

  const containerStyle = {
    width: "100vw",
    height: "400px",
  };

  const center = {
    lat: 41.8781,
    lng: -87.6298,
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
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyC54Xv04BjwdUTZfIMI897dVZRVlCtgue0">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker key="1" position={{ lat: 41.8781, lng: -87.6298 }} />
        <Marker key="2" position={originLatLng} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);

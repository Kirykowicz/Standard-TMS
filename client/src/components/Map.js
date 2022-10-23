import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Map({ individualLoad }) {
  const origin = individualLoad.stops[0];
  const destination = individualLoad.stops[0];

  const containerStyle = {
    width: "100vw",
    height: "400px",
  };

  const center = {
    lat: 41.8781,
    lng: -87.6298,
  };

  //   fetch(
  //     `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyC54Xv04BjwdUTZfIMI897dVZRVlCtgue0`
  //   )
  //     .then((res) => res.json())
  //     .then((res) => console.log(res.results[0].geometry.location));

  return (
    <LoadScript googleMapsApiKey="AIzaSyC54Xv04BjwdUTZfIMI897dVZRVlCtgue0">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker key="1" position={{ lat: 41.8781, lng: -87.6298 }} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);

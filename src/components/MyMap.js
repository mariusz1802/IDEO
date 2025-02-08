import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const apiKey = process.env.GATSBY_API_KEY;

console.log("API Key: ", apiKey);

const MyMap = (props) => {
  return (
    <Map
      google={props.google}
      zoom={16}
      style={mapStyles}
      initialCenter={{
        lat: 50.671119,
        lng: 16.605582,
      }}
    >
      <Marker position={{ lat: 50.671119, lng: 16.605582 }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: apiKey,
  language: "pl",
})(MyMap);

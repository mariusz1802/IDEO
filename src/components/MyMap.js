import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

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
  apiKey: "AIzaSyCRWb80QAGpOV4CYshKTH91uFZu2Pb0nZg",
  language: "pl",
})(MyMap);

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
      zoom={12}
      style={mapStyles}
      initialCenter={{
        lat: 52.2298, // Warszawa (możesz zmienić)
        lng: 21.0122,
      }}
    >
      <Marker position={{ lat: 52.2298, lng: 21.0122 }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCRWb80QAGpOV4CYshKTH91uFZu2Pb0nZg",
})(MyMap);

import GoogleMapReact from "google-map-react";
import {Marker} from "google-map-react"
import useGeolocation from "../../utils/hooks/useGeolocation";

export default function Map() {
  const currentPosition = useGeolocation();

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB480SbxWwFx84obwsruZkCeLBIgJOcEVY" }}
        center={currentPosition}
        defaultZoom={13}
      ></GoogleMapReact>
    </div>
  );
}

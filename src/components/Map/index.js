import { useState, useEffect } from "react";

import GoogleMapReact from "google-map-react";

export default function Map() {
  function useGeolocation() {
    const [currentPosition, setCurrentPosition] = useState();

    useEffect(() => {
      if (navigator.geolocation) {
        try {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const currentPosition = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              setCurrentPosition(currentPosition);
            },
            (error) => {
              console.log(error.message);
            }
          );
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("Geolocation is not supported by this browser");
        const enableLocationServicesUrl =
          "https://www.example.com/location-services";
        const message = `Please enable location services by going to ${enableLocationServicesUrl} and allowing the browser to access your location`;
        alert(message);
      }
    }, []);

    return currentPosition;
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB480SbxWwFx84obwsruZkCeLBIgJOcEVY" }}
        defaultCenter={{ lat: 39.6766, lng: -104.9619 }}
        defaultZoom={13}
      ></GoogleMapReact>
    </div>
  );
}

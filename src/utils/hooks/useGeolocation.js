import { useState, useEffect } from "react";

export default function useGeolocation() {
  const [currentPosition, setCurrentPosition] = useState();

  useEffect(() => {
    const fetchGeolocation = async () => {
      try {
        const response = await fetch("https://api.ipgeolocation.com/ipgeo");
        if (response.ok) {
          const data = await response.json();
          const currentPosition = {
            lat: data.latitude,
            lng: data.longitude,
          };
          setCurrentPosition(currentPosition);
        } else {
          throw new Error("Failed to fetch geolocation data");
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    if (navigator.geolocation) {
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
          fetchGeolocation(); // Fallback to IP geolocation
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser");
      fetchGeolocation(); // Fallback to IP geolocation
    }
  }, []);

  return currentPosition;
}

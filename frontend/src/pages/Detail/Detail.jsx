import React from "react";
import { useLocation } from "react-router-dom";
import Alert from "../../components/Alert/Alert";
import Nav from "../../components/Nav/Nav";

// google map
import { useState, useEffect } from "react";
import {
  GoogleMap,
  MarkerF,
  DirectionsRenderer,
  useJsApiLoader,
} from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const defaultCenter = {
  lat: -3.745,
  lng: -38.523,
};

const libraries = ["places"];

const Detail = () => {
  const { state } = useLocation();

  // google map
  const [currentLocation, setCurrentLocation] = useState(defaultCenter);
  const [destinationAddress, setDestinationAddress] = useState("");
  const [directions, setDirections] = useState(null);
  const [travelMode, setTravelMode] = useState("DRIVING");
  const [duration, setDuration] = useState(""); // State to store the trip duration
  const [transitDetails, setTransitDetails] = useState([]);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAP,
    libraries,
  });

  //   setDestinationAddress(state.location);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      ({ coords }) => {
        setCurrentLocation({
          lat: coords.latitude,
          lng: coords.longitude,
        });
      },
      (error) => console.error("Geolocation error:", error),
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  useEffect(() => {
    setDestinationAddress(state.location);
  }, []);

  useEffect(() => {
    if (!isLoaded || !destinationAddress) return;

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: currentLocation,
        destination: destinationAddress,
        travelMode: google.maps.TravelMode[travelMode],
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
          const route = result.routes[0];
          setDuration(route.legs[0].duration.text); // Extracting the duration from the first leg of the journey

          const newTransitDetails = route.legs[0].steps
            .filter((step) => step.travel_mode === "TRANSIT")
            .map((step) => ({
              departureStop: step.transit.departure_stop.name,
              arrivalStop: step.transit.arrival_stop.name,
              line: step.transit.line.short_name || step.transit.line.name,
              vehicleType: step.transit.line.vehicle.type,
              departureTime: step.transit.departure_time.text,
              arrivalTime: step.transit.arrival_time.text,
              numStops: step.transit.num_stops,
            }));
          setTransitDetails(newTransitDetails);
        } else {
          console.error("Failed to fetch directions:", status);
        }
      }
    );
  }, [isLoaded, destinationAddress, travelMode, currentLocation]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <Alert></Alert>
      <Nav></Nav>
      <div>
        <form onSubmit={handleSubmit}>
          {/* <input
            type="text"
            placeholder="Enter destination"
            value={destinationAddress}
            onChange={(e) => setDestinationAddress(e.target.value)}
          /> */}
          <select
            value={travelMode}
            onChange={(e) => setTravelMode(e.target.value)}
          >
            <option value="DRIVING">Driving</option>
            <option value="WALKING">Walking</option>
            <option value="BICYCLING">Bicycling</option>
            <option value="TRANSIT">Transit</option>
          </select>
          <button type="submit">Get Directions</button>
        </form>
        {duration && <p>Estimated travel time: {duration}</p>}
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentLocation}
          zoom={10}
        >
          <MarkerF position={currentLocation} />
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
        <div>
          {transitDetails.map((detail, index) => (
            <div key={index}>
              <p>Line: {detail.line}</p>
              <p>Vehicle Type: {detail.vehicleType}</p>
              <p>
                From: {detail.departureStop} at {detail.departureTime}
              </p>
              <p>
                To: {detail.arrivalStop} at {detail.arrivalTime}
              </p>
              <p>Number of Stops: {detail.numStops}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Detail;

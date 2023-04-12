import React from "react";
import Map from "../Map";

const Contact = () => {
  const businessLocation = { lat: 37.7749, lng: -122.4194 };
  const zoomLevel = 13;

  return (
    <div>
      <h1>Contact Us</h1>
      <Map location={businessLocation} zoomLevel={zoomLevel} />
    </div>
  );
};

export default Contact;

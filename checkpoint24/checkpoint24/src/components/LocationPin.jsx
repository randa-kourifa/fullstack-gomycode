import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const LocationPin = ({ text }) => (
  <div className="pin">
    <FaMapMarkerAlt className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

export default LocationPin;

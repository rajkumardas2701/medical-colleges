import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = {
    height: '40vh',
    width: '100%',
    border: '2px solid rgba(41, 29, 29, 0.856)',
    borderRadius: '10px',
  };

  const defaultCenter = {
    lat: 19.06822195452735,
    lng: 72.8351649271375,
  };

  const API_KEY = process.env.REACT_APP_API_KEY;

  return (
    <LoadScript
      googleMapsApiKey={API_KEY}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export default Map;

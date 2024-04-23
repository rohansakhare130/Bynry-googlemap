// src/components/Map.js
import React, { useState } from 'react';
import { GoogleMap, Marker, InfoWindow, LoadScript } from '@react-google-maps/api';

const Map = ({ center, profiles, selectedProfile, onSelectProfile }) => {
  const [mapLoading, setMapLoading] = useState(true);
  const [mapError, setMapError] = useState(null); // State to handle map loading errors

  const handleMapLoadError = map =>{
    if (!map) {
      setMapError("Failed to load map. Please try again later.");
    } else {
      setMapLoading(false); // Map is loaded
    }
  };

  return (
    <div className="map-container">
    {mapError ? (
      <div className="error-message">{mapError}</div>
    ) : (
      <LoadScript 
      googleMapsApiKey="AIzaSyCEQd8UvRrJZZIxHG4xlIdub3HmdYrEWJE"
      onLoadError={handleMapLoadError}
      >
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '600px' }}
          center={center}
          zoom={10}
          onClick={() => onSelectProfile(null)} // Deselect profile on map click
        >
          {profiles.map(profile => (
            <Marker
              key={profile.id}
              position={{ lat: profile.lat, lng: profile.lng }}
              onClick={() => onSelectProfile(profile)}
            >
              {selectedProfile === profile && (
                <InfoWindow onCloseClick={() => onSelectProfile(null)}>
                  <div>
                    <h3>{profile.name}</h3>
                    <p>{profile.address}</p>
                    {/* Add more details if needed */}
                  </div>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      </LoadScript>
    )}
    </div>
  );
};


export default Map;

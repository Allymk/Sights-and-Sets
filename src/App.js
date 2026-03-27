import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerImg from './assets/marker.png';

const customIcon = L.icon({
  iconUrl: markerImg,      // the image you imported
  iconSize: [40, 40],      // size of the icon
  iconAnchor: [20, 40],    // point that represents the marker's location
  popupAnchor: [0, -40]    // where popups appear relative to the icon
});

function App() {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
         <Marker position={[51.505, -0.09]} icon={customIcon}>
        <Popup>Custom marker!</Popup>
      </Marker>
      </MapContainer>
    </div>
  );
}

export default App;


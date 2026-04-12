import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerImg from './assets/marker.png';
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import "./App.css";

const customIcon = L.icon({
  iconUrl: markerImg,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

function App() {
  const [searchType, setSearchType] = useState('');
  //const [searchText, setSearchText] = useState('');

  // const handleSearch = () => {
  //   if (!searchType) return;
  //   console.log('search type:', searchType);
  //   console.log('search text:', searchText);
  // };

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

      <div className="search-container">
        <FormControl fullWidth required sx={{ mb: 2 }}>
          <InputLabel id="search-type-label">Search By</InputLabel>
          <Select
            labelId="search-type-label"
            id="search-type"
            value={searchType}
            label="Search By"
            onChange={(e) => setSearchType(e.target.value)}
          >
            <MenuItem value="movie">Movie</MenuItem>
            <MenuItem value="location">Location</MenuItem>
          </Select>
        </FormControl>
        
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
    </div>    
  );
}

export default App;


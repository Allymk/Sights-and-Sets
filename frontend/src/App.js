import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerImg from './assets/marker.png';
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import "./App.css";

const customIcon = L.icon({
  iconUrl: markerImg,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

function App() {
  const [searchType, setSearchType] = useState('');
  const [searchText, setSearchText] = useState('');
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [films, setFilms] = useState([]);

  const handleSearch = async () => {
  if (!searchText) return;

  try {
    const res = await fetch(
      `http://localhost:8080/movies/search?filmTitle=${encodeURIComponent(searchText)}`
    );

    const data = await res.json();
    console.log("Results:", data);

    // later: store in state and show markers
  } catch (err) {
    console.error("Error fetching movies:", err);
  }
};

 useEffect(() => {
    fetch("http://localhost:8080/movies")
      .then(res => res.json())
      .then(data => {
        console.log("Movies from backend:", data);
        setFilms(data);
      })
      .catch(err => console.error("Error fetching movies:", err));
  }, []);

  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>

      {/* MAP */}
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Example marker */}
        {/* <Marker
          position={[51.505, -0.09]}
          icon={customIcon}
          eventHandlers={{
            click: () => setSelectedFilm({
              title: "Example Movie",
              location: "London"
            })
          }}
        >
          <Popup>Click me</Popup>
        </Marker> */}
        {films.map((film) => {
          if (!film.latitude || !film.longitude) return null;

          return (
            <Marker
              key={film.id}
              position={[
                Number(film.latitude),
                Number(film.longitude)
              ]}
              icon={customIcon}
              eventHandlers={{
                click: () => setSelectedFilm(film)
              }}
            >
              <Tooltip>{film.filmTitle}</Tooltip>
              <Popup>
                <div>
                  <h3>Movie Title</h3>
                  <p>Release Year: 2000</p>
                  <p>Location:</p>
                  <p>Description</p>
                </div>
              </Popup>
            </Marker>
          );
        })}

      </MapContainer>

      {/* SIDEBAR */}
      {selectedFilm && (
        <div className="sidebar">
          <button onClick={() => setSelectedFilm(null)}>Close</button>
          <h2>{selectedFilm.filmTitle}</h2>
          <p>{selectedFilm.city}, {selectedFilm.country}</p>
        </div>
      )}

      {/* SEARCH UI */}
      <div className="search-container">
        <FormControl fullWidth required sx={{ mb: 2 }}>
          <InputLabel>Search By</InputLabel>
          <Select
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
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
      </div>

    </div>
  );
}

export default App;
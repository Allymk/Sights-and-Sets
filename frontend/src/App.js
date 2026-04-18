import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerImg from './assets/marker.png';
import TextField from "@mui/material/TextField";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Card,
  CardContent,
  Typography,
  CardMedia,
  IconButton
} from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif",

    h6: {
      fontWeight: 600,
      fontSize: "1.5rem"
    },

    body1: {
      fontSize: "1.1rem"
    },

    body2: {
      fontSize: "1.5rem"
    }
  }
});

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
  const [searchResult, setSearchResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSearch = async () => {
  if (!searchText) {
    console.log("ENTER SOME TEXT");
    return;
  }
  if (!searchType) {
    console.log("ENTER A TYPE");
    return;
  }
    

  if(searchType === "movie") {
    try {
    const res = await fetch(
      `http://localhost:8080/movies/searchById?filmTitle=${encodeURIComponent(searchText)}`
    );

    const data = await res.json();
    console.log("Results:", data);

    // later: store in state and show markers
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  } else {
    console.log("searching by location");
    try {
    const res = await fetch(
      `http://localhost:8080/movies/searchByLocation?location=${encodeURIComponent(searchText)}`
    );

    const data = await res.json();
    console.log("Results:", data);

    // later: store in state and show markers
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  }
  
};

  useEffect(() => {
    fetch("http://localhost:8080/movies")
      .then(res => res.json())
      .then(data => setFilms(data))
      .catch(err => console.error("Error fetching movies:", err));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: '100vh', width: '100%', position: 'relative' }}>

      {/* MAP */}
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

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
              {/* <Popup>
                <div>
                  <h3>Movie Title</h3>
                  <p>Release Year: 2000</p>
                  <p>Location:</p>
                  <p>Description</p>
                </div>
              </Popup> */}
            </Marker>
          );
        })}

      </MapContainer>

        {/* SIDEBAR */}
        {selectedFilm && (
          <Card
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              width: 600,
              maxHeight: "92vh",
              overflowY: "auto",
              zIndex: 1000,
              borderRadius: 4,
              boxShadow: 8,
              p: 3, // 🔥 more breathing room
              display: "flex",
              flexDirection: "column",
              gap: 2
            }}
          >
            <IconButton
              onClick={() => setSelectedFilm(null)}
              sx={{ position: "absolute", top: 8, right: 8 }}
            >
              <CloseIcon />
            </IconButton>

            {selectedFilm.info?.imageUrl && (
              <CardMedia
                component="img"
                height="180"
                image={selectedFilm.info.imageUrl}
                alt={selectedFilm.filmTitle}
              />
            )}

            <CardContent>
              <Typography variant="h6" gutterBottom>
                {selectedFilm.filmTitle}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {selectedFilm.city}, {selectedFilm.country}
              </Typography>

              <div style={{ marginTop: "10px" }} />

              {selectedFilm.info && (
                <>
                  <Typography variant="body2">
                    <strong>Year:</strong> {selectedFilm.info.releaseYear}
                  </Typography>

                  <Typography variant="body2">
                    <strong>Director:</strong> {selectedFilm.info.director}
                  </Typography>

                  <Typography variant="body2">
                    <strong>Genre:</strong> {selectedFilm.info.genre}
                  </Typography>

                  <Typography variant="body2">
                    <strong>Runtime:</strong> {selectedFilm.info.runtimeMinutes} min
                  </Typography>

                  <Typography variant="body2" sx={{ mt: 1 }}>
                    ⭐ {selectedFilm.info.rating}
                  </Typography>

                  <Typography variant="body2" sx={{ mt: 2 }}>
                    {selectedFilm.info.description}
                  </Typography>
                </>
              )}
            </CardContent>
          </Card>
        )}

        {/* SEARCH UI */}
<div
  style={{
    position: "absolute",
    top: 20,
    left: "50%",
    transform: "translateX(-50%)",
    width: 500,
    zIndex: 1000
  }}
>
  <Card
    sx={{
      p: 2,
      borderRadius: 4,
      boxShadow: 6,
      backdropFilter: "blur(10px)",
      backgroundColor: "rgba(255,255,255,0.9)"
    }}
  >
    {/* Row layout */}
    <div style={{ display: "flex", gap: 12 }}>

      {/* Dropdown */}
      <FormControl sx={{ minWidth: 140 }}>
        <InputLabel>Type</InputLabel>
        <Select
          value={searchType}
          label="Type"
          onChange={(e) => setSearchType(e.target.value)}
        >
          <MenuItem value="movie">Movie</MenuItem>
          <MenuItem value="location">Location</MenuItem>
        </Select>
      </FormControl>

      {/* Search field */}
      <TextField
        variant="outlined"
        placeholder="Search..."
        fullWidth
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {/* Button */}
      <Button
        variant="contained"
        onClick={handleSearch}
        sx={{
          px: 3,
          borderRadius: 2,
          fontWeight: 600
        }}
      >
        Search
      </Button>
    </div>
  </Card>
</div>

      </div>
    </ThemeProvider>
  );
}

export default App;
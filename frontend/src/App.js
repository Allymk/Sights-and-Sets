import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
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
  IconButton,
  Alert
} from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";

const markerImg = "/images/marker.png";

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
      fontSize: "1rem"
    }
  }
});

const customIcon = L.icon({
  iconUrl: markerImg,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

function FlyToLocation({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 10, { duration: 1.5 });
    }
  }, [position, map]);

  return null;
}

function App() {
  const [searchType, setSearchType] = useState('');
  const [searchText, setSearchText] = useState('');
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [films, setFilms] = useState([]);
  const [mapPosition, setMapPosition] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchAllMovies = async () => {
    try {
      const res = await fetch("http://localhost:8080/movies");
      const data = await res.json();
      setFilms(data);
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  };

  const handleReset = async () => {
    await fetchAllMovies();
    setSearchText("");
    setSearchType("");
    setSelectedFilm(null);
    setErrorMessage(null);
    setMapPosition([40.4535, -79.9742]);
  };

  const handleSearch = async () => {
    if (!searchText || !searchType) {
      setErrorMessage("Please enter search text and type.");
      return;
    }

    try {
      const url =
        searchType === "movie"
          ? `http://localhost:8080/movies/searchById?filmTitle=${encodeURIComponent(searchText)}`
          : `http://localhost:8080/movies/searchByLocation?location=${encodeURIComponent(searchText)}`;

      const res = await fetch(url);
      const data = await res.json();

      const results = Array.isArray(data) ? data : (data ? [data] : []);

      if (results.length === 0) {
        setErrorMessage("No results found.");
        setFilms([]);
        setSelectedFilm(null);
        return;
      }

      setErrorMessage(null);
      setFilms(results);
      setSelectedFilm(null);

      if (results[0].latitude && results[0].longitude) {
        setMapPosition([
          Number(results[0].latitude),
          Number(results[0].longitude)
        ]);
      }

    } catch (err) {
      console.error("Error fetching movies:", err);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    fetchAllMovies();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: '100vh', width: '100%', position: 'relative' }}>

        <MapContainer
          center={[51.505, -0.09]}
          zoom={3}
          minZoom={3}
          maxZoom={18}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {mapPosition && <FlyToLocation position={mapPosition} />}

          {Array.isArray(films) && films.map((film) => {
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
                  click: async () => {
                    const position = [
                      Number(film.latitude),
                      Number(film.longitude)
                    ];

                    setMapPosition(position);

                    try {
                      const res = await fetch(
                        `http://localhost:8080/movie-info/${film.id}`
                      );

                      const info = await res.json();

                      setSelectedFilm({
                        ...film,
                        info
                      });
                      console.log(info);

                    } catch (err) {
                      console.error("Error fetching movie info:", err);
                      setSelectedFilm(film);
                    }
                  }
                }}
              >
                <Tooltip>{film.filmTitle}</Tooltip>
              </Marker>
            );
          })}
        </MapContainer>

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
              p: 3,
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
                image={`/images/${selectedFilm.info.imageUrl}`}
                alt={selectedFilm.filmTitle}
                sx={{
                width: "100%",
                height: 350,
                objectFit: "cover"
              }}
            />
            )}

            <CardContent>
              <Typography variant="h6" gutterBottom>
                {selectedFilm.filmTitle}
              </Typography>

              <Typography variant="body1" color="text.secondary">
                {selectedFilm.city}, {selectedFilm.country}
              </Typography>

              <div style={{ marginTop: "10px" }} />

              {selectedFilm.info && (
                <>
                  <Typography variant="body1">
                    <strong>Year:</strong> {selectedFilm.info.releaseYear}
                  </Typography>

                  <Typography variant="body1">
                    <strong>Director:</strong> {selectedFilm.info.director}
                  </Typography>

                  <Typography variant="body1">
                    <strong>Genre:</strong> {selectedFilm.info.genre}
                  </Typography>

                  <Typography variant="body1">
                    <strong>Runtime:</strong> {selectedFilm.info.runtimeMinutes} min
                  </Typography>

                  <Typography variant="h6" sx={{ mt: 1 }}>
                    ⭐ {selectedFilm.info.rating}
                  </Typography>

                  <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6 }}>
                    {selectedFilm.info.description}
                  </Typography>
                </>
              )}
            </CardContent>
          </Card>
        )}

        <div
          style={{
            position: "absolute",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            width: 520,
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
            {errorMessage && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {errorMessage}
              </Alert>
            )}

            <div style={{ display: "flex", gap: 10 }}>
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

              <TextField
                variant="outlined"
                placeholder="Search..."
                fullWidth
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
              />

              <Button
                variant="contained"
                onClick={handleSearch}
                sx={{ px: 3, borderRadius: 2, fontWeight: 600 }}
              >
                Search
              </Button>

              <Button
                variant="outlined"
                onClick={handleReset}
                sx={{ borderRadius: 2 }}
              >
                Show All
              </Button>
            </div>
          </Card>
        </div>

      </div>
    </ThemeProvider>
  );
}

export default App;
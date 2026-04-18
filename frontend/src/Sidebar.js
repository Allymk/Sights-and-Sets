function Sidebar({ selectedFilm, setSelectedFilm }) {
  if (!selectedFilm) return null;

  return (
    <div className="sidebar">
      <button onClick={() => setSelectedFilm(null)}>Close</button>
      <h2>{selectedFilm.title}</h2>
      <p>{selectedFilm.location}</p>
    </div>
  );
}

export default Sidebar;
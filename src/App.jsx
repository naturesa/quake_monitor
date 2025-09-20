import { useState } from "react";
import { useEarthquakeData } from "./hooks/useEarthquakeData";
import EarthquakeList from "./components/EarthquakeList";
import EarthquakeMap from "./components/EarthquakeMap";
import "./App.css";

const API_URL =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

function App() {
  const { data, loading, error } = useEarthquakeData(API_URL);
  const [selected, setSelected] = useState(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <EarthquakeList
        earthquakes={data}
        selected={selected}
        onSelect={setSelected}
      />
      <EarthquakeMap earthquakes={data} selected={selected} />
    </div>
  );
}

export default App;
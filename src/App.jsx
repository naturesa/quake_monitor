import { useState } from "react";
import { useEarthquakeData } from "./hooks/useEarthquakeData";
import EarthquakeList from "./components/EarthquakeList";
import EarthquakeMap from "./components/EarthquakeMap";
import "./index.css";

const API_URL =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

function App() {
  const { data, loading, error } = useEarthquakeData(API_URL);
  const [selected, setSelected] = useState(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <header
        style={{
          padding: "12px",
          background: "#f8f8f8",
          borderBottom: "1px solid #ccc",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "30px", color: "blue", }}>Quake monitor</h1>
        <small>Data Source: USGS Earthquake API</small>
      </header>

      <div style={{ flex: 1, display: "flex", minHeight: 0 }}>

        <div
          style={{
            flex: 1,
            minWidth: 250,
            borderRight: "1px solid #ccc",
            overflowY: "auto",
          }}
        >
          <EarthquakeList
            earthquakes={data}
            selected={selected}
            onSelect={setSelected}
          />
        </div>

        <div style={{ flex: 2, minHeight: 0 }}>
          <EarthquakeMap earthquakes={data} selected={selected} />
        </div>
      </div>
    </div>
  );
}

export default App;
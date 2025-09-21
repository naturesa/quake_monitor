import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { getMagnitudeIcon } from "../utils/icons";

// Move map when earthquake is selected
function MapUpdater({ selected }) {
  const map = useMap();
  useEffect(() => {
    if (selected) {
      const [lon, lat] = selected.geometry.coordinates;
      map.setView([lat, lon], 5);
    }
  }, [selected, map]);
  return null;
}

export default function EarthquakeMap({ earthquakes, selected }) {
  const position = [20, 0];

  return (
    <MapContainer
      center={position}
      zoom={2}
      style={{ width: "100%", height: "100%" }} 
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {earthquakes.map((eq) => (
        <Marker
          key={eq.id}
          position={[eq.geometry.coordinates[1], eq.geometry.coordinates[0]]}
          icon={getMagnitudeIcon(eq.properties.mag)}
        >
          <Popup>
            {eq.properties.place} — Mag {eq.properties.mag} <br />
            {new Date(eq.properties.time).toLocaleString()}
          </Popup>
        </Marker>
      ))}

      <MapUpdater selected={selected} />
      <ResizeMap />
    </MapContainer>
  );
}
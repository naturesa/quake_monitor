import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";
import { defaultIcon, selectedIcon } from "../utils/icons";

const icon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Helper component to move the map when an earthquake is selected
function MapUpdater({ selected }) {
  const map = useMap();

  useEffect(() => {
    if (selected) {
      const [lon, lat] = selected.geometry.coordinates;
      map.setView([lat, lon], 5); // zoom in on selected
    }
  }, [selected, map]);

  return null;
}

export default function EarthquakeMap({ earthquakes, selected }) {
  const position = [20, 0];

  return (
    <div style={{ flex: 2 }}>
      <MapContainer center={position} zoom={2} style={{ height: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
        {earthquakes.map((eq) => (
          <Marker
            key={eq.id}
            position={[
              eq.geometry.coordinates[1],
              eq.geometry.coordinates[0],
            ]}
            icon={selected?.id === eq.id ? selectedIcon : defaultIcon}
          >
            <Popup>
              {eq.properties.place} — Mag {eq.properties.mag}
            </Popup>
          </Marker>
        ))}

        <MapUpdater selected={selected} />
      </MapContainer>
    </div>
  );
}

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Returns a Leaflet icon based on magnitude and selection
function getMagnitudeIcon(mag, isSelected = false) {
  let color = "blue";
  if (mag >= 5) color = "red";
  else if (mag >= 3) color = "gold";
  else color = "yellow";

  const size = isSelected ? [45, 70] : [25, 41]; 

  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
    iconSize: size,
    iconAnchor: [size[0] / 2, size[1]],
    popupAnchor: [1, -34],
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41],
  });
}

// Returns color for magnitude text
function getMagnitudeColor(mag) {
  if (mag >= 5) return "red";
  if (mag >= 3) return "orange";
  return "green";
}

// Moves map when an earthquake is selected
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

// Forces Leaflet to recalc size after mount
function ResizeMap() {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [map]);
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
          icon={getMagnitudeIcon(eq.properties.mag, selected?.id === eq.id)}
        >
          <Popup>
            <div>
              <strong>{eq.properties.place}</strong> —{" "}
              <span style={{ color: getMagnitudeColor(eq.properties.mag), fontWeight: "600" }}>
                Mag {eq.properties.mag}
              </span>
              <div style={{ fontSize: "0.8em", color: "#555", marginTop: "4px" }}>
                {new Date(eq.properties.time).toLocaleString()}
              </div>
            </div>
          </Popup>
        </Marker>
      ))}

      <MapUpdater selected={selected} />
      <ResizeMap />
    </MapContainer>
  );
}

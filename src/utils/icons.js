import L from "leaflet";

export function getMagnitudeIcon(mag) {
  let color = "blue";
  if (mag >= 5) color = "red";
  else if (mag >= 3) color = "orange";
  else color = "yellow";

  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41],
  });
}

import L from "leaflet";

export const defaultIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png",
  iconSize: [25, 41],     // normal size
  iconAnchor: [12, 41],   // point of the icon which will correspond to marker's location
});

export const selectedIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
  iconSize: [35, 55],     // bigger to stand out
  iconAnchor: [17, 55],   
  className: "selected-marker", // optional CSS styling
});

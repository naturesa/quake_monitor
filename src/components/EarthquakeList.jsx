function getMagnitudeColor(mag) {
  if (mag >= 5) return "red";
  if (mag >= 3) return "orange";
  return "green";
}

export default function EarthquakeList({ earthquakes, selected, onSelect }) {
  return (
    <div style={{ padding: "8px" }}>
      <h2 style={{ fontSize: "1.5em", fontWeight: "700", color: "#333", marginBottom: "12px", paddingLeft: "12px" }}>
        Earthquakes
      </h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {earthquakes.map((eq) => (
          <li
            key={eq.id}
            onClick={() => onSelect(eq)}
            style={{
              color: "#4f4f4f",
              padding: "12px",
              marginBottom: "8px",
              borderRadius: "8px",
              cursor: "pointer",
              background: selected?.id === eq.id ? "#dcefff" : "#f9f9f9",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              transition: "background 0.2s, transform 0.1s",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <div>
              <strong>{eq.properties.place}</strong> —{" "}
              <span style={{ color: getMagnitudeColor(eq.properties.mag) }}>
                Mag {eq.properties.mag}
              </span>
            </div>
            <div style={{ fontSize: "0.8em", color: "#555" }}>
              {new Date(eq.properties.time).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

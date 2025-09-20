export default function EarthquakeList({ earthquakes, selected, onSelect }) {
    return (
      <div style={{ flex: 1, overflowY: "auto", borderRight: "1px solid #ccc" }}>
        <h2>Earthquakes</h2>
        <ul>
          {earthquakes.map((eq) => (
            <li
              key={eq.id}
              style={{
                padding: "8px",
                cursor: "pointer",
                background: selected?.id === eq.id ? "#eee" : "white",
              }}
              onClick={() => onSelect(eq)}
            >
              <strong>{eq.properties.place}</strong> — {eq.properties.mag} 🌍
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
export default function EarthquakeList({ earthquakes, selected, onSelect }) {
  return (
    <div style={{ padding: "8px" }}>
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
            <strong>{eq.properties.place}</strong> — Mag {eq.properties.mag} <br />
            {new Date(eq.properties.time).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

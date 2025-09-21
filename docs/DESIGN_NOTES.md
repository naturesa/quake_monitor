Design Notes

Tech Choices

Used React for state management and component-based structure.

Chose Leaflet with react-leaflet for the map because it’s simple and works well with React.

Layout

Header at the top with title and data source.

List of earthquakes on the left (about 1/3 width) and map on the right (about 2/3).

Both list and map scroll independently to keep the interface usable.

Visual Cues

Marker colors match earthquake magnitude: green (<3), orange (3–5), red (>5).

Clicking a list item highlights the corresponding marker.

Magnitude values in the list also use the same colors.

Data Handling

Fetches real-time data from the USGS API.

Selected earthquake stored in state to control map highlighting.

Styling

Minimal, functional styling for clarity.

Responsive design not fully implemented yet — mostly works on desktop.
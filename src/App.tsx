import React, { useEffect } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// note: https://github.com/Leaflet/Leaflet/issues/4968#issuecomment-264311098
let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const App: React.FC = () => {
  useEffect(() => {
    // note: https://leafletjs.com/
    const map = L.map('mapContainer').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  }, []);
                                                                                                       
  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <div id="mapContainer" style={{ width: '100vw', height: '100vh' }} />
    </div>
  );
}

export default App;

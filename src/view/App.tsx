import { useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "./App.css";

function App() {
  function LocationMarker() {
    const [position, setPosition] = useState<any>(null);
    const map = useMapEvents({
      click(e) {
        /* map.locate(); */
        console.log(e.latlng.lat);
        console.log(e.latlng.lng);
        setPosition(e.latlng);
      } /* ,
      locationfound(e) {
        alert("You clicked the map at " + e.latlng);
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      }, */,
    });

    console.log(map.getBounds());

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  return (
    <div className="App">
      <h1>hello starting</h1>
      <div className="map-container">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <LocationMarker />
        </MapContainer>
      </div>
    </div>
  );
}

export default App;

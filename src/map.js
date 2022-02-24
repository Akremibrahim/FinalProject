import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";

function MyComponent() {
  const map = useMap()
  console.log('map center:', map.getCenter())
  return null
}

function Map({ countries, casesType, center, zoom }) {
  const map = useMap()
  console.log(center)
  // const mapBounds = map.fitBounds(center) 
  return (
    <div className="map">
      <MapContainer center={[50.5, 30.5]} zoom={13} >
        <MyComponent/>
        {/* <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)} */}
      </MapContainer>
    </div>
  );
}

export default Map;
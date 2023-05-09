import React, { useEffect } from "react";
import { useMap } from "react-leaflet";

function Recenter({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default Recenter;

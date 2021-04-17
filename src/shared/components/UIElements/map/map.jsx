import React from "react";

const Map = ({ location: { lat, lng } }) => {
  return (
    <div style={{ padding: "5px" }}>
      <iframe
        title="map"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        src={
          "https://maps.google.com/maps?q=" +
          lat.toString() +
          "," +
          lng.toString() +
          "&t=&z=15&ie=UTF8&iwloc=&output=embed"
        }
      ></iframe>
      <script
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=5a33be79e53caf0a07dfec499abf84b7b481f165"
      ></script>
    </div>
  );
};

export default Map;

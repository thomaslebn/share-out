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
        src={process.env.REACT_APP_GOOGLE_MAP}
      ></script>
    </div>
  );
};

export default Map;

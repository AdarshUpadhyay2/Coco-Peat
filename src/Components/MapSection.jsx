import React from "react";

const MapSection = () => {
  return (
    <div className="xs-map-sec py-12">
      <div className="xs-maps-wraper max-w-7xl mx-auto px-4">
        <div className="map relative overflow-hidden shadow-lg rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7961939265015!2d72.56852237531179!3d23.03125421600411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e845832f41463%3A0x5dd93372e6a8f8c4!2sKore%20International%20%22We%20grow%20Quality%2C%20We%20harvest%20Trust%22!5e0!3m2!1sen!2sin!4v1727685232558!5m2!1sen!2sin"
            width="100%"
            height="550"
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Google Map Location"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapSection;

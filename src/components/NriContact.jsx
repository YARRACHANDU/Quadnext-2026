import React, { useEffect } from "react";

export default function Contact() {
  const lat = 16.66327986299729;
  const lng = 80.73777642559249;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Contact Details */}

      {/* Map with Red Marker & Label */}
      <div style={{ width: "100%", height: "60vh", marginTop: 0 }}>
        <iframe
          title="Google Map Location"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(
            "NRI Institute of Technology"
          )}&hl=en&z=11&output=embed`}
          allowFullScreen
          style={{ border: 0, width: "100%", height: "100%" }}
        ></iframe>
      </div>
    </>
  );
}

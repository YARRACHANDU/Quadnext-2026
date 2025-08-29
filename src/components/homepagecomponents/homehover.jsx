import React, { useState } from "react";

export default function FancyLink() {
  const [hover, setHover] = useState(false);

  const cornerStyle = (pos) => ({
    position: "absolute",
    width: "5px",
    height: "3px",
    ...(pos === "tl" && { top: 0, left: 0, borderTop: "2px solid black", borderLeft: "2px solid black" }),
    ...(pos === "tr" && { top: 0, right: 0, borderTop: "2px solid black", borderRight: "2px solid black" }),
    ...(pos === "bl" && { bottom: 0, left: 0, borderBottom: "2px solid black", borderLeft: "2px solid black" }),
    ...(pos === "br" && { bottom: 0, right: 0, borderBottom: "2px solid black", borderRight: "2px solid black" }),
  });

  const wrapperStyle = {
    display: "inline-block",
    position: "relative",
    padding: "10px",
    textDecoration: "none",
    color: "black",
    fontSize: "18px",
  };

  return (
    <a
      href="#"
      style={wrapperStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      Hover Me
      {hover && (
        <>
          <span style={cornerStyle("tl")}></span>
          <span style={cornerStyle("tr")}></span>
          <span style={cornerStyle("bl")}></span>
          <span style={cornerStyle("br")}></span>
        </>
      )}
    </a>
  );
}

import React from "react";
import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    });
  }, []);

  return (
    <>
      <div
        className="cursor ring"
        style={{ left: position.x, top: position.y }}
      />
      <div
        className="cursor dot"
        style={{ left: position.x, top: position.y }}
      />
    </>
  );
}

export default CustomCursor;

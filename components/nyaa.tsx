"use client";

import React, { useEffect, useRef } from "react";

const NyanCatCursor: React.FC = () => {
  const nyanCatRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const nyanCat = nyanCatRef.current;
    if (!nyanCat) return;

    const moveNyanCat = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      nyanCat.style.left = x - nyanCat.width / 2 + "px";
      nyanCat.style.top = y - nyanCat.height / 2 + "px";
    };

    document.addEventListener("mousemove", moveNyanCat);

    return () => {
      document.removeEventListener("mousemove", moveNyanCat);
    };
  }, []);

  return (
    <img
      ref={nyanCatRef}
      height={80}
      width={80}
      src="/img/nyaa.gif"
      alt="Nyan Cat"
      style={{ position: "fixed", pointerEvents: "none", zIndex: 9999 }}
    />
  );
};

export default NyanCatCursor;

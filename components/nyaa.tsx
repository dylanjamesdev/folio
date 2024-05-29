"use client";

import React, { useEffect, useRef } from "react";

const NyanCatCursor: React.FC = () => {
  const nyanCatRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const nyanCat = nyanCatRef.current;
    if (!nyanCat) return;

    const moveNyanCat = (e: MouseEvent) => {
      nyanCat.style.left = e.pageX - nyanCat.width / 2 + "px";
      nyanCat.style.top = e.pageY - nyanCat.height / 2 + "px";
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
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette3.wikia.nocookie.net%2Ffantendo%2Fimages%2F9%2F9f%2FNyan_cat_animated.gif%2Frevision%2Flatest%3Fcb%3D20121125193107&f=1&nofb=1&ipt=e9d33430fa7034c2a9292998eccc20914a649770b795c296884670bd7068c8bf&ipo=images"
      alt="Nyan Cat"
      style={{ position: "fixed", pointerEvents: "none", zIndex: 9999 }}
    />
  );
};

export default NyanCatCursor;

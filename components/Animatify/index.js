import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";

export default function Animatify({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {children.length &&
        children.map((component, index) => (
          <span
            className="translate-y-0"
            key={`animatify-${index}`}
            data-aos="fade-up"
          >
            {component}
          </span>
        ))}
      {typeof children.length !== "number" && (
        <span className="translate-y-0" data-aos="fade-up">
          {children}
        </span>
      )}
    </>
  );
}

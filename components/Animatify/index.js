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
          <div key={`animatify-${index}`} data-aos="fade-up">
            {component}
          </div>
        ))}
      {typeof children.length !== "number" && (
        <div data-aos="fade-up">{children}</div>
      )}
    </>
  );
}

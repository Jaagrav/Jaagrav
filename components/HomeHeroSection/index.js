import { useEffect } from "react";

export default function HomeHeroSection() {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight / 3,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    return () => {
      try {
        startCanvas();
      } catch (e) {}
    };
  }, []);

  return (
    <div className="h-screen w-full relative">
      <div
        className="h-full w-full absolute bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(./assets/images/hero-section-bg.webp)` }}
      ></div>
      <canvas className="h-full w-full absolute" id="liquid-canvas"></canvas>
      <div className="absolute h-full w-full bg-gradient-to-b from-transparent to-bgColor translate-y-1 pointer-events-none"></div>
      <div className="absolute w-full h-full pointer-events-none">
        <div className="skew max-w-screen-xl absolute top-0 left-0 bottom-0 right-0 m-auto z-10 h-fit w-fit px-10 md:px-24">
          <div className="md:px-20">
            <span className="block text-[5rem] md:text-[6rem] text-border">
              UX Designer
            </span>
            <span className="block text-[5rem] md:text-[6rem] text-white">
              Jaagrav Seal
            </span>
            <span className="block text-[5rem] md:text-[6rem] text-border">
              Full Stack Developer
            </span>
            <span className="mt-2 block text-white text-xl leading-10">
              I am a very nice and humble front-end developer. I can design a
              website on figma, develop it using NextJS, and deploy it on
              Vercel. Well that’s what I did for this website, if you want to
              know more, keep scrolling.
              <br />
              <br />
              P.S. I am also a very good human being.
            </span>
          </div>
        </div>
      </div>
      {/* <span
        onClick={scrollDown}
        className="block w-full text-center text-white text-xl absolute bottom-16 pointer-events-auto cursor-pointer"
      >
        Scroll down
      </span> */}
      <script id="three-min-js" src="/assets/lib/three.min.js"></script>
      <script
        id="fluid-background-js"
        src="/assets/lib/fluid-background.js"
        onLoad={() => startCanvas()}
      ></script>
    </div>
  );
}

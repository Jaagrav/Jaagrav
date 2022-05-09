import { useEffect } from "react";

export default function HomeHeroSection() {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight / 3,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    try {
      canvas = null;
    } catch (e) {}
  }, []);

  return (
    <div className="h-screen w-full relative -mt-20 md:-mt-16">
      <div
        className="h-full w-full absolute bg-center bg-no-repeat bg-cover transition dark:duration-300 opacity-0 dark:opacity-100"
        style={{
          backgroundImage: `url(./assets/images/hero-section-bg-dark.webp)`,
        }}
      ></div>
      <div
        className="h-full w-full absolute bg-center bg-no-repeat bg-cover transition dark:duration-300 dark:opacity-0 opacity-100"
        style={{
          backgroundImage: `url(./assets/images/hero-section-bg-light.webp)`,
        }}
      ></div>
      <canvas className="h-full w-full absolute" id="liquid-canvas"></canvas>
      <div className="absolute h-1/4 w-full bg-gradient-to-b from-transparent transition duration-300 to-white translate-y-1 pointer-events-none dark:opacity-0 opacity-100 bottom-0"></div>
      <div className="absolute h-1/4 w-full bg-gradient-to-b from-transparent transition duration-300 to-bgColor translate-y-1 pointer-events-none opacity-0 dark:opacity-100 bottom-0"></div>
      <div className="absolute w-full h-full pointer-events-none">
        <div className="skew max-w-screen-xl absolute top-0 left-0 bottom-0 right-0 m-auto z-10 h-fit w-fit px-10 md:px-32">
          <div className="md:px-6">
            <span className="block text-[13vw] md:text-[6rem] text-border-thick">
              UX Designer
            </span>
            <span className="block text-[13vw] md:text-[6rem] text-lightTextColor dark:text-white">
              Jaagrav Seal
            </span>
            <span className="block text-[13vw] md:text-[6rem] text-border-thick">
              Full Stack Developer
            </span>
            <span className="mt-2 block text-lightTextColor dark:text-white text-xl leading-10 md:max-w-[58vw]">
              I am a very nice and humble full stack developer. I can design a
              website on figma, develop it using NextJS, TailwindCSS or Material
              UI, and deploy it on Vercel. Well that’s what I did for this
              website, if you want to know more, keep scrolling.
              <br />
              <br />
              P.S. I am also known as{" "}
              <span
                title="This is not a link dumbass, this is my other name."
                className="underline underline-offset-8 pointer-events-auto cursor-pointer"
              >
                Laes Vargaaj
              </span>
              .
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
    </div>
  );
}

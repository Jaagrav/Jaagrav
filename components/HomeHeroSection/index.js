import { useEffect } from "react";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

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
        <div className="skew absolute top-0 left-0 bottom-0 right-0 m-auto z-10 h-fit w-fit px-10">
          <div className="md:px-6">
            <span className="m-auto block text-2xl md:text-xl text-lightTextColor dark:text-white md:text-center">
              Hi {"I'm "}
              <span
                title="This is not a link fool."
                className="underline underline-offset-8 pointer-events-auto cursor-pointer text-pink dark:text-indigo"
              >
                Jaagrav Seal
              </span>
            </span>
            <span className="block text-[14vw] md:text-[7rem] text-lightTextColor dark:text-white md:text-center font-secondary max-w-[100vw] md:max-w-[80rem]">
              Building Websites, Products, Interfaces & Experiences
            </span>
            <span className="md:m-auto block text-lightTextColor dark:text-white text-2xl md:text-xl leading-10 md:text-center max-w-xl">
              I am a{" "}
              <span
                title="Still not a link."
                className="pointer-events-auto cursor-pointer text-pink dark:text-indigo"
              >
                Full Stack Developer
              </span>{" "}
              by profession, and a design enthusiast and learner by passion.
            </span>
            <div className="flex justify-center items-center gap-6 mt-6">
              <a
                className="text-lightTextColor dark:text-white text-4xl md:text-2xl w-fit inline pointer-events-auto"
                href="https://github.com/Jaagrav"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub />
              </a>
              <a
                className="text-lightTextColor dark:text-white text-4xl md:text-2xl w-fit inline pointer-events-auto"
                href="https://linkedin.com/in/jaagrav"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin />
              </a>
              <a
                className="text-lightTextColor dark:text-white text-4xl md:text-2xl w-fit inline pointer-events-auto"
                href="mailto:contact@jaagrav.in"
                target="_blank"
                rel="noreferrer"
              >
                <FiMail />
              </a>
            </div>
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

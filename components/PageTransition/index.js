import gsap from "gsap";

let playTransition = () => {
    if (window.location.pathname === "/home") startCanvas(1250);
    gsap.to(".page-transition", {
      ease: "power1.inOut",
      duration: 0.5,
      pointerEvents: "all",
      height: "100%",
      top: "unset",
      bottom: "0%",
    });
    gsap.to(".page-transition", {
      ease: "power1.inOut",
      duration: 0.5,
      delay: 1,
      pointerEvents: "all",
      height: "0%",
      top: "0%",
      bottom: "unset",
    });
  },
  startTransition = () => {
    startCanvas(500);
    gsap.to(".page-transition", {
      ease: "power1.inOut",
      duration: 0,
      pointerEvents: "all",
      height: "100%",
      top: "unset",
      bottom: "0%",
    });
    gsap.to(".page-transition", {
      ease: "power1.inOut",
      duration: 0.5,
      delay: 1,
      pointerEvents: "all",
      height: "0%",
      top: "0%",
      bottom: "unset",
    });
  },
  startCanvas = (duration) => {
    if (typeof window.startCanvas === "function") window.startCanvas();
    else setTimeout(() => startCanvas(duration), duration);
  };

export default function PageTransition() {
  return (
    <div className="page-transition fixed w-full z-40 overflow-hidden flex justify-center items-center bg-white dark:bg-bgColor">
      <img
        src="/assets/images/blur-ball-blue.webp"
        className="absolute m-auto inset-0 translate-x-1/4 "
      />
      <div className="my-name h-fit w-fit text-6xl text-lightTextColor dark:text-white absolute inset-0 m-auto z-50 whitespace-nowrap">
        Jaagrav <span className="text-border">Seal</span>
      </div>
      <img
        src="/assets/images/blur-ball-indigo.webp"
        className="absolute m-auto inset-0 -translate-x-1/4 "
      />
    </div>
  );
}

export { playTransition, startTransition };

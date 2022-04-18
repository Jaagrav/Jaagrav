import { useEffect } from "react";
import "../styles/globals.css";

// Importing Components
import { Header, Footer } from "../components";

import { ScrollerMotion, useScrollerMotion } from "scroller-motion";
import { useMotionValue } from "framer-motion";

import PageTransition, { startTransition } from "../components/PageTransition";

import { PageTransition as Transition } from "next-page-transitions";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Transition timeout={500} classNames="page-transition">
        <div className="h-fit w-full overflow-x-hidden">
          <PageTransition />
          <Header />
          <ScrollerMotion>
            <div className="scroll-animate h-fit w-full">
              <Content Component={Component} {...pageProps} />
              <Footer />
            </div>
          </ScrollerMotion>
        </div>
      </Transition>
      <style jsx global>{`
        .page-transition-enter-done .page-transition-cover {
          height: 0%;
          width: 100%;
          transition: 500ms;
        }
        .page-transition-enter-active .page-transition-cover {
          height: 100%;
          width: 100%;
          bottom: 0;
          transition: 500ms;
        }
        .page-transition-exit .page-transition-cover {
          bottom: 0;
          height: 100%;
          width: 100%;
          transition: 500ms;
        }
        .page-transition-exit-active .page-transition-cover {
          bottom: 0;
          height: 100%;
          width: 100%;
          transition: 500ms;
        }
      `}</style>
    </div>
  );
}

function Content({ Component, pageProps }) {
  const scroller = useScrollerMotion(),
    scrollY = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = scroller.y.onChange((v) => {
      scrollY.set(v);
      if (window.innerWidth > 460) {
        // document.querySelector(".scroll-animate").style.transform = `scale(${
        //   Math.abs(scrollY.getVelocity() * 0.000025) + 1
        // })`;
        // document.querySelector(".scroll-animate").style.transform = `skew(${
        //   scrollY.getVelocity() * 0.00025
        // }deg)`;
      }
      document.querySelectorAll(".skew").forEach((skewItem) => {
        // skewItem.style.transform = `scale(${
        //   Math.abs(scrollY.getVelocity() * 0.000025) + 1
        // })`;
        // skewItem.style.opacity = `${
        //   1 - Math.abs(scrollY.getVelocity() * 0.00005)
        // }`;
      });
    });

    return () => unsubscribe();
  }, [scrollY]);

  return <Component {...pageProps} />;
}

export default MyApp;

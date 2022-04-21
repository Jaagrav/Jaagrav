import { useEffect, useState } from "react";
import "../styles/globals.css";

// Importing Components
import { Header, Footer } from "../components";

import { ScrollerMotion, useScrollerMotion } from "scroller-motion";
import { useMotionValue } from "framer-motion";

import PageTransition from "../components/PageTransition";

import { PageTransition as Transition } from "next-page-transitions";

import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  const [isMobile, setIsMobile] = useState(false),
    setTheme = (theme) => {
      localStorage.theme = theme;
      if (localStorage.theme === "dark" || !("theme" in localStorage)) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    changeTheme = () => {
      const prevTheme = localStorage.theme;
      setTheme(prevTheme === "light" ? "dark" : "light");
    };

  useEffect(() => {
    setTheme(!("theme" in localStorage) ? "dark" : localStorage.theme);

    const resize = () => {
      if (window.innerWidth <= 1366) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    resize();
    return window.addEventListener("resize", resize);
  }, []);

  return (
    <div>
      <Transition timeout={500} classNames="page-transition">
        <div className="h-fit w-full overflow-x-hidden">
          <PageTransition />
          <Header changeTheme={changeTheme} />
          <ScrollerMotion disabled={isMobile}>
            <div className="scroll-animate h-fit w-full">
              <NextNProgress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
              />
              <Content Component={Component} pageProps={pageProps} />
              <Footer />
            </div>
          </ScrollerMotion>
        </div>
      </Transition>
      <style jsx global>{`
        .page-transition-enter-done .page-transition {
          height: 0%;
          width: 100%;
          transition: 500ms;
        }
        .page-transition-enter-active .page-transition {
          height: 100%;
          width: 100%;
          bottom: 0;
          transition: 500ms;
        }
        .page-transition-exit .page-transition {
          bottom: 0;
          height: 100%;
          width: 100%;
          transition: 500ms;
        }
        .page-transition-exit-active .page-transition {
          bottom: 0;
          height: 100%;
          width: 100%;
          transition: 500ms;
        }
      `}</style>
      <script id="three-min-js" src="/assets/lib/three.min.js" async></script>
      <script
        id="fluid-background-js"
        src="/assets/lib/fluid-background.js"
        async
      ></script>
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

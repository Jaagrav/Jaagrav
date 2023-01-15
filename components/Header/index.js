import { useEffect, useState } from "react";

import Link from "next/link";

import { useRouter } from "next/router";

import { FiSun, FiMoon } from "react-icons/fi";

export default function Header({ changeTheme }) {
  const router = useRouter(),
    [isAtTop, setIsAtTop] = useState(true),
    [currentURL, setCurrentURL] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 30) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    });

    const handleRouteChange = (url, { shallow }) => {
      setCurrentURL(url);
    };
    handleRouteChange(router.pathname, { shallow: true });

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div className="sticky top-0 z-30">
      <div className="hidden md:block">
        <DesktopHeader
          isAtTop={isAtTop}
          currentURL={currentURL}
          changeTheme={changeTheme}
        />
      </div>
      <div className="md:hidden block">
        <MobileHeader
          isAtTop={isAtTop}
          currentURL={currentURL}
          changeTheme={changeTheme}
        />
      </div>
    </div>
  );
}

function DesktopHeader({ isAtTop, currentURL, changeTheme }) {
  return (
    <div
      className={`transition h-24 md:h-16 w-full z-30 px-10 md:px-32 ${
        !isAtTop
          ? `${
              !isAtTop ? "bg-extraLightBgColorTranslucent" : ""
            } dark:bg-bgColorTranslucent backdrop-blur-lg`
          : "bgColorTranslucent"
      }`}
    >
      <div className="max-w-screen-xl text-white m-auto h-full">
        <div className="h-full w-full grid grid-cols-[12rem_1fr_12rem] my-auto">
          <div
            className={`text-3xl my-auto text-lightTextColor dark:text-white`}
          >
            <Link href="/">JS</Link>
          </div>
          <div className="h-full w-full max-w-lg lg:max-w-xl flex flex-row justify-between items-center m-auto">
            <DesktopNavLink
              href="/"
              name="Home"
              currentURL={currentURL}
            />
            <DesktopNavLink
              href="/projects"
              name="Projects"
              currentURL={currentURL}
            />
            <DesktopNavLink
              href="https://blog.jaagrav.in"
              name="Blog"
              currentURL={currentURL}
              target={'_blank'}
            />
            <DesktopNavLink
              href="/about"
              name="About"
              currentURL={currentURL}
            />
            <DesktopNavLink
              href="/contact"
              name="Contact"
              currentURL={currentURL}
            />
          </div>
          <div className="h-full w-full flex gap-4 items-center justify-end">
            <button
              onClick={changeTheme}
              className={`text-lightTextColor dark:text-white text-2xl outline-none bg-none border-none my-auto`}
            >
              <div className="block dark:hidden">
                <FiMoon />
              </div>
              <div className="hidden dark:block">
                <FiSun />
              </div>
            </button>
            <Link href="/resume">
              <a
                className={`px-6 py-1 text-lightTextColor border-lightTextColor dark:text-white dark:border-white border-2 my-auto rounded-xl transition shadow-none hover:shadow-xl hover:scale-105`}
              >
                Resume
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopNavLink({ href, name, currentURL, target }) {
  return (
    <Link href={href}>
      <a
          target={target}
        className={`text-lg text-lightTextColor dark:text-white ${
          currentURL !== href ? "hover:underline" : "cursor-default"
        } underline-offset-8`}
      >
        {currentURL === href ? `• ${name} •` : `${name}`}
      </a>
    </Link>
  );
}

function MobileNavLink({ href, name, currentURL, target = '_self' }) {
  return (
    <Link href={href}>
      <a
          target={target}
        className={`block text-7xl text-lightTextColor dark:text-white my-12 ${
          currentURL === href
            ? ""
            : `opacity-75 text-border`
        }`}
      >
        {name}
      </a>
    </Link>
  );
}

function MobileHeader({ isAtTop, currentURL, changeTheme }) {
  const [isOpen, setIsOpen] = useState(false),
    handleClick = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
      <div
        className={`transition h-20 md:h-16 w-full z-30 px-10 md:px-32 ${
          !isAtTop
            ? `backdrop-blur-lg bg-extraLightBgColorTranslucent dark:bg-extraDarkBgColorTranslucent`
            : ""
        }`}
      >
        <div className="grid grid-cols-2 h-full">
          <div
            className={`text-lightTextColor dark:text-white dark:text-white text-3xl md:text-4xl my-auto`}
          >
            <Link href="/">{isAtTop ? "JS" : "Jaagrav Seal"}</Link>
          </div>
          <div
            className="scale-75 origin-right md:scale-100 h-10 w-12 md:w-10 my-auto ml-auto relative"
            onClick={handleClick}
          >
            <div
              className={`transition m-auto origin-center h-[3px] w-full bg-lightTextColor dark:bg-white rounded-xl absolute ${
                isOpen
                  ? "rotate-45 left-0 top-0 bottom-0 right-0 "
                  : "left-0 top-2 "
              }`}
            ></div>
            <div
              className={`transition m-auto origin-center h-[3px] bg-lightTextColor dark:bg-white rounded-xl absolute ${
                isOpen
                  ? "-rotate-45 w-full left-0 top-0 bottom-0 right-0"
                  : "right-0 top-6 w-2/3"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div
        className={`transition fixed left-0 top-20 h-full w-full ${
          isOpen
            ? `backdrop-blur-lg bg-extraLightBgColorTranslucent dark:bg-extraDarkBgColorTranslucent`
            : "pointer-events-none"
        } z-20`}
        onClick={handleClick}
      >
        <div
          className={`transition h-full w-full ml-auto ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="px-10">
            <MobileNavLink
              href="/"
              name="Home"
              currentURL={currentURL}
            />
            <MobileNavLink
              href="/projects"
              name="Projects"
              currentURL={currentURL}
            />
            <MobileNavLink
                href="https://blog.jaagrav.in"
                name="Blog"
                currentURL={currentURL}
                target={'_blank'}
            />
            <MobileNavLink
              href="/about"
              name="About"
              currentURL={currentURL}
            />
            <MobileNavLink
              href="/contact"
              name="Contact"
              currentURL={currentURL}
            />
            <div className="mt-4 h-full w-full flex gap-12 items-center">
              <Link href="/resume">
                <a
                  className={`px-6 py-4 w-full text-lightTextColor border-lightTextColor dark:text-white text-5xl dark:border-white border-2 mr-auto my-auto rounded-xl`}
                >
                  Resume
                </a>
              </Link>
              <button
                onClick={changeTheme}
                className={`text-lightTextColor dark:text-white text-5xl outline-none bg-none border-none my-auto`}
              >
                <div className="block dark:hidden">
                  <FiMoon />
                </div>
                <div className="hidden dark:block">
                  <FiSun />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

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
    <div className="">
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
      className={`transition fixed h-24 md:h-16 w-full z-30 px-10 md:px-24 ${
        !isAtTop
          ? "bg-lightBgSecondaryColorTranslucent dark:bg-bgColorTranslucent backdrop-blur-lg"
          : ""
      }`}
    >
      <div className="max-w-screen-xl text-white m-auto h-full">
        <div className="h-full w-full grid grid-cols-[18rem_1fr_18rem] my-auto">
          <div className="text-3xl my-auto text-bgColor dark:text-white">
            <Link href="/">JS</Link>
          </div>
          <div className="h-full w-full max-w-screen-sm flex flex-row justify-between items-center m-auto">
            <DesktopNavLink href="/" name="Home" currentURL={currentURL} />
            <DesktopNavLink
              href="/projects"
              name="Projects"
              currentURL={currentURL}
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
          <div className="h-full w-full flex gap-4">
            <button className="px-6 py-1 text-bgColor dark:text-white border-bgColor dark:border-white border-2 ml-auto my-auto text-bgColor dark:text-white rounded-lg">
              Resume
            </button>
            <button
              onClick={changeTheme}
              className="text-bgColor dark:text-white text-2xl outline-none bg-none border-none my-auto"
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
  );
}

function DesktopNavLink({ href, name, currentURL }) {
  return (
    <Link href={href}>
      <a className="text-lg text-bgColor dark:text-white">
        {currentURL === href ? `• ${name} •` : `${name}`}
      </a>
    </Link>
  );
}

function MobileNavLink({ href, name, currentURL }) {
  return (
    <Link href={href}>
      <a
        className={`block text-7xl text-bgColor dark:text-white my-12 ${
          currentURL === href ? "" : "opacity-75 text-border"
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
        className={`transition fixed h-24 md:h-16 w-full z-30 px-10 md:px-24 ${
          !isAtTop
            ? `bg-lightBgSecondaryColorTranslucent dark:bg-bgColorTranslucent ${
                isOpen ? "bg-transparent" : "backdrop-blur-lg"
              }`
            : ""
        }`}
      >
        <div className="grid grid-cols-2 h-full">
          <div className="text-bgColor dark:text-white text-4xl my-auto">
            <Link href="/">{isAtTop ? "JS" : "Jaagrav Seal"}</Link>
          </div>
          <div
            className="h-10 w-10 my-auto ml-auto relative"
            onClick={handleClick}
          >
            <div
              className={`transition m-auto origin-center h-[3px] w-full bg-bgColor dark:bg-white rounded-lg absolute ${
                isOpen
                  ? "rotate-45 left-0 top-0 bottom-0 right-0 "
                  : "left-0 top-2 "
              }`}
            ></div>
            <div
              className={`transition m-auto origin-center h-[3px] bg-bgColor dark:bg-white rounded-lg absolute ${
                isOpen
                  ? "-rotate-45 w-full left-0 top-0 bottom-0 right-0"
                  : "left-0 top-6 w-2/3"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div
        className={`transition fixed h-full w-full ${
          isOpen
            ? `backdrop-blur-lg ${
                !isAtTop
                  ? `bg-lightBgSecondaryColorTranslucent dark:bg-bgColorTranslucent`
                  : ""
              }`
            : "pointer-events-none"
        } z-20`}
        onClick={handleClick}
      >
        <div
          className={`transition h-full w-full ml-auto ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="pt-24 px-10">
            <MobileNavLink href="/" name="Home" currentURL={currentURL} />
            <MobileNavLink
              href="/projects"
              name="Projects"
              currentURL={currentURL}
            />
            <MobileNavLink href="/about" name="About" currentURL={currentURL} />
            <MobileNavLink
              href="/contact"
              name="Contact"
              currentURL={currentURL}
            />
            <div className="mt-4 h-full w-full flex gap-12 items-center">
              <button
                className={`px-6 py-4 w-full text-bgColor dark:text-white text-5xl border-bgColor dark:border-white border-2 mr-auto my-auto rounded-lg`}
              >
                Resume
              </button>
              <button
                onClick={changeTheme}
                className="text-bgColor dark:text-white text-5xl outline-none bg-none border-none my-auto"
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

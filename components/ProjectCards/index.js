import Link from "next/link";

export default function ProjectCards({
  title,
  miniDesc,
  website,
  github,
  img,
  link,
}) {
  return (
    <div className="px-10 md:px-32">
      <div className="w-full max-w-screen-xl mx-auto flex items-center gap-12 md:gap-4 flex-col-reverse md:flex-row transition">
        <div className="relative z-10 w-full">
          <h1 className="text-lightTextColor dark:text-white text-4xl">
            {title}
          </h1>
          <span className="block text-lightTextColor dark:text-white text-xl mt-4 leading-10">
            {miniDesc}
          </span>
          <div className="mt-6">
            {website && (
              <Link href={website} target="_blank">
                <a
                  className={`inline-block mt-4 w-full md:w-fit text-center md:text-left md:mr-4 px-8 py-2 text-xl border-lightTextColor dark:border-white border-2 bg-lightTextColor dark:bg-white text-white dark:text-bgColor rounded-xl`}
                >
                  Website
                </a>
              </Link>
            )}
            {github && (
              <Link href={github} target="_blank">
                <a
                  className={`inline-block mt-4 w-full md:w-fit text-center md:text-left md:mr-4 px-8 py-2 text-xl border-lightTextColor dark:border-white border-2 text-bgColor dark:text-white rounded-xl`}
                >
                  GitHub
                </a>
              </Link>
            )}
            {link && (
              <Link href={`/projects/${link}`}>
                <a className="inline-block text-xl text-lightTextColor dark:text-white text-center w-full md:w-fit py-4 ">
                  Learn More
                </a>
              </Link>
            )}
          </div>
        </div>
        <div className="relative z-0">
          <img
            className="w-[55rem] max-w-none absolute z-0 left-0 top-0 bottom-0 m-auto dark:opacity-60 translate-x-1/5"
            src="/assets/images/blur-ball-blue.webp"
          />
          <img
            className="relative z-10 md:max-w-sm lg:max-w-xl rounded-xl transition duration-300 hover:scale-105 shadow-2xl"
            src={img}
          />
          <img
            className="w-[55rem] max-w-none absolute z-0 right-0 top-0 bottom-0 m-auto hidden dark:block dark:opacity-60 -translate-x-1/5"
            src="/assets/images/blur-ball-orange.webp"
          />
          <img
            className="w-[55rem] max-w-none absolute z-0 right-0 top-0 bottom-0 m-auto dark:hidden -translate-x-1/5"
            src="/assets/images/blur-ball-indigo.webp"
          />
        </div>
      </div>
    </div>
  );
}

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
    <div className="px-10 md:px-24 my-8 skew">
      <div className="w-full max-w-screen-xl mx-auto flex items-center gap-12 md:gap-4 flex-col-reverse md:flex-row transition">
        <div className="relative z-10 w-full">
          <h1 className="text-white text-4xl">{title}</h1>
          <span className="block text-white opacity-75 text-xl mt-4 leading-10">
            {miniDesc}
          </span>
          <div className="mt-6">
            {website && (
              <a
                href={website}
                target="_blank"
                className={`inline-block mt-4 w-full md:w-fit text-center md:text-left md:mr-4 px-8 py-2 text-bgColor text-xl border-white border-2 bg-white`}
              >
                Website
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                className={`inline-block mt-4 w-full md:w-fit text-center md:text-left md:mr-4 px-8 py-2 text-white text-xl border-white border-2`}
              >
                GitHub
              </a>
            )}
            {link && (
              <Link href={`/projects/${link}`}>
                <a className="inline-block text-xl text-white text-center w-full md:w-fit py-4 ">
                  Learn More
                </a>
              </Link>
            )}
          </div>
        </div>
        <div className="relative transition duration-300 hover:scale-105">
          <img
            className="w-[160vw] absolute z-0 right-0 top-0 bottom-0 m-auto translate-x-1/2"
            src="/assets/images/blur-ball-blue.png"
          />
          <img className="relative z-10 md:max-w-xl" src={img} />
          <img
            className="w-[160vw] absolute z-0 left-0 top-0 bottom-0 m-auto -translate-x-1/2 opacity-65"
            src="/assets/images/blur-ball-indigo.png"
          />
        </div>
      </div>
    </div>
  );
}

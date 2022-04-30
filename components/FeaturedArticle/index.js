import Link from "next/link";

export default function FeaturedArticle({
  title,
  tags,
  desc,
  dev,
  project,
  img,
}) {
  return (
    <div className="px-10 md:px-32">
      <div className="py-12 relative max-w-screen-xl mx-auto">
        <div className="absolute inset-0 m-auto bg-gradient-to-br from-indigo to-blue dark:from-rose dark:to-pink blur-[120px] opacity-50"></div>
        <div className="relative flex flex-col-reverse md:grid md:grid-cols-2 gap-12 ">
          <div className="flex gap-4 md:gap-2 flex-col m-auto">
            <div className="text-xl text-lightTextColor dark:text-white">
              Featured Article by Jaagrav
            </div>
            <div className="text-4xl text-lightTextColor dark:text-white">
              {title}
            </div>
            <div className="text-xl text-lightTextColor dark:text-white">
              {tags.map((tag, index) => (
                <span key={`tag-index-${index}`}>#{tag} </span>
              ))}
            </div>
            <div className="text-xl text-lightTextColor dark:text-white leading-8">
              {desc}
            </div>
            <div>
              {dev && (
                <Link href={dev}>
                  <a
                    target="_blank"
                    className={`inline-block mt-4 w-full md:w-fit text-center md:text-left md:mr-4 px-8 py-2 text-xl border-lightTextColor dark:border-white border-2 bg-lightTextColor dark:bg-white text-white dark:text-bgColor rounded-xl transition shadow-none hover:shadow-xl hover:scale-105`}
                  >
                    Read on Dev
                  </a>
                </Link>
              )}
              {project && (
                <Link href={project}>
                  <a
                    className={`inline-block mt-4 w-full md:w-fit text-center md:text-left md:mr-4 px-8 py-2 text-xl border-lightTextColor dark:border-white border-2 text-bgColor dark:text-white rounded-xl transition shadow-none hover:shadow-xl hover:scale-105`}
                  >
                    See Project
                  </a>
                </Link>
              )}
            </div>
          </div>
          <div>
            <img
              src={img}
              className="rounded-xl transition hover:scale-105"
              alt={title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

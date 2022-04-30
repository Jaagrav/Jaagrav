import { SubHeader, ProjectCards, Animatify } from "../../components";
import projectData from "../../project-data";
import Head from "next/head";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="h-fit w-full">
      <Head>
        <title>Projects / Jaagrav</title>
        <meta name="title" content="Projects / Jaagrav" />
        <meta
          name="description"
          content="Take a look at the shit I made in the name of Software Development. Honestly I am quite proud how most of them turned out. Most of them are available on Github so go ahead knock yourself out! The others are client/freelance projects."
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Projects / Jaagrav" />
        <meta
          property="og:description"
          content="Take a look at the shit I made in the name of Software Development. Honestly I am quite proud how most of them turned out. Most of them are available on Github so go ahead knock yourself out! The others are client/freelance projects."
        />
        <meta
          property="og:image"
          content="https://jaagrav-2.vercel.app/assets/images/seo/projects.webp"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Projects / Jaagrav" />
        <meta
          property="twitter:description"
          content="Take a look at the shit I made in the name of Software Development. Honestly I am quite proud how most of them turned out. Most of them are available on Github so go ahead knock yourself out! The others are client/freelance projects."
        />
        <meta
          property="twitter:image"
          content="https://jaagrav-2.vercel.app/assets/images/seo/projects.webp"
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </Head>
      <SubHeader
        title="My Projects"
        caption="Take a look at the shit I made in the name of Software Development. Honestly I am quite proud how most of them turned out. Most of them are available on Github so go ahead knock yourself out! The others are client/freelance projects."
      />
      <div className="grid grid-cols-1 gap-24">
        <Animatify>
          {projectData.map((props, index) => (
            <ProjectCards key={`project-card-${index}`} {...props} />
          ))}
        </Animatify>
      </div>
      <Animatify>
        <span className="relative z-10 block text-center mx-auto mt-16 text-lightTextColor dark:text-white text-xl skew">
          {"There's more, "}
          <Link href="https://github.com/jaagrav">
            <a
              className="transition text-indigo hover:underline underline-offset-8"
              target="_blank"
            >
              click here to find out!
            </a>
          </Link>
        </span>
      </Animatify>
    </div>
  );
}

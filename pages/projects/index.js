import { SubHeader, ProjectCards } from "../../components";
import projectData from "../../project-data";
import Head from "next/head";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="h-fit w-full overflow-hidden">
      <Head>
        <title>Projects / Jaagrav</title>
        <meta name="title" content="Projects / Jaagrav" />
        <meta
          name="description"
          content="Take a look at the shit I made in the name of Software Development. Honestly I am quite proud how some of them turned out. Some of them are available on Github so go ahead knock yourself out! The others are client/freelance projects."
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Projects / Jaagrav" />
        <meta
          property="og:description"
          content="Take a look at the shit I made in the name of Software Development. Honestly I am quite proud how some of them turned out. Some of them are available on Github so go ahead knock yourself out! The others are client/freelance projects."
        />
        <meta
          property="og:image"
          content="https://jaagrav-2.vercel.app/assets/images/jaagrav.webp"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Projects / Jaagrav" />
        <meta
          property="twitter:description"
          content="Take a look at the shit I made in the name of Software Development. Honestly I am quite proud how some of them turned out. Some of them are available on Github so go ahead knock yourself out! The others are client/freelance projects."
        />
        <meta
          property="twitter:image"
          content="https://jaagrav-2.vercel.app/assets/images/jaagrav.webp"
        />
      </Head>
      <SubHeader
        title="My Projects"
        caption="Take a look at the shit I made in the name of Software Development. Honestly I am quite proud how some of them turned out. Some of them are available on Github so go ahead knock yourself out! The others are client/freelance projects."
      />
      {projectData.map((props, index) => (
        <ProjectCards key={`project-card-${index}`} {...props} />
      ))}
      <span className="relative z-10 block text-center mx-auto mt-16 text-white text-xl skew">
        {"There's more, "}
        <Link href="https://github.com/jaagrav" target="_blank">
          <a className="transition text-indigo hover:underline underline-offset-8">
            click here to find out!
          </a>
        </Link>
      </span>
    </div>
  );
}

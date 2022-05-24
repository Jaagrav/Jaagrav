import { useEffect, useState } from "react";
import {
  SubHeader,
  ProjectCards,
  Animatify,
  Analytics,
} from "../../../components";
import projectData from "../../../project-data";
import Head from "next/head";
import Link from "next/link";
import ReadMoreReact from "read-more-react";

import { Octokit } from "@octokit/core";
import commaNumber from "comma-number";

export default function Page({ project, randomProject }) {
  const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });
  const [stars, setStars] = useState(0),
    [forks, setForks] = useState(0);

  useEffect(() => {
    const getGithubData = async () => {
      try {
        const githubRepoData = await octokit.request(
          "GET /repos/{username}/{repo}",
          {
            username: "Jaagrav",
            repo: project.link,
          }
        );

        setStars(githubRepoData.data.stargazers_count);
        setForks(githubRepoData.data.forks_count);
      } catch (error) {}
    };
    getGithubData();
  }, []);
  return (
    <div className="h-fit w-full">
      <Head>
        <title>{project.title} / Projects / Jaagrav</title>
        <meta name="title" content={`${project.title} / Projects / Jaagrav`} />
        <meta name="description" content={project.miniDesc} />
        <meta
          name="viewport"
          content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${project.title} / Projects / Jaagrav`}
        />
        <meta property="og:description" content={project.miniDesc} />
        <meta
          property="og:image"
          content={`https://jaagrav-2.vercel.app${project.img}`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content={`${project.title} / Projects / Jaagrav`}
        />
        <meta property="twitter:description" content={project.miniDesc} />
        <meta
          property="twitter:image"
          content={`https://jaagrav-2.vercel.app${project.img}`}
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </Head>
      <Animatify>
        <SubHeader
          title={project.title}
          // caption={project.miniDesc}
        />
        <div className="px-10 md:px-32">
          <div className="relative z-10 max-w-screen-xl mx-auto">
            <img
              src={project.img}
              className="w-full rounded-xl transition duration-300 hover:scale-105 shadow-2xl"
            />
          </div>
        </div>
        <div className="px-10 md:px-32">
          <div className="relative z-20 max-w-screen-xl mx-auto">
            <div className="grid md:grid-cols-[1fr_2px_0.6fr] mt-12">
              <div className="py-12 md:pr-12">
                <div className="text-xl leading-10 text-lightTextColor dark:text-white">
                  <ReadMoreReact
                    text={project.desc}
                    min={100}
                    ideal={350}
                    max={1000}
                    readMoreText="Click here to read more"
                  />
                </div>
              </div>
              <div className="h-full w-full bg-lightBgSecondaryColorTranslucent dark:bg-bgSecondaryColor"></div>
              <div className="py-12 md:pl-12">
                <div className="h-fit sticky top-28">
                  {!!stars && !!forks && (
                    <div className="text-lightTextColor dark:text-white text-5xl mb-6">
                      {!!stars && (
                        <span>
                          <b className="text-border">{commaNumber(stars)}</b>{" "}
                          stars
                        </span>
                      )}
                      {!!forks && (
                        <span>
                          {" "}
                          and{" "}
                          <b className="text-border">
                            {commaNumber(forks)}
                          </b>{" "}
                          forks
                        </span>
                      )}{" "}
                      on GitHub.
                    </div>
                  )}
                  <div className="text-lightTextColor dark:text-white text-2xl">
                    Technologies used:
                  </div>
                  <div className="my-6">
                    {project.tech.map((tech, index) => (
                      <span
                        key={`tech-index-${index}`}
                        className="inline-block bg-lightBgSecondaryColor dark:bg-bgSecondaryColor text-lightTextColor dark:text-white text-lg md:text-sm px-2 py-1 mb-2 mr-2 rounded-xl"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-lightTextColor dark:text-white text-2xl">
                    Check it out:
                  </div>
                  <div className="flex mt-6 gap-6">
                    {project.website && (
                      <Link href={project.website}>
                        <a
                          target="_blank"
                          className={`block h-full w-full text-center px-8 py-2 text-white dark:text-bgColor text-xl border-lightTextColor dark:border-white border-2 bg-lightTextColor dark:bg-white rounded-xl transition shadow-none hover:shadow-xl hover:scale-105`}
                        >
                          Website
                        </a>
                      </Link>
                    )}
                    {project.github && (
                      <Link href={project.github}>
                        <a
                          target="_blank"
                          className={`block h-full w-full text-center px-8 py-2 text-lightTextColor dark:text-white text-xl border-lightTextColor dark:border-white border-2 rounded-xl transition shadow-none hover:shadow-xl hover:scale-105`}
                        >
                          GitHub
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SubHeader
          title="Next Project"
          caption="This is not the only shit I made, check out this other project that this page randomly chose for you to see, hope you'll like it. And if you don't go back to the projects page to see all the projects I have built so far."
        />
        <ProjectCards {...randomProject} />
        <span className="relative z-10 block text-center mx-auto mt-16 text-lightTextColor dark:text-white text-xl skew">
          {"There's more, "}
          <Link href="/projects">
            <a className="transition text-indigo hover:underline underline-offset-8">
              click here to find out!
            </a>
          </Link>
        </span>
      </Animatify>
    </div>
  );
}

export async function getStaticPaths(context) {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
}

export async function getStaticProps({ params }) {
  let { projectLink } = params,
    index = 0,
    project = projectData.find((project) => {
      index++;
      return project.link === projectLink;
    }),
    randomProject = projectData[index < projectData.length ? index : 0];

  return {
    props: {
      project,
      randomProject,
    },
  };
}

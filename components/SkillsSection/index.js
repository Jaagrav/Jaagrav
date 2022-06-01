import { useState, useEffect } from "react";

import { Octokit } from "@octokit/core";
import { getGithubContributions } from "github-contributions-counter";

import commaNumber from "comma-number";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";

import { BsCodeSlash } from "react-icons/bs";
import { VscSymbolInterface } from "react-icons/vsc";
import { GiRobotGolem } from "react-icons/gi";
import { GoTools } from "react-icons/go";

export default function SkillsSection() {
  const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });
  const [followers, setFollowers] = useState(0),
    [publicRepos, setPublicRepos] = useState(0),
    [totalContributions, setTotalContributions] = useState(0);
  useEffect(() => {
    const getGithubData = async () => {
      const githubProfile = await octokit.request("GET /users/{username}", {
        username: "Jaagrav",
      });
      getGithubContributions({
        username: "Jaagrav",
        token: process.env.GITHUB_ACCESS_TOKEN,
      }).then((res) => {
        setTotalContributions(
          res.data.data.user.contributionsCollection.contributionCalendar
            .totalContributions
        );
      });
      setFollowers(githubProfile.data.followers);
      setPublicRepos(githubProfile.data.public_repos);
    };
    getGithubData();
  }, []);
  return (
    <div className="px-10 md:px-32 relative z-10 mb-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-12">
        <div className="flex justify-center flex-col gap-6">
          <div className="text-xl text-lightTextColor dark:text-white leading-8">
            {
              "Here's a list of all my skills and all the reasons why you should hire me. As a developer, I don't completely know anything, you see I am not very good at memorizing, I normally read documentations everytime I am building something, but I make sure to get the work done in time."
            }
          </div>
          <div className="grid grid-cols-[auto_2px_auto_2px_auto] gap-6">
            <GithubStats
              number={commaNumber(totalContributions + 3)}
              desc="Contributions in the last year on GitHub*"
            />
            <div className="h-full w-full bg-lightBgSecondaryColorTranslucent dark:bg-bgSecondaryColor"></div>
            <GithubStats
              number={commaNumber(followers)}
              desc="Total Followers on Github*"
            />
            <div className="h-full w-full bg-lightBgSecondaryColorTranslucent dark:bg-bgSecondaryColor"></div>
            <GithubStats
              number={commaNumber(publicRepos)}
              desc="Public Repositories on Github*"
            />
          </div>
          <div className="text-sm text-lightTextColor dark:text-white">
            *data above is requested from the Github API{" "}
          </div>
          <div>
            <div className="text-3xl text-lightTextColor dark:text-white">
              {"Book a 30-min private event with me."}
            </div>
            <Link href={"https://bit.ly/book-jaagrav"}>
              <a
                target="_blank"
                className={`inline-block mt-6 w-full md:w-fit text-center md:text-left md:mr-4 px-10 py-2 text-xl border-lightTextColor dark:border-white border-2 bg-lightTextColor dark:bg-white text-white dark:text-bgColor rounded-xl transition shadow-none hover:shadow-xl hover:scale-105`}
              >
                Schedule event
              </a>
            </Link>
          </div>
        </div>
        <div className="h-full w-full bg-lightBgSecondaryColor dark:bg-bgSecondaryColor rounded-xl">
          <Carousel
            autoPlay={false}
            interval={3000}
            infiniteLoop={true}
            swipeable={true}
            showArrows={false}
            showStatus={false}
            emulateTouch={true}
            stopOnHover={true}
            useKeyboardArrows={true}
            preventMovementUntilSwipeScrollTolerance={true}
          >
            <Skill
              logo={<BsCodeSlash />}
              title="Web Development"
              desc="Everybody knows HTML, CSS and JavaScript. I also am experienced in libraries like NodeJS, VueJS, NextJS, ofc ReactJS, am practicing React Native, ElectronJS, Firebase, Google Cloud APIs, Blockly, SocketIO, ExpressJS, Tailwind, Material UI, ThreeJS, CannonJS, I can keep going and I am always learning."
            />
            <Skill
              logo={<VscSymbolInterface />}
              title="UI/UX"
              desc="This website you see? I designed it by myself. In order to visualize what I am about to code, I normally use Figma or Adobe XD to get a rough idea of how the website is going to look. I have developed and designed websites on Shopify as well!"
            />
            <Skill
              logo={<GiRobotGolem />}
              title="Robotics and Programming"
              desc="In school we were taught Java, and I am honestly pretty good at Data Structures and Algorithms. I also can code in Arduino's so far I have made a car that can be controlled using the WASD keys on my laptop and many other projects that are available on my linkedin!"
            />
            <Skill
              logo={<GoTools />}
              title="Other Tools and Softwares"
              desc="So I know Git, and I am on GitHub, which I'm sure you already know, I am on GitLab as well, although I don't really use that account as much as I do GitHub. I am also familiar with Slack, Trello, and Trello Boards. I am also familiar with Postman, SendGrid and Google Analytics."
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

function GithubStats({ number, desc }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="text-5xl text-border">{number}</div>
      <div className="text-md text-lightTextColor dark:text-white text-center">
        {desc}
      </div>
    </div>
  );
}

function Skill({ logo, title, desc }) {
  const Logo = () => logo;
  return (
    <div className="skill text-left p-6 pb-12 h-full w-full select-none cursor-grab active:cursor-grabbing">
      <div className="rounded-xl p-4 text-3xl text-lightTextColor dark:text-white mb-2 bg-white dark:bg-bgColor flex justify-start items-center gap-4 shadow-2xl">
        <Logo />
        <span className="">{title}</span>
      </div>
      <div className="px-4 py-2 text-xl text-lightTextColor dark:text-white leading-10">
        {desc}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <div className="px-10 md:px-24 skew my-8 relative z-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full grid md:grid-cols-2 gap-12 md:gap-6">
          <Skill
            title="Web Development"
            description="Everybody knows HTML, CSS and JavaScript. I also am experienced in libraries like NodeJS, VueJS, NextJS, ofc ReactJS, am practicing React Native, ElectronJS, Firebase, Google Cloud APIs, Blockly, SocketIO, ExpressJS, Tailwind, Material UI, ThreeJS, CannonJS, I can keep going and I am always learning."
          />
          <Skill
            title="UI/UX"
            description="This website you see? I designed it by myself. In order to visualize what I am about to code, I normally use Figma or Adobe XD to get a rough idea of how the website is going to look. I have developed and designed websites on Shopify as well!"
          />
          <Skill
            title="Robotics, Electronics and Programming"
            description="In school we were taught Java, and I am honestly pretty good at Data Structures and Algorithms. I also can code in Arduino's so far I have made a car that can be controlled using the WASD keys on my laptop and many other projects that are available on my linkedin!"
          />
          <Skill
            title="Other Tools and Softwares"
            description="So I know Git, and I am on GitHub, which I'm sure you already know, I am on GitLab as well, although I don't really use that account as much as I do GitHub. I am also familiar with Slack, Trello, and Trello Boards. I am also familiar with Postman, SendGrid and Google Analytics."
          />
        </div>
      </div>
    </div>
  );
}

function Skill({ title, description }) {
  return (
    <div className="p-8 bg-lightBgSecondaryColor dark:bg-bgSecondaryColor w-full rounded-lg">
      <h3 className="text-3xl font-bold text-lightTextColor dark:text-white">
        {title}
      </h3>
      <p className="text-xl text-lightTextColor dark:text-white mt-4 leading-8 opacity-80">
        {description}
      </p>
    </div>
  );
}

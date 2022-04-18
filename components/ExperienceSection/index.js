import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function ExperienceSection() {
  return (
    <div className="skew px-6 md:px-24">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#040c20", color: "#fff" }}
          icon={<img src="/assets/images/org-cjr.png" />}
          date="Aug 2021 - Present"
        >
          <h3 className="vertical-timeline-element-title text-white text-4xl">
            CuriousJr
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-white opacity-75 text-2xl mt-1">
            L2 SDE Intern
          </h4>
          <ul className="text-white text-2xl xl:text-xl mt-2">
            Mentoring 5 interns, working on JS courses and blockly courses.
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#040c20", color: "#fff" }}
          icon={<img src="/assets/images/org-dc.png" />}
          date="May 2021 - Present"
        >
          <h3 className="vertical-timeline-element-title text-white text-4xl">
            Design And Code
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-white opacity-75 text-2xl mt-1">
            Front End Developer
          </h4>
          <ul className="text-white text-2xl xl:text-xl mt-2">
            Worked on community websites.
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#040c20", color: "#fff" }}
          icon={<img src="/assets/images/org-gssoc.png" />}
          date="March 2021 - May 2021"
        >
          <h3 className="vertical-timeline-element-title text-white text-4xl">
            GSSoC ‘21
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-white opacity-75 text-2xl mt-1">
            Opensource Contributor
          </h4>
          <ul className="text-white text-2xl xl:text-xl mt-2">
            Contributed the most to the Recess Project.
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

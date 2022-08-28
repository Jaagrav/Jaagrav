import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import experienceData from "../../experience-data";

export default function ExperienceSection() {
  return (
    <div className="skew relative z-10 max-w-screen-xl mx-auto">
      <VerticalTimeline>
        {experienceData.map(
          ({ icon, date, organization, position, desc }, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={{ background: "var(--background)", color: "#fff" }}
              icon={<img src={icon} className="rounded-full w-3/4" />}
              date={date}
              key={`experience-${index}`}
            >
              <h3 className="vertical-timeline-element-title text-lightTextColor dark:text-white text-4xl">
                {organization}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-lightTextColor dark:text-white opacity-75 text-2xl mt-1">
                {position}
              </h4>
              <ul className="text-lightTextColor dark:text-white text-2xl xl:text-xl mt-2 whitespace-pre-wrap">
                {desc}
              </ul>
            </VerticalTimelineElement>
          )
        )}
      </VerticalTimeline>
    </div>
  );
}

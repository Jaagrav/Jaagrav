import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import experienceData from "../../experience-data";

export default function ExperienceSection() {
  return (
    <div className="skew px-6 md:px-24">
      <VerticalTimeline>
        {experienceData.map(
          ({ icon, date, organization, position, desc }, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={{ background: "var(--background)", color: "#fff" }}
              icon={<img src={icon} />}
              date={date}
              key={`experience-${index}`}
            >
              <h3 className="vertical-timeline-element-title text-bgColor dark:text-white text-4xl">
                {organization}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-bgColor dark:text-white opacity-75 text-2xl mt-1">
                {position}
              </h4>
              <ul className="text-bgColor dark:text-white text-2xl xl:text-xl mt-2">
                {desc}
              </ul>
            </VerticalTimelineElement>
          )
        )}
      </VerticalTimeline>
    </div>
  );
}

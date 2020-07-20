import React from "react";
import Container from "../../components/Container";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "@material-ui/core";
import { RiReactjsLine } from "react-icons/ri";
import experienceJSON from "./experience.json";

export default () => {
  const { palette } = useTheme();
  const elementContentStyle = {
    backgroundColor: palette.secondary.dark,
    color: palette.text.primary,
    WebkitBoxShadow: "0px 9px 41px -2px rgba(0,0,0,0.53)",
    MozBoxShadow: "0px 9px 41px -2px rgba(0,0,0,0.53)",
    boxShadow: "0px 9px 41px -2px rgba(0,0,0,0.53)",
  };
  const iconStyle = {
    backgroundColor: palette.primary.main,
    color: "#fff",
    fontSize: "50px",
  };
  const { experience: experienceData } = experienceJSON;
  return (
    <Container>
      <VerticalTimeline style={{ zIndex: 0 }}>
        {experienceData.map((experience) => {
          const { subTitle, title, id, tools, tasks, date } = experience;
          return (
            <VerticalTimelineElement
              key={`timeline${id}`}
              className="vertical-timeline-element--work timeline-item-container"
              contentStyle={elementContentStyle}
              contentArrowStyle={{
                borderRight: `7px solid ${palette.primary.main}`,
              }}
              date={date}
              iconStyle={iconStyle}
              icon={<RiReactjsLine />}
            >
              <h3 className="vertical-timeline-element-title">{title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{subTitle}</h4>
              <p>{tasks}</p>
              <h3>Tools: </h3>
              <p>{tools}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Container>
  );
};

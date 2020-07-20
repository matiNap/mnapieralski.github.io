import React from "react";
import Container from "../../components/Container";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "@material-ui/core";
import { RiReactjsLine } from "react-icons/ri";
import "./style.css";
import experienceJSON from "./experience.json";

export default () => {
  const { palette } = useTheme();
  const elementContentStyle = {
    backgroundColor: palette.secondary.dark,
    color: palette.text.primary,
    WebkitBoxShadow: "10px 10px 83px 1px rgba(0,0,0,0.65)",
    MozBoxShadow: "10px 10px 83px 1px rgba(0,0,0,0.65)",
    boxShadow: "10px 10px 83px 1px rgba(0,0,0,0.65)",
  };
  const iconStyle = {
    backgroundColor: palette.primary.main,
    color: "#fff",
    fontSize: "50px",
  };
  const { experience: experienceData } = experienceJSON;
  return (
    <Container>
      <VerticalTimeline>
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

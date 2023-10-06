import React from 'react'
import timelineData from '../data/Timeline.json'
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

const TimelineComp = () => {
  return (
    <div
      className="flex flex-col items-center gap-4 lg:mb-[245px] pt-10 md:pt-20"
      id="timeline"
    >
      <p className="font1 text-white text-3xl font-bold">Timeline</p>
      <p className="font2 text-white text-sm mb-5 text-center px-7 lg:px-0">
        Here is the breakdown of the time we anticipate using for the upcoming
        event.
      </p>
      <VerticalTimeline lineColor="#D434FE">
        {timelineData.map((data) => (
          <VerticalTimelineElement
            key={data.id}
            date={data.time}
            dateClassName=" text-[#D434FE] font2"
            contentStyle={{
              background: "transparent",
              color: "#fff",
              boxShadow: "none",
            }}
            contentArrowStyle={{
              background: "transparent",
              borderRight: "0px solid transparent",
            }}
            icon={data.id}
            iconStyle={{
              background: "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
              boxShadow: "none",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              fontWeight: "700",
              color: "#fff",
            }}
            className="font2 border-0"
          >
            <h3 className="text-2xl mb-3 font-bold text-secondary-color">
              {data.title}
            </h3>
            <p className="text-sm text-white">{data.desc}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default TimelineComp

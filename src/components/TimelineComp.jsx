import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TbNumber1, TbNumber2, TbNumber3, TbNumber4, TbNumber5, TbNumber6 } from 'react-icons/tb'

const TimelineComp = () => {
  return (
    <section>
      
      <div className='text-center text-white p-20 pb-10'>
        <p className='clash-display text-[20px] md:text-[32px] z-20'>
          Timeline
        </p>
        <p className='montserrat leading-relaxed text-base z-20'>
          Here is the breakdown of the time we anticipate using for the upcoming event.
        </p>
      </div>

      <VerticalTimeline>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#D434FE', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #D434FE' }}
          date="November 18, 2023"
          iconStyle={{ background: 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)', color: '#fff' }}
          icon={<TbNumber1 />}
        >
          <h3 className="vertical-timeline-element-title text-lg font-semibold">Hackathon Announcement</h3>
          <p>
          The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#D434FE', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #D434FE' }}
          date="November 18, 2023"
          iconStyle={{ background: 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)', color: '#fff' }}
          icon={<TbNumber2 />}
        >
          <h3 className="vertical-timeline-elemen text-lg font-semibold">Teams Registration begins</h3>
          <p>
          Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#D434FE', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #D434FE' }}
          date="November 18, 2023"
          iconStyle={{ background: 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)', color: '#fff' }}
          icon={<TbNumber3 />}
        >
          <h3 className="vertical-timeline-elemen text-lg font-semibold">Teams Registration ends</h3>
          <p>
            Interested Participants are no longer Allowed to register
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#D434FE', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #D434FE' }}
          date="November 18, 2023"
          iconStyle={{ background: 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)', color: '#fff' }}
          icon={<TbNumber4 />}
        >
          <h3 className="vertical-timeline-e text-lg font-semibold">Announcement of the accepted teams and ideas</h3>
          <p>
            All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#D434FE', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #D434FE' }}
          date="November 18, 2023"
          iconStyle={{ background: 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)', color: '#fff' }}
          icon={<TbNumber5 />}
        >
          <h3 className="vertical-timeline-e text-lg font-semibold">Getlinked Hackathon 1.0 Offically Begins</h3>
          <p>
            Accepted teams can now proceed to build their ground breaking skill driven solutions
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#D434FE', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #D434FE' }}
          date="November 18, 2023"
          iconStyle={{ background: 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)', color: '#fff' }}
          icon={<TbNumber6 />}
        >
          <h3 className="vertical-timeline-e text-lg font-semibold">Demo Day</h3>
          <p>
            Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>

    </section>
  )
}

export default TimelineComp

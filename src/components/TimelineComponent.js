import Timeline from 'react-timelinejs';
import React, { useRef } from 'react';

const data = [
  {
    start: new Date('2018-07-12T13:14:15'),
    end: new Date('2018-07-12T15:14:15'),
    label: 'My First Event 1'
  },
  {
    start: new Date('2018-07-16:14:15'),
    end: new Date('2018-07-12T17:14:15'),
    label: 'My First Event 2'
  },
  {
    start: new Date('2018-07-12T12:14:15'),
    end: new Date('2018-07-12T19:14:15'),
    label: 'My Second Event'
  }
];

const TimelineComponent = () => {
  return <Timeline data={data} />;
};

// import TL from '../../static/js/TL';
// import data from '../components/timeline.json';

// const TimelineComponent = () => {
//   const timelineEl = useRef(null);
//   let events = [data];
//   const timeline = new TL.Timeline(timelineEl.current, { events: events });
//   return <div ref={timelineEl} className="timeline"></div>;
// };
export default TimelineComponent;

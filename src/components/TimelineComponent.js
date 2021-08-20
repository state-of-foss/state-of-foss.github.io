// import Timeline from 'react-timelinejs';
import React from 'react';
import { Timeline } from '@knight-lab/timelinejs';
import '@knight-lab/timelinejs/dist/css/timeline.css';

const data = [
  {
    media: {
      url: ''
    },
    start_date: {
      year: '2017',
      month: '01',
      day: '01'
    },
    text: {
      headline: 'A headline',
      text: 'Some text here'
    }
  },
  {
    media: {
      url: ''
    },
    start_date: {
      year: '2006',
      month: '01',
      day: '01'
    },
    text: {
      headline: 'Another headline',
      text: 'Some more text here'
    }
  }
];

const TimelineComponent = () => {
  const timelineEl = React.useRef(null);

  React.useEffect(() => {
    let events = data;
    new Timeline(timelineEl.current, { events: events });
  });

  return <div ref={timelineEl} className="timeline"></div>;
};

export default TimelineComponent;

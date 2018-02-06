import React from 'react';
import WeekDayList from './WeekDayList';


let marketScheduleList = [
  {
    day: 'Sunday',
    location: 'Lents International',
    hours: '9:00am - 2:00pm',
    booth: '4A'
  },
  {
    day: 'Monday',
    location: 'Pioneer Courthouse Square',
    hours: '10:00am - 2:00pm',
    booth: '7C'
  },
  {
    day: 'Tuesday',
    location: 'Hillsboro',
    hours: '5:00pm - 8:30pm',
    booth: '1F'
  },
  {
    day: 'Wednesday',
    location: 'Shemanski Park',
    hours: '10:00am - 2:00pm',
    booth: '3E'
  },
  {
    day: 'Thursday',
    location: 'Northwest Portland',
    hours: '2:00pm - 6:00pm',
    booth: '6D'
  },
  {
    day: 'Saturday',
    location: 'Beaverton',
    hours: '10:00am - 1:30pm',
    booth: '9G'
  }
];

const d = new Date();
const weekday = new Array(7);
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';

const n = weekday[d.getDay()];
const dayStyle = {
  textAlign: 'center',
  fontSize: 30
};

function Day() {
  if(n === 'Sunday') {
    return (
      <div style={dayStyle}>
        <WeekDayList day={marketScheduleList[0].day}
          location={marketScheduleList[0].location}
          hours={marketScheduleList[0].hours}
          booth={marketScheduleList[0].booth}/>
      </div>
    );
  }
  if(n === 'Monday') {
    return (
      <div style={dayStyle}>
        <WeekDayList day={marketScheduleList[1].day}
          location={marketScheduleList[1].location}
          hours={marketScheduleList[1].hours}
          booth={marketScheduleList[1].booth}/>
      </div>
    );
  }
  if(n === 'Tuesday') {
    return (
      <div style={dayStyle}>
        <WeekDayList day={marketScheduleList[2].day}
          location={marketScheduleList[2].location}
          hours={marketScheduleList[2].hours}
          booth={marketScheduleList[2].booth}/>
      </div>
    );
  }
  if(n === 'Wednesday') {
    return (
      <div style={dayStyle}>
        <WeekDayList day={marketScheduleList[3].day}
          location={marketScheduleList[3].location}
          hours={marketScheduleList[3].hours}
          booth={marketScheduleList[3].booth}/>
      </div>
    );
  }
  if(n === 'Thursday') {
    return (
      <div style={dayStyle}>
        <WeekDayList day={marketScheduleList[4].day}
          location={marketScheduleList[4].location}
          hours={marketScheduleList[4].hours}
          booth={marketScheduleList[4].booth}/>
      </div>
    );
  }
  if(n === 'Friday') {
    return (
      <div style={dayStyle}>
        <h1>Friday</h1>
        <h4>We are not out today.</h4>
        <h4>Will be tomorrow.</h4>
        <h1>See you then!</h1>
      </div>
    );
  }
  if(n === 'Saturday') {
    return (
      <div style={dayStyle}>
        <WeekDayList day={marketScheduleList[5].day}
          location={marketScheduleList[5].location}
          hours={marketScheduleList[5].hours}
          booth={marketScheduleList[5].booth}/>
      </div>
    );
  }
}

export default Day;

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

const day = {
  display: 'flex',
  width: '100%'
};
const weekdaylist = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  border: '1px solid black',
  width: '16.5%',
  // padding: '20px'
};

function Week() {
  return (
    <div style={day}>
      {marketScheduleList.map((week, index) =>
        <div style={weekdaylist}>
          <WeekDayList style={weekdaylist} day={week.day}
            location={week.location}
            hours={week.hours}
            booth={week.booth}
            key={index}/>
        </div>
      )}
    </div>
  );
}

export default Week;

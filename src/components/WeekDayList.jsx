import React from 'react';
import PropTypes from 'prop-types';


function WeekDayList(props) {
  return (
    <div>
      <h1>{props.day}</h1>
      <h4>{props.location}</h4>
      <h4>{props.hours}</h4>
      <h3>{props.booth}</h3>
    </div>

  );
}
WeekDayList.propType = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default WeekDayList;

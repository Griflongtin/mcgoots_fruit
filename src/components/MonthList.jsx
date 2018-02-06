import React from 'react';
import PropTypes from 'prop-types';

function MonthList(props){
  return (
    <div>
      <style jsx>{`
          ul {
            display: none;
            list-style: none;
            padding: 0;
          }

          .month-name:hover + ul {
            display: block;
          }
      `}</style>
      <h1 className="month-name">{props.month}</h1>
      <ul className="hide">
        {props.selection.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

MonthList.propType = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
};

export default MonthList;

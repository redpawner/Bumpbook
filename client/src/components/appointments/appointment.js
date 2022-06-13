import React from 'react';
import './css/appointment.css';

const Appointment = ({ aptInfo, first, delApt }) => {
  const prettyDate = new Date(aptInfo.date).toLocaleDateString('en-gb', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const daymonth = new Date(aptInfo.date).toLocaleDateString('en-gb', {
    day: 'numeric',
    month: 'short',
  });

  const time = new Date(aptInfo.date).toLocaleTimeString('en-gb', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const deleteApt = () => {
    delApt(aptInfo);
  };

  return (
    <>
      {first ? (
        <div className="first">
          <div className="firstLeft">{daymonth}</div>
          <div className="firstRight">
            <p className="title">{aptInfo.title}</p>
            <p>
              {time} - {prettyDate}
            </p>
          </div>
          <div className="delete" onClick={deleteApt}></div>
        </div>
      ) : (
        <div className="upcoming">
          <div className="upcomingLeft">
            {' '}
            <p className="title">{aptInfo.title}</p>
            <p>
              {time} - {prettyDate}
            </p>
          </div>

          <div className="delete" onClick={deleteApt}></div>
        </div>
      )}
    </>
  );
};

export default Appointment;

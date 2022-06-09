import React from 'react';
import './css/appointment.css';

const Appointment = ({ aptInfo, first, delApt }) => {
  const prettyDate = new Date(aptInfo.date).toLocaleDateString('en-gb', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
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
          <p className="title">Next appointment: {aptInfo.title}</p>
          <p>
            {time} - {prettyDate}
          </p>
          <div className="delete" onClick={deleteApt}></div>
        </div>
      ) : (
        <div className="upcoming">
          <p className="title">{aptInfo.title}</p>
          <p>
            {time} - {prettyDate}
          </p>
          <div className="delete" onClick={deleteApt}></div>
        </div>
      )}
    </>
  );
};

export default Appointment;

import React from 'react';

const Appointment = ({ aptInfo, first, id }) => {
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

  return (
    <>
      {first ? (
        <div className="first">
          <p className="title">Next appointment: {aptInfo.title}</p>
          <p>
            {time} - {prettyDate}
          </p>
        </div>
      ) : (
        <div className="first">
          <p className="title">{aptInfo.title}</p>
          <p>
            {time} - {prettyDate}
          </p>
        </div>
      )}
    </>
  );
};

export default Appointment;

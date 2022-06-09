import React from 'react';
import { delApt } from '../../services/api-client';
import './css/appointment.css';
import useUserStore from '../../states/user';

const Appointment = ({ aptInfo, first }) => {
  const appointments = useUserStore((state) => {
    return state.user.appointments;
  });

  const id = useUserStore((state) => {
    return state.user._id;
  });

  const updateAppointments = useUserStore((state) => {
    return state.updateAppointments;
  });

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
    console.log('this is the id:' + id);
    const del = { ...aptInfo };
    console.log(del);
    delApt(del);
    const newAppointments = [...appointments].filter((e) => e === aptInfo);
    updateAppointments(newAppointments);
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

import { addApt, delApt } from '../../services/api-client';
import useUserStore from '../../states/user';
import noOld from '../../utility/utils';
import Appointment from './appointment';
import './css/schedule.css';

const Schedule = () => {
  const accessToken = localStorage.getItem('accessToken');
  const appointments = useUserStore((state) => {
    return state.user.appointments;
  });
  const updateAppointments = useUserStore((state) => {
    return state.updateAppointments;
  });

  const deleteApt = (aptInfo) => {
    const del = { ...aptInfo };
    delApt(del, accessToken).catch((err) => console.log(err));
    const newAppointments = [...appointments].filter((e) => e !== aptInfo);
    updateAppointments(newAppointments);
  };

  const listAppointments = noOld(appointments)
    .sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    })
    .map((apt, index) => {
      return index === 0 ? (
        <Appointment
          aptInfo={apt}
          first="true"
          key={apt.title}
          delApt={(aptInfo) => deleteApt(aptInfo)}
        />
      ) : (
        <Appointment
          aptInfo={apt}
          key={apt.title}
          delApt={(aptInfo) => deleteApt(aptInfo)}
        />
      );
    });

  const submitApt = (event) => {
    event.preventDefault();

    const newApt = {
      title: event.target.title.value,
      date: event.target.date.value,
    };
    addApt(newApt, accessToken).catch((err) => console.log(err));
    const newAppointments = [...appointments, newApt];
    updateAppointments(newAppointments);
    event.target.reset();
  };

  return (
    <div className="schContainer">
      <div className="schHeader">
        <h2>Your Appointments</h2>
      </div>
      <div className="aptContainer">
        <div>{listAppointments}</div>
      </div>
      <div className="schFooter">
        <form onSubmit={submitApt}>
          <label htmlFor="title">Appointment name:</label>
          <input
            placeholder="First scan!"
            type="text"
            id="title"
            name="name"
            autoComplete="off"
            min={new Date()}
            required
          />
          <label htmlFor="date">Date and time:</label>
          <input
            type="datetime-local"
            name="date"
            id="date"
            autoComplete="off"
            min={new Date().toISOString().slice(0, 16)}
            required
          />
          <button className="aptSubmit" type="submit">
            Add appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Schedule;

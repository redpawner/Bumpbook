import { addApt, delApt } from '../../services/api-client';
import useUserStore from '../../states/user';
import noOld from '../../utility/utils';
import Appointment from './appointment';
import './css/schedule.css';

const Schedule = () => {
  const appointments = useUserStore((state) => {
    return state.user.appointments;
  });
  const id = useUserStore((state) => {
    return state.user._id;
  });
  const updateAppointments = useUserStore((state) => {
    return state.updateAppointments;
  });

  const deleteApt = (aptInfo) => {
    const del = { ...aptInfo, id };
    console.log(del);
    delApt(del);
    const newAppointments = [...appointments].filter((e) => e !== aptInfo);
    console.log(newAppointments);
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
    console.log(id);
    const newApt = {
      title: event.target.title.value,
      date: event.target.date.value,
      id: id,
    };
    addApt(newApt).catch((err) => console.log(err));
    const newAppointments = [
      ...appointments,
      { title: newApt.title, date: newApt.date },
    ];
    updateAppointments(newAppointments);
  };

  return (
    <div className="schContainer">
      <div className="aptContainer">
        <div>{listAppointments}</div>
      </div>
      <div className="schFooter">
        <form onSubmit={submitApt}>
          <label htmlFor="title">Title</label>
          <input
            placeholder="First scan!"
            type="text"
            id="title"
            name="name"
            required
          />
          <label htmlFor="date">Date and Time</label>
          <input
            type="datetime-local"
            name="date"
            id="date"
            min={new Date().toISOString().slice(0, 16)}
            required
          />
          <button className="submit" type="submit">
            Add new event
          </button>
        </form>
      </div>
    </div>
  );
};

export default Schedule;

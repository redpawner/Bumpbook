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

  // appointments: [{ title: String, date: Date }],
  const listAppointments = noOld(appointments)
    .sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    })
    .map((apt, index) => {
      return index === 0 ? (
        <Appointment aptInfo={apt} id={id} first="true" key={apt.title} />
      ) : (
        <Appointment aptInfo={apt} id={id} key={apt.title} />
      );
    });

  const submitApt = (event) => {
    event.preventDefault();
    const newApt = {
      title: event.target.title.value,
      date: event.target.date.value,
      id: id,
    };

    // register(newUser).then(() => {
    //   getUser({ email: newUser.email })
    //     .then((res) => update(res))
    //     .then(() => authorise())
    //     .catch((err) => console.log(err));
    // });
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

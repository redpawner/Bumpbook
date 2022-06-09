import { useState, React } from 'react';
import './css/dueCalc.css';
import useUserStore from '../states/user';
import { updDate, addApt } from '../services/api-client';

const DueCalc = ({ show, close }) => {
  const id = useUserStore((state) => {
    return state.user._id;
  });
  const updateDate = useUserStore((state) => {
    return state.updateDate;
  });
  const appointments = useUserStore((state) => {
    return state.user.appointments;
  });

  const updateAppointments = useUserStore((state) => {
    return state.updateAppointments;
  });

  const dDate = new Date(
    useUserStore((state) => {
      return state.user.dueDate;
    })
  );

  const prettyDate = new Date(dDate).toLocaleDateString('en-gb', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const [showDate, setShowDate] = useState(false);

  const submitDueDate = (event) => {
    event.preventDefault();
    const dueDate = new Date(event.target.pdate.value);
    dueDate.setMonth(dueDate.getMonth() - 3);
    dueDate.setYear(dueDate.getFullYear() + 1);
    dueDate.setDate(dueDate.getDate() + 7);

    updDate({ date: dueDate, id: id }).catch((err) => console.log(err));
    updateDate(dueDate);
    setShowDate(true);

    const newApt = {
      title: 'Baby Incoming!',
      date: dueDate,
      id: id,
    };
    addApt(newApt).catch((err) => console.log(err));
    const newAppointments = [
      ...appointments,
      { title: newApt.title, date: newApt.date },
    ];
    updateAppointments(newAppointments);
    event.target.reset();
  };

  return (
    <div className={`modal-container ${show ? 'show' : ''}`} onClick={close}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Due Date Calculator</h4>
          <button className="modal-btn" onClick={close}>
            Close
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={submitDueDate}>
            <label htmlFor="pdate">
              Please select the first day of your last menstrual period:
            </label>
            <input type="date" name="pdate" id="pdate" required />
            <button className="psubmit" type="submit">
              Calculate
            </button>
          </form>
        </div>
        <div className="modal-footer">
          {showDate ? (
            <h2>Your baby is due... {prettyDate}!</h2>
          ) : (
            <h2>Your baby is due... </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default DueCalc;

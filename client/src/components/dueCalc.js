import { useState, React } from 'react';
import './css/dueCalc.css';
import useUserStore from '../states/user';
import { updDate, addApt } from '../services/api-client';

const DueCalc = ({ show, setShow, close }) => {
  const accessToken = localStorage.getItem('accessToken');
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

  const calcDueDate = (event) => {
    event.preventDefault();
    const dueDate = new Date(event.target.pdate.value);
    dueDate.setMonth(dueDate.getMonth() - 3);
    dueDate.setYear(dueDate.getFullYear() + 1);
    dueDate.setDate(dueDate.getDate() + 7);

    updDate({ date: dueDate }, accessToken).catch((err) => console.log(err));
    updateDate(dueDate);
    setShowDate(true);

    const newApt = {
      title: 'Baby Incoming!',
      date: dueDate,
    };
    addApt(newApt, accessToken).catch((err) => console.log(err));
    const newAppointments = [...appointments, newApt];
    updateAppointments(newAppointments);
    event.target.reset();
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  const submitDueDate = (event) => {
    event.preventDefault();
    const dueDate = new Date(event.target.mandate.value);
    updDate({ date: dueDate }, accessToken).catch((err) => console.log(err));
    updateDate(dueDate);
    setShowDate(true);
    const newApt = {
      title: 'Baby Incoming!',
      date: dueDate,
    };
    addApt(newApt, accessToken).catch((err) => console.log(err));
    const newAppointments = [...appointments, newApt];
    updateAppointments(newAppointments);
    event.target.reset();
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <div className={`ddc-container ${show ? 'show' : ''}`} onClick={close}>
      <div className="ddc-content" onClick={(e) => e.stopPropagation()}>
        <div className="ddc-header">
          <h4 className="ddc-title">Due Date Calculator</h4>
          <button className="ddc-btn" onClick={close}>
            Close
          </button>
        </div>
        <div className="ddc-body">
          <form onSubmit={calcDueDate}>
            <label htmlFor="pdate">
              Please select the first day of your last menstrual period:
            </label>
            <input type="date" name="pdate" id="pdate" required />
            <button className="ddcsubmit" type="submit">
              Calculate
            </button>
          </form>
          <h2>OR</h2>
          <form onSubmit={submitDueDate}>
            <label htmlFor="mandate">
              Manually select or update the due date:
            </label>
            <input type="date" name="mandate" id="mandate" required />
            <button className="ddcsubmit" type="submit">
              Set Due Date
            </button>
          </form>
        </div>
        <div className="modal-footer">
          {showDate ? (
            <div>
              <h3>Your baby is due...</h3>
              <h2>{prettyDate}!</h2>
            </div>
          ) : (
            <h2>Your baby is due... </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default DueCalc;

import './infobar.css';
import useUserStore from '../../states/user';
import { useState } from 'react';
import DueCalc from '../dueCalc';

const Infobar = () => {
  const dueDate = useUserStore((state) => {
    return state.user.dueDate;
  });
  const [showDDC, setshowDDC] = useState(false);

  const prettyDate = new Date(dueDate).toLocaleDateString('en-gb', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const calcCount = () => {
    let now = new Date().getTime();
    let countDownDate = new Date(dueDate).getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let months = Math.floor(days / 30);
    let reDays = Math.floor(days % 30);
    return (
      <h2 className="countdown">
        {months} months and {reDays} days to go!
      </h2>
    );
  };

  const countdown = calcCount();

  return (
    <div className="infoContainer">
      <div className="infoHeader">
        <h2>Due Date Countdown</h2>
      </div>

      {dueDate ? (
        <>
          <div className="infoMain">
            <div>{countdown} </div>
            <svg className="clock"></svg>
            <h3> {prettyDate}</h3>

            <button
              className="ddcButton"
              onClick={() => {
                setshowDDC(true);
              }}
            >
              Update Due Date
            </button>
            <DueCalc
              show={showDDC}
              setShow={setshowDDC}
              close={() => {
                setshowDDC(false);
              }}
            />
          </div>
        </>
      ) : (
        <div className="infoMain">
          <h3>Lets get started by inputting your due date.</h3>
          <br />
          <h3>Click the button below to open the calculator!</h3>
          <br></br>
          <button
            className="ddcButton"
            onClick={() => {
              setshowDDC(true);
            }}
          >
            Due Date Calculator
          </button>
          <DueCalc
            show={showDDC}
            setShow={setshowDDC}
            close={() => {
              setshowDDC(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Infobar;

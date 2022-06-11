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
      <p className="countdown">
        {months} months and {reDays} days to go!
      </p>
    );
  };

  const countdown = calcCount();

  return (
    <div className="infoContainer">
      <div className="countdownContainer">
        <button
          onClick={() => {
            setshowDDC(true);
          }}
        >
          Due Date Calculator
        </button>
        <DueCalc
          show={showDDC}
          close={() => {
            setshowDDC(false);
          }}
        />
        <h2>Due Date Countdown</h2>
        {dueDate ? (
          <div>
            {countdown}
            {prettyDate}
          </div>
        ) : (
          <div>
            <p>Use due date calculator to initiate the countdown!</p>
          </div>
        )}
      </div>
      <div className="schFooter"></div>
    </div>
  );
};

export default Infobar;

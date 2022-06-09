import './infobar.css';
import useUserStore from '../../states/user';

const Infobar = () => {
  const dueDate = useUserStore((state) => {
    return state.user.dueDate;
  });
  const prettyDate = new Date(dueDate).toLocaleDateString('en-gb', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="infoContainer">
      <div className="countdownContainer">
        <h2>Due Date Countdown</h2>
        {dueDate ? (
          <div>{prettyDate}</div>
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

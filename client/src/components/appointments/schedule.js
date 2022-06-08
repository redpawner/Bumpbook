import useUserStore from '../../states/user';
import './css/schedule.css';

const Schedule = () => {
  const appointments = useUserStore((state) => {
    return state.appointments;
  });

  return (
    <div>
      <p>appointments list</p>
    </div>
  );
};

export default Schedule;

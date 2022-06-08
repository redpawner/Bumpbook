import useUserStore from '../states/user';
import Landing from './landing';
import './css/dashboard.css';
import Picturereel from './picturereel/picturereel';
import Infobar from './infobar/infobar';
import Schedule from './appointments/schedule';

const Dashboard = () => {
  const isAuthenticated = useUserStore((state) => {
    return state.user.authenticated;
  });

  return (
    <div className="dashboard">
      {isAuthenticated ? (
        <>
          <div className="homeContainer">
            <Schedule />
            <Infobar />
            <Picturereel />
          </div>
        </>
      ) : (
        <>
          <Landing />
        </>
      )}
    </div>
  );
};

export default Dashboard;

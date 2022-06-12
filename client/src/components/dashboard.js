import useUserStore from '../states/user';
import Landing from './landing';
import './css/dashboard.css';
import Picturereel from './picturereel/picturereel';
import Infobar from './infobar/infobar';
import Schedule from './appointments/schedule';

const Dashboard = () => {
  const isAuthenticated = useUserStore((state) => {
    return state.authenticated;
  });

  return (
    <div className="dashboard">
      {isAuthenticated ? (
        <div className="mainContainer">
          <div className="leftContainer">
            <div className="topbarleft">
              <div className="logo"></div>
            </div>
            <div className="bottombarleft">
              <Schedule />
            </div>
          </div>
          <div className="rightContainer">
            <div className="topbar">
              <Infobar />
              <Infobar />
              <Infobar />
            </div>
            <div className="bottombar">
              <Picturereel />
            </div>
          </div>
        </div>
      ) : (
        <Landing />
      )}
    </div>
  );
};

export default Dashboard;

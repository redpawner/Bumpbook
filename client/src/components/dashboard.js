import useUserStore from '../states/user';
import Landing from './landing';
import './css/dashboard.css';
import Picturereel from './picturereel/picturereel';
import Infobar from './infobar/infobar';
import Schedule from './appointments/schedule';
import NameGen from './nameGen/nameGen';
import LinkGen from './linkGen/linkGen';

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
              <div className="logo" role="img" alt="Bumpbook logo"></div>
            </div>
            <div className="bottombarleft">
              <Schedule />
            </div>
          </div>
          <div className="rightContainer">
            <div className="topbar">
              <Infobar />
              <NameGen />
              <LinkGen />
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

import './css/navbar.css';
import useUserStore from '../states/user';
import Logout from './logout/logout';

const Navbar = () => {
  const isAuthenticated = useUserStore((state) => {
    return state.authenticated;
  });
  const firstName = useUserStore((state) => {
    return state.user.firstName;
  });

  return (
    <div className="navbar">
      {isAuthenticated ? (
        <>
          <div className="fill"></div>
          <div className="intro">
            <h1>{firstName}'s Bumpbook</h1>
          </div>
          <div className="logout">
            <Logout />
          </div>
        </>
      ) : (
        <>
          <div className="fill"></div>
          <div className="intro">
            <h1>Open your Bumpbook...</h1>
          </div>
          <div className="fill"></div>
        </>
      )}
    </div>
  );
};

export default Navbar;

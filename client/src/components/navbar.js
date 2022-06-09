import './css/navbar.css';
import useUserStore from '../states/user';
import DueCalc from './dueCalc';
import { useState, React } from 'react';

const Navbar = () => {
  const [showDDC, setshowDDC] = useState(false);
  const isAuthenticated = useUserStore((state) => {
    return state.authenticated;
  });

  return (
    <div className="navbar">
      {isAuthenticated ? (
        <>
          <h1>Navbar is authenticated</h1>
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
        </>
      ) : (
        <>
          <h1 className="welcome">Open your Bumpbook...</h1>
        </>
      )}
    </div>
  );
};

export default Navbar;

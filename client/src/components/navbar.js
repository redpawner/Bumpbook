import React from 'react';
import './css/navbar.css';
import useUserStore from '../states/user';

const Navbar = () => {
  const isAuthenticated = useUserStore((state) => {
    return state.authenticated;
  });
  return (
    <div className="navbar">
      {isAuthenticated ? (
        <>
          <h1>Navbar is authenticated</h1>
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

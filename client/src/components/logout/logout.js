import React from 'react';
import useUserStore from '../../states/user';
import './logout.css';

const Logout = () => {
  const logout = useUserStore((state) => {
    return state.logout;
  });
  const handleOnClick = () => {
    window.localStorage.removeItem('accessToken');
    logout();
  };

  return (
    <button onClick={handleOnClick} className="logoutButton">
      Logout
    </button>
  );
};

export default Logout;

import React from 'react';

const Logout = () => {
  const accessToken = localStorage.getItem('accessToken');
  const handleOnClick = () => {
    console.log(accessToken);
    window.localStorage.removeItem('accessToken');
    console.log(accessToken);
  };

  return <button onClick={handleOnClick}>Logout</button>;
};

export default Logout;

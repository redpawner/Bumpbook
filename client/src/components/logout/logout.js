import React from 'react';
import useUserStore from '../../states/user';
import './logout.css';

const Logout = () => {
  const logout = useUserStore((state) => {
    return state.logout;
  });
  const updateUser = useUserStore((state) => {
    return state.updateUser;
  });

  const setInfoLinks = useUserStore((state) => {
    return state.setInfoLinks;
  });
  const setWeekLinks = useUserStore((state) => {
    return state.setWeekLinks;
  });

  const handleOnClick = () => {
    window.localStorage.removeItem('accessToken');
    const clear = {
      _id: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      dueDate: null,
      favNames: [],
      appointments: [],
      pictures: [],
    };
    updateUser(clear);
    setInfoLinks([]);
    setWeekLinks([]);

    logout();
  };

  return (
    <button onClick={handleOnClick} className="logoutButton">
      Logout
    </button>
  );
};

export default Logout;

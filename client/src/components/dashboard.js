import React from 'react';
import useUserStore from '../states/user';
import Landing from './landing';

const Dashboard = () => {
  const isAuthenticated = useUserStore((state) => {
    return state.authenticated;
  });

  return (
    <div className="dashboard">
      {isAuthenticated ? (
        <>
          <div>Main page</div>
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

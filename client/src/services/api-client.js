const baseUrl = 'http://localhost:3001';

export const getUser = (accessToken) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return fetch(baseUrl + '/user', options)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
};

export const register = (newUser) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUser),
  };
  return fetch(baseUrl + '/register', options)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
};

export const login = (user) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };
  return fetch(baseUrl + '/login', options)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
};

export const updDate = (date, accessToken) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(date),
  };
  return fetch(baseUrl + '/date', options)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
};

export const addApt = (apt, accessToken) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(apt),
  };
  return fetch(baseUrl + '/appointment', options)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
};

export const delApt = (aptId, accessToken) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(aptId),
  };
  return fetch(baseUrl + '/appointment', options)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
};

// updApt

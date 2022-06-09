const baseUrl = 'http://localhost:3001';

export function getUser(email) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(email),
  };
  return fetch(baseUrl + '/user', options)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
}

export function register(newUser) {
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
}

export function addApt(apt) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(apt),
  };
  return fetch(baseUrl + '/appointment', options)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
}

export function delApt(aptId) {
  const options = {
    method: 'DEL',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(aptId),
  };
  return fetch(baseUrl + '/appointment', options)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
}

// updApt

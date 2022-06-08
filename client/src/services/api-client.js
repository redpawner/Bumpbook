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

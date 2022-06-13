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

export const logout = (tokenName) => {
  localStorage.removeItem(tokenName);
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

export const addPicture = (pic, accessToken) => {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: pic,
  };
  return fetch(baseUrl + '/pictures', options)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
};

export const getPic = (url, accessToken) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(url),
  };
  return fetch(baseUrl + '/getpictures', options)
    .then((res) => res.blob())
    .then((res) => {
      return URL.createObjectURL(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addName = (name, accessToken) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(name),
  };
  return fetch(baseUrl + '/name', options)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
};

export const delName = (name, accessToken) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(name),
  };
  return fetch(baseUrl + '/name', options)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
};

export const genName = (sex, accessToken) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(sex),
  };
  return fetch(baseUrl + '/getname', options)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
};

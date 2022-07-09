import { register, getUser, login } from '../services/api-client';
import useUserStore from '../states/user';
import './css/landing.css';
import { useState } from 'react';

const Landing = () => {
  const [status, setStatus] = useState('');
  const [exists, setExists] = useState('');
  const authorise = useUserStore((state) => state.login);
  const update = useUserStore((state) => state.updateUser);

  const submitRegister = (event) => {
    event.preventDefault();
    const newUser = {
      email: event.target.email.value,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      password: event.target.password.value,
    };

    register(newUser)
      .then((response) => {
        if (response.error) {
          setExists(`${response.message}`);
          setTimeout(() => setExists(''), 2000);
        } else {
          const { accessToken } = response;
          localStorage.setItem('accessToken', accessToken);
          getUser(accessToken)
            .then((res) => update(res))
            .then(() => authorise())
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitLogin = (event) => {
    event.preventDefault();
    const user = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    login(user)
      .then((response) => {
        if (response.error) {
          setStatus(`${response.message}`);
          setTimeout(() => setStatus(''), 2000);
        } else {
          const { accessToken } = response;
          localStorage.setItem('accessToken', accessToken);
          getUser(accessToken)
            .then((res) => update(res))
            .then(() => authorise())
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="landingContainer">
      <div className="formContainer vert">
        <div className="formHeader">
          <h2 className="formtitle">Register</h2>
        </div>
        <form onSubmit={submitRegister}>
          <label htmlFor="email">Email</label>
          <input
            placeholder="babyontheway@bump.com"
            type="text"
            id="email"
            name="email"
            min=""
            autoComplete="off"
            required
          />
          <label htmlFor="firstName">First Name</label>
          <input
            placeholder="Bunin"
            type="text"
            id="firstName"
            name="firstName"
            min="2"
            autoComplete="off"
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            placeholder="Theoven"
            type="text"
            id="lastName"
            min="2"
            name="lastName"
            autoComplete="off"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="********"
            name="password"
            id="password"
            min="8"
            required
            autoComplete="off"
          />
          <button type="submit" className="landing-btn">
            Create account
          </button>
          <h4>{exists}</h4>
        </form>
      </div>
      <div className="logoL" role="img" alt="Bumpbook logo"></div>
      <div className="formContainer invert">
        <div className="formHeader">
          <h2 className="formtitle">Login</h2>
        </div>
        <form className="login" onSubmit={submitLogin}>
          <label htmlFor="email2">Email</label>
          <input
            placeholder="superhuman@bump.com"
            type="text"
            id="email2"
            name="email"
            autoComplete="off"
            autoCorrect="off"
            autoFocus="on"
            required
          />
          <label htmlFor="password2">Password</label>
          <input
            placeholder="********"
            type="password"
            id="password2"
            name="password"
            min="8"
            autoComplete="new-password"
            required
          />
          <button className="landing-btn" type="submit">
            Login
          </button>
          <h4>{status}</h4>
        </form>
      </div>
    </div>
  );
};

export default Landing;

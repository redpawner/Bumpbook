import React from 'react';
import { register, getUser } from '../services/api-client';
import useUserStore from '../states/user';
import './css/landing.css';

const Landing = () => {
  const authorise = useUserStore((state) => state.login);
  const update = useUserStore((state) => state.updateUser);
  const test = useUserStore((state) => state);

  const submitRegister = (event) => {
    event.preventDefault();
    const newUser = {
      email: event.target.email.value,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      password: event.target.password.value,
    };
    register(newUser).then(() => {
      getUser({ email: newUser.email })
        .then((res) => update(res))
        .then(() => authorise());
    });
    console.log(test);
  };

  return (
    <div className="landingContainer">
      <div className="formContainer">
        <div className="formHeader">
          <h1 className="formtitle">Register</h1>
        </div>
        <form onSubmit={submitRegister}>
          <label>Email</label>
          <input
            placeholder="babyontheway@bump.com"
            type="text"
            name="email"
            required
          />
          <label>First Name</label>
          <input placeholder="Bunin" type="text" name="firstName" required />
          <label>Last Name</label>
          <input placeholder="Theoven" type="text" name="lastName" required />
          <label>Password</label>
          <input placeholder="********" name="password" required />
          <button type="submit"> Create account </button>
        </form>
      </div>
      <div className="logo">
        <div className="pixelart-to-css"></div>
      </div>
      <div className="formContainer">
        <div className="formHeader">
          <h1 className="formtitle">Login</h1>
        </div>
        <form className="login">
          <label>Email</label>
          <input
            placeholder="superhuman@bump.com"
            type="text"
            name="email"
            required
          />
          <label>Password</label>
          <input placeholder="********" name="password" required />
          <button type="submit"> Login </button>
        </form>
        <h1>{test.user.email}</h1>
      </div>
    </div>
  );
};

export default Landing;

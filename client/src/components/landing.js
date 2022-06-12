import { register, getUser, login } from '../services/api-client';
import useUserStore from '../states/user';
import './css/landing.css';

const Landing = () => {
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
          alert(`${response.message}`);
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
          alert(`${response.message}`);
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
      <div className="formContainer">
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
            required
          />
          <label htmlFor="firstName">First Name</label>
          <input
            placeholder="Bunin"
            type="text"
            id="firstName"
            name="firstName"
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            placeholder="Theoven"
            type="text"
            id="lastName"
            name="lastName"
            required
          />
          <label htmlFor="password">Password</label>
          <input placeholder="********" name="password" required />
          <button type="submit" className="landing-btn">
            Create account
          </button>
        </form>
      </div>
      <div className="logoL"></div>
      <div className="formContainer">
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
            required
          />
          <label htmlFor="password2">Password</label>
          <input
            placeholder="********"
            id="password2"
            name="password"
            required
          />
          <button className="landing-btn" type="submit">
            Login
          </button>
        </form>
        {/* {test.authenticated ? <h1>working</h1> : <h1>not working</h1>}
        <h1>{test.user.email}</h1> */}
      </div>
    </div>
  );
};

export default Landing;

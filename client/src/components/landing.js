import './css/landing.css';

const Landing = () => {
  return (
    <div>
      <h1>Form time</h1>
      <div className="formContainer">
        <h1 className="formtitle">Create a new event</h1>
        <form>
          <label>TITLE</label>
          <input
            placeholder="Insert a title..."
            type="text"
            name="title"
            required
          />
          <label>DATE</label>
          <input
            type="datetime-local"
            name="date"
            min={new Date().toISOString().slice(0, 16)}
            required
          />
          <label>VENUE</label>
          <input placeholder="Insert a venue..." name="venue" required />
          <button type="submit"> Create </button>
        </form>
      </div>
      <img></img>
      <form></form>
    </div>
  );
};

export default Landing;

import './genModal.css';
import { useState, React } from 'react';
import { addName, genName } from '../../services/api-client';
import useUserStore from '../../states/user';

const GenModal = ({ show, close }) => {
  const accessToken = localStorage.getItem('accessToken');
  const initial = 'Generate or input name above';
  const [chosenName, setchosenName] = useState(initial);
  const favNames = useUserStore((state) => {
    return state.user.favNames;
  });
  const updateFavNames = useUserStore((state) => {
    return state.updateFavNames;
  });

  const closeIt = () => {
    setchosenName(initial);
    close();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    genName({ sex: event.target.sexSelect.value }, accessToken).then((res) =>
      setchosenName(res.name)
    );
    event.target.reset();
  };

  const updateName = (event) => {
    event.preventDefault();
    setchosenName(event.target.value);
  };

  const handleSave = (event) => {
    event.preventDefault();
    const newName = { name: chosenName, sex: event.target.sexSelect2.value };
    addName(newName, accessToken);
    const newFaveNames = [...favNames, newName];
    updateFavNames(newFaveNames);
    event.target.reset();
  };

  return (
    <div className={`gm-container ${show ? 'show' : ''}`} onClick={closeIt}>
      <div className="gm-content" onClick={(e) => e.stopPropagation()}>
        <div className="gm-header">
          <h4 className="gm-title">Generate Name</h4>
          <button className="gm-btn" onClick={close}>
            Close
          </button>
        </div>
        <div className="gm-body">
          <form className="gm-form1" onSubmit={handleSubmit}>
            <div className="generatorArea">
              <label htmlFor="sexSelect">
                Sex:&nbsp;
                <select id="sexSelect" name="sexSelect">
                  <option value="boy">Boy</option>
                  <option value="girl">Girl</option>
                </select>
              </label>
              <button className="gmSubmit" type="submit">
                Generate Name
              </button>
            </div>
          </form>
          <form className="gm-form2">
            <label>
              Enter name:&nbsp;
              <input
                onChange={updateName}
                type="text"
                name="manualName"
                placeholder="Bean"
              ></input>
            </label>
          </form>
          <h2>*{chosenName}*</h2>
          <form className="gm-form3" onSubmit={handleSave}>
            <label htmlFor="sexSelect2">
              Save to&nbsp;
              <select id="sexSelect2" name="sexSelect2">
                <option value="boy">Boy</option>
                <option value="girl">Girl</option>
                <option value="both">Boy & Girl</option>
              </select>
              &nbsp; list.
              <button className="gmSubmit" type="submit">
                Save Name
              </button>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GenModal;

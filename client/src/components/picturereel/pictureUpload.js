import React from 'react';
import { useState } from 'react';
import { addPicture } from '../../services/api-client';
import useUserStore from '../../states/user';
import './pictureUpload.css';

const PictureUpload = ({ show, close }) => {
  const accessToken = localStorage.getItem('accessToken');
  const pictures = useUserStore((state) => {
    return state.user.pictures;
  });
  const updatePictures = useUserStore((state) => {
    return state.updatePictures;
  });

  const [image, setImage] = useState({ preview: '', data: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    let pic = new FormData();
    pic.append('date', event.target.picdate.value);
    pic.append('bumpImage', event.target.picfile.files[0]);
    const url = {
      url: URL.createObjectURL(event.target.picfile.files[0]),
      date: JSON.stringify(event.target.picdate.value),
    };
    addPicture(pic, accessToken)
      .then((res) => {
        const newPics = [...pictures, res];
        updatePictures(newPics);
      })
      .catch((err) => console.log(err));
    event.target.reset();
    setStatus('Bump added!');
    setTimeout(() => {
      close();
    }, 1000);
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  return (
    <div className={`pu-container ${show ? 'show' : ''}`} onClick={close}>
      <div className="pu-content" onClick={(e) => e.stopPropagation()}>
        <div className="pu-header">
          <h4 className="pu-title">Upload Bump Picture</h4>
          <button className="pu-btn" onClick={close}>
            Close
          </button>
        </div>

        <div className="pu-body">
          <form onSubmit={handleSubmit}>
            <label htmlFor="picfile">Choose your picture: </label>
            <input
              className="fileInput"
              type="file"
              name="picfile"
              id="picfile"
              onChange={handleFileChange}
              required
            ></input>
            <div className="preview">
              {image.preview && (
                <img src={image.preview} width="100" height="100" />
              )}
            </div>
            <label htmlFor="picdate">When was it taken?</label>
            <input type="date" name="picdate" id="picdate" required></input>
            {status}
            <button className="puSubmit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PictureUpload;

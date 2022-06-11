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

    //add response
  };

  // const handleFileChange = (e) => {
  //   const img = {
  //     preview: URL.createObjectURL(e.target.files[0]),
  //     data: e.target.files[0],
  //   };
  //   setImage(img);
  // };

  return (
    <div className={`modal-container ${show ? 'show' : ''}`} onClick={close}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Upload Belly Picture</h4>
          <button className="modal-btn" onClick={close}>
            Close
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <label htmlFor="picfile">Upload belly picture</label>
            <input
              type="file"
              name="picfile"
              id="picfile"
              // onChange={handleFileChange}
            ></input>
            <label htmlFor="picdate">When did you take it?</label>
            <input type="date" name="picdate" id="picdate"></input>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="modal-footer">
          <p>footer</p>
        </div>
      </div>
    </div>
  );
};

export default PictureUpload;

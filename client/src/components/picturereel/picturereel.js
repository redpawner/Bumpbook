import './picturereel.css';
import { useState, React } from 'react';
import { addPicture } from '../../services/api-client';

const Picturereel = () => {
  const accessToken = localStorage.getItem('accessToken');
  const [image, setImage] = useState({ preview: '', data: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let pic = new FormData();
    pic.append('file', image.data);
    let now = new Date();
    let finalimage = { pic, date: now };
    let response = addPicture(finalimage, accessToken);
    if (response) setStatus(response.statusText);
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  return (
    <div className="reelContainer">
      <h1>Upload belly pic</h1>
      {image.preview && (
        <img
          src={image.preview}
          width="100"
          height="100"
          alt="upload preview"
        />
      )}

      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={handleFileChange}></input>
        <button type="submit">Submit</button>
      </form>
      {status && <h4>{status}</h4>}
    </div>
  );
};

export default Picturereel;

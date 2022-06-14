import { getPic } from '../../services/api-client';
import { useState, React } from 'react';
import './picture.css';

const Picture = ({ picInfo, close }) => {
  const accessToken = localStorage.getItem('accessToken');
  const [img, setImg] = useState();

  const url = {
    url: picInfo.url,
  };

  getPic(url, accessToken).then((res) => setImg(res));

  const handleClick = () => {
    close(picInfo);
  };

  return (
    <div className="picContainer">
      <img className="picture" src={img} alt="user bumppic"></img>
      <button onClick={handleClick} className="pic-btn">
        X
      </button>
    </div>
  );
};

export default Picture;

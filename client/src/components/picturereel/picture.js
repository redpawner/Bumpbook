import { getPic } from '../../services/api-client';
import { useState, React } from 'react';
import { useEffect } from 'react';
import './picture.css';

const Picture = ({ picInfo }) => {
  const accessToken = localStorage.getItem('accessToken');
  const [img, setImg] = useState();

  const url = {
    url: picInfo.url,
  };

  useEffect(() => {
    getPic(url, accessToken).then((res) => setImg(res));
  }, []);

  return (
    <div className="picContainer">
      <img className="picture" src={img} alt="user uploaded image"></img>
    </div>
  );
};

export default Picture;

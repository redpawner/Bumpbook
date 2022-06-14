import { useState } from 'react';
import './picturereel.css';
import PictureUpload from './pictureUpload';
import useUserStore from '../../states/user';
import Picture from './picture';
import { delPicture } from '../../services/api-client';

const Picturereel = () => {
  const [showPU, setshowPU] = useState(false);
  const pictures = useUserStore((state) => {
    return state.user.pictures;
  });
  const updatePictures = useUserStore((state) => {
    return state.updatePictures;
  });
  const accessToken = localStorage.getItem('accessToken');

  const close = (pic) => {
    const body = { url: pic.url, date: pic.date };
    delPicture(body, accessToken).catch((err) => console.log(err));
    const newPictures = [...pictures].filter((e) => e.url !== pic.url);
    updatePictures(newPictures);
  };

  const showPictures = pictures
    .sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    })
    .map((pic) => {
      return <Picture picInfo={pic} key={pic.url} close={(i) => close(i)} />;
    });

  return (
    <div className="reelContainer">
      <PictureUpload
        show={showPU}
        close={() => {
          setshowPU(false);
        }}
      />
      <div className="reelHeader">
        <div className="reelFill"></div>
        <div>
          <h2>Your Bumpreel</h2>
        </div>
        <div className="uploadButton">
          <button
            className="upload-btn"
            onClick={() => {
              setshowPU(true);
            }}
          >
            Upload Bump
          </button>
        </div>
      </div>
      <div className="reel">{showPictures}</div>
    </div>
  );
};

export default Picturereel;

import { useState } from 'react';
import './picturereel.css';
import PictureUpload from './pictureUpload';
import useUserStore from '../../states/user';
import Picture from './picture';

const Picturereel = () => {
  const [showPU, setshowPU] = useState(false);
  const pictures = useUserStore((state) => {
    return state.user.pictures;
  });

  const showPictures = pictures
    .sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    })
    .map((pic) => {
      return (
        <div className="test">
          <Picture picInfo={pic} key={pic.url} />
        </div>
      );
    });

  return (
    <div className="reelContainer">
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
          <PictureUpload
            show={showPU}
            close={() => {
              setshowPU(false);
            }}
          />
        </div>
      </div>

      <div className="reel">{showPictures}</div>
    </div>
  );
};

export default Picturereel;

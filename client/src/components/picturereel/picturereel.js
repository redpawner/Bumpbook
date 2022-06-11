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
      return new Date(a.date) + new Date(b.date);
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
      <div className="reel">{showPictures}</div>
      <div className="uploadButton">
        {' '}
        <button
          onClick={() => {
            setshowPU(true);
          }}
        >
          Upload Pic
        </button>
        <PictureUpload
          show={showPU}
          close={() => {
            setshowPU(false);
          }}
        />
      </div>
    </div>
  );
};

export default Picturereel;

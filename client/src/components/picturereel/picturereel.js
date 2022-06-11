import { useState } from 'react';
import './picturereel.css';
import PictureUpload from './pictureUpload';

const Picturereel = () => {
  const [showPU, setshowPU] = useState(false);
  return (
    <div className="reelContainer">
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
  );
};

export default Picturereel;

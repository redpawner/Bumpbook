import { React, useState } from 'react';
import { delName } from '../../services/api-client';
import useUserStore from '../../states/user';
import GenModal from './genModal';
import Name from './name';
import './nameGen.css';

const NameGen = () => {
  const [showGM, setshowGM] = useState(false);
  const [showSS, setshowSS] = useState(false);
  const accessToken = localStorage.getItem('accessToken');
  const favNames = useUserStore((state) => {
    return state.user.favNames;
  });
  const updateFavNames = useUserStore((state) => {
    return state.updateFavNames;
  });

  const del = (name) => {
    delName(name, accessToken);
    const newFavNames = [...favNames].filter((e) => e !== name);

    updateFavNames(newFavNames);
  };

  const genBoyList = favNames
    .filter((e) => {
      if (e.sex !== 'girl') return e;
    })
    .map((favName) => {
      return <Name name={favName} key={favName.name} del={(i) => del(i)} />;
    });

  const genGirlList = favNames
    .filter((e) => {
      if (e.sex !== 'boy') return e;
    })
    .map((favName) => {
      return <Name name={favName} key={favName.name} del={(i) => del(i)} />;
    });
  // const genGirlList = favNames
  //   .filter((e) => {
  //     if (e.sex !== 'boy') return e;
  //   })
  //   .map((favName) => {
  //     return (<div className="nameContainer">
  //     <p className='nameTag'>{favName.name}</p>
  //   </div>)
  //   });

  return (
    <div className="ngContainer">
      <div className="ngHeader">
        <h2>Your Favourite Names</h2>
      </div>
      <GenModal
        show={showGM}
        close={() => {
          setshowGM(false);
        }}
      ></GenModal>
      <div className="ngMain">
        <div className="nameList">
          <div className="nameListBoy">
            <h3>
              <u>Boy names:</u>
            </h3>
            <div className="list">{genBoyList}</div>
          </div>
          <div className="nameListGirl">
            <h3>
              <u>Girl names:</u>
            </h3>
            <div className="list">{genGirlList}</div>
          </div>
        </div>
        <div className="ngFooter">
          <button
            className="ngButton"
            onClick={() => {
              setshowGM(true);
            }}
          >
            Add Name
          </button>
          <button
            className="ngButton"
            onClick={() => {
              setshowSS(true);
            }}
          >
            Select Sex
          </button>
        </div>
      </div>
    </div>
  );
};

export default NameGen;

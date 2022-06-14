import { React, useState, useEffect } from 'react';
import './linkGen.css';
import useUserStore from '../../states/user';
import { calculatePregMonths } from '../../utility/utils';
import { queryNHS } from '../../services/api-client';

const LinkGen = () => {
  // const [infoLinks, setInfolinks] = useState('');
  // const [weekLinks, setWeeklinks] = useState('');
  const dueDate = useUserStore((state) => {
    return state.user.dueDate;
  });

  // const linkGetter = (months) => {
  //   if (months > 6.5) {
  //     queryNHS({ url: 'finding-out/' }).then((res) => console.log(res));
  //     queryNHS({ url: 'week-by-week/1-to-12/' }).then((res) =>
  //       setWeeklinks(res)
  //     );
  //   } else if (months > 3) {
  //     queryNHS('keeping-well/');
  //     queryNHS('week-by-week/13-to-27/');
  //   } else {
  //     queryNHS('labour-and-birth/');
  //     queryNHS('week-by-week/28-to-40-plus/');
  //   }
  // };

  // useEffect(() => {
  //   let months = calculatePregMonths(dueDate);
  //   linkGetter(months);
  // }, []);

  return (
    <div className="lgContainer">
      <div className="lgHeader">
        <h2>Link Generator</h2>
      </div>
      <div className="lgMain"></div>
    </div>
  );
};

export default LinkGen;

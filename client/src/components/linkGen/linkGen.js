import { React, useEffect } from 'react';
import './linkGen.css';
import useUserStore from '../../states/user';
import { calculatePregMonths } from '../../utility/utils';
import { queryNHS } from '../../services/api-client';

const LinkGen = () => {
  const weekLinks = useUserStore((state) => {
    return state.weekLinks;
  });
  const setWeekLinks = useUserStore((state) => {
    return state.setWeekLinks;
  });
  const infoLinks = useUserStore((state) => {
    return state.infoLinks;
  });
  const setInfoLinks = useUserStore((state) => {
    return state.setInfoLinks;
  });
  const dueDate = useUserStore((state) => {
    return state.user.dueDate;
  });

  const linkGetter = (months) => {
    if (months > 6.5) {
      queryNHS({ url: 'finding-out/' }).then((res) => setInfoLinks([...res]));
      queryNHS({ url: 'week-by-week/1-to-12/' }).then((res) =>
        setWeekLinks([...res])
      );
    } else if (months > 3) {
      queryNHS({ url: 'keeping-well/' }).then((res) => setInfoLinks([...res]));
      queryNHS({ url: 'week-by-week/13-to-27/' }).then((res) =>
        setWeekLinks([...res])
      );
    } else {
      queryNHS({ url: 'labour-and-birth/' }).then((res) =>
        setInfoLinks([...res])
      );
      queryNHS({ url: 'week-by-week/28-to-40-plus/' }).then((res) =>
        setWeekLinks([...res])
      );
    }
  };

  const infoLinkList = infoLinks.map((link) => {
    return (
      <a href={link.url} key={link.headline} target="_blank" rel="noreferrer">
        » {link.headline}
      </a>
    );
  });

  const weekLinkList = weekLinks.map((link) => {
    return (
      <a href={link.url} key={link.headline} target="_blank" rel="noreferrer">
        » {link.headline}
      </a>
    );
  });

  useEffect(() => {
    if (!dueDate) return;
    setInfoLinks([]);
    setWeekLinks([]);
    let months = calculatePregMonths(dueDate);
    linkGetter(months);
  }, [dueDate]);

  return (
    <div className="lgContainer">
      <div className="lgHeader">
        <h2>Useful Links</h2>
      </div>
      <div className="lgMain">
        <div className="generalInfo">
          <h4>General Info</h4>
          {infoLinkList}
        </div>
        <div className="weekInfo">
          <h4>Week by Week</h4>
          {weekLinkList}
        </div>
      </div>
    </div>
  );
};

export default LinkGen;

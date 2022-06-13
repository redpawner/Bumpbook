import React from 'react';
import './name.css';

const Name = ({ name, del }) => {
  const remove = () => {
    del(name);
  };

  return (
    <p className="nameTag" onClick={remove}>
      {name.name}
    </p>
  );
};

export default Name;

const noOld = (list) => {
  let result = list.filter((event) => {
    return new Date(event.date) > Date.now();
  });
  return result;
};

export default noOld;

const removeOldApts = (list) => {
  let result = list.filter((event) => {
    return new Date(event.date) > Date.now();
  });
  return result;
};

const calculatePregMonths = (dueDate) => {
  let now = new Date().getTime();
  let countDownDate = new Date(dueDate).getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let months = Math.floor(days / 30);
  return months;
};

export { removeOldApts, calculatePregMonths };

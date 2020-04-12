export const convertDaysBy3 = (days) => Math.floor(days / 3);

export const convertWeeksByDays = (weeks) => {
  const days = Math.floor(weeks * 7);
  return days / 3;
};

export const convertMonthsByDays = (months) => {
  const days = Math.floor(months * 30);
  return days / 3;
};

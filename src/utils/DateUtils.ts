import dayjs from 'dayjs';

const today = dayjs();

const startOfWeek = today.startOf('week');
const endOfWeek = today.endOf('week');

const startOfMonth = today.startOf('month');
const endOfMonth = today.endOf('month');

const startOfYear = today.startOf('year');
const endOfYear = today.endOf('year');

export const setWeeklyCalendar = (month: any) => {
  const weeklyDays = [];
  for (let i = 0; i < 7; i++) {
    weeklyDays.push(startOfWeek.add(i, 'day').format('D'));
  }
  return weeklyDays;
};

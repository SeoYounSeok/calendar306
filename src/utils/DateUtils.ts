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

export const convertDateFormat = (initDate : Date) => {
  const dayName: string[] = ['일', '월', '화', '수', '목', '금', '토'];
  var year = initDate.getFullYear();
  var month : string | number = initDate.getMonth() + 1;
  var date : string | number = initDate.getDate();
  var day = dayName[initDate.getDay()];
  month = month >= 10 ? month : '0' + month;
  date = date >= 10 ? date : '0' + date;  
  return `${year}.${month}.${date}(${day})`
}

export const convertTimeFormat = (initDate : Date) => {
  var hours = initDate.getHours();
  var minutes = initDate.getMinutes();
  var meridiem = hours < 12 ? '오전' : '오후';
  return `${meridiem} ${hours}:${minutes}`; 
}


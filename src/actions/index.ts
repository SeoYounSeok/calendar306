import {MonthActionTypes} from './types';

const nextMonthAction = () => ({
  type: MonthActionTypes.NEXTMONTH,
});

const prevMonthAction = () => ({
  type: MonthActionTypes.PREVMONTH,
});

export {nextMonthAction, prevMonthAction};

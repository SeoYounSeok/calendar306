import {MonthActionTypes} from './types';

export const nextMonthAction = () => ({
  type: MonthActionTypes.NEXTMONTH,
});

export const prevMonthAction = () => ({
  type: MonthActionTypes.PREVMONTH,
});

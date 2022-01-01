import {MonthActionTypes} from '../actions/types';
import {CalendarState} from '../actions/initialState';

export const calendarReducer = (state = CalendarState, action: any) => {
  switch (action.type) {
    case MonthActionTypes.NEXTMONTH:
      return {
        thisMonth: state.thisMonth.add(1, 'month'),
      };
    case MonthActionTypes.PREVMONTH:
      return {
        thisMonth: state.thisMonth.subtract(1, 'month'),
      };
  }
  return state;
};

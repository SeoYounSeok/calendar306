import API from '../utils/Api';

type scheduleProps = {
  userId: string;
  calendarType: string;
  directoryId: number;
  title: string;
  content: string;
  isAllday: boolean;
  startDate: Date;
  endDate: Date;
  location: string;
  attendant: string;
  isReminder: boolean;
  reminderValue: string;
  isRecurrence: boolean;
  recurrenceValue: string;
};

export const createSchedule = async ({...props}: scheduleProps) => {
  await API.post('/schedule/create', {
    userId: props.userId,
    calendarType: props.calendarType,
    directoryId: props.directoryId,
    title: props.title,
    content: props.content,
    isAllday: props.isAllday,
    startDate: props.startDate,
    endDate: props.endDate,
    location: props.location,
    attendant: props.attendant,
    isReminder: props.isReminder,
    reminderValue: props.reminderValue,
    isRecurrence: props.isRecurrence,
    recurrenceValue: props.recurrenceValue,
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const findUserSchedule = async (userId: string) => {
  console.log('findUserSchedule 안에 들어온 userId = ' + userId); // userId 확인
  await API.get(`/schedule/${userId}`)
    .then(function (response) {
      console.log('findUserSchedule 호출된 response ');
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const updateUserSchedule = async (userId: string) => {
  console.log('updateUserSchedule 안에 들어온 userId = ' + userId); // userId 확인
  await API.patch(`/update/${userId}`)
    .then(function (response) {
      console.log('updateUserSchedule 호출된 response ');
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const removeUserSchedule = async (userId: string) => {
  console.log('removeUserSchedule 안에 들어온 userId = ' + userId); // userId 확인
  await API.delete(`/remove/${userId}`)
    .then(function (response) {
      console.log('removeUserSchedule 호출된 response ');
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

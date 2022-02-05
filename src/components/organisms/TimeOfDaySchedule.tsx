import {style} from '@mui/system';
import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

const timeOfDayArr: string[] = [
  '오전 00:00',
  '오전 01:00',
  '오전 02:00',
  '오전 03:00',
  '오전 04:00',
  '오전 05:00',
  '오전 06:00',
  '오전 07:00',
  '오전 08:00',
  '오전 09:00',
  '오전 10:00',
  '오전 11:00',
  '오전 12:00',
  '오후 13:00',
  '오후 14:00',
  '오후 15:00',
  '오후 16:00',
  '오후 17:00',
  '오후 18:00',
  '오후 19:00',
  '오후 20:00',
  '오후 21:00',
  '오후 22:00',
  '오후 23:00',
];

const dateTimeFormat = (time: string | null) => {
  const hour = time?.substring(11, 13);
  const minute = time?.substring(14, 16);

  return !hour || !minute ? null : hour + minute;
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    justifyContent: 'space-evenly',
  },
  data: {
    flexDirection: 'row',
  },
  title: {
    backgroundColor: '#F261DF',
  },
});

const TimeOfDaySchedule = ({userSchedule, navigation}: any) => {
  const scheduleData = (userSchedule: object | null) => {
    let startDate: string | null = null;
    let endDate: string | null = null;
    !userSchedule
      ? null
      : ((startDate = dateTimeFormat(userSchedule.startDate)),
        (endDate = dateTimeFormat(userSchedule.endDate)));
    // 지금 하나만 들어왔을 때, object 배열이 아닐 경우만 구현,
    // 배열로 할지 고민 중?
    return timeOfDayArr.map((time: string, index: number) => (
      <TouchableOpacity
        key={time + index}
        style={styles.data}
        onPress={() => {
          navigation.navigate('MemoScheduleDetail', {
            userSchedule: userSchedule,
          });
        }}>
        <Text>{time}</Text>
        {!userSchedule || !startDate || !endDate ? null : startDate <=
            index + '00' && endDate >= index + '00' ? (
          <Text style={styles.title}>{userSchedule.title}</Text>
        ) : null}
      </TouchableOpacity>
    ));
  };

  return <View style={styles.container}>{scheduleData(userSchedule)}</View>;
};

export default TimeOfDaySchedule;

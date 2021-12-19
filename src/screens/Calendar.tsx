import React, {useState} from 'react';
import {SafeAreaView, Text, Alert, View, StyleSheet} from 'react-native';
import dayjs from 'dayjs';

const Calendar = () => {
  const weekday = require('dayjs/plugin/weekday');
  const weekOfYear = require('dayjs/plugin/weekOfYear');

  // day extend
  dayjs.extend(weekday);
  dayjs.extend(weekOfYear);

  // Alert.alert(today.toString());
  const [thiswMonth, setThiswMonth] = useState(dayjs());
  const createCalendar = () => {
    // calendar Array
    let calendar = [];
    // const startOfWeek: number = thiswMonth.startOf("month").week();
    const startOfWeek: number = thiswMonth.startOf('month').week();
    const endOfWeek: number =
      thiswMonth.endOf('month').week() === 1
        ? 53
        : thiswMonth.endOf('month').week();
    for (let week: number = startOfWeek; week <= endOfWeek; week++) {
      calendar.push(
        <Text style={styles.row}>
          {Array(7)
            .fill(0)
            .map((n, i) => {
              let current = thiswMonth
                .startOf('week')
                .week(week)
                .add(n + i, 'day');
              if (thiswMonth.format('MM') === '12') {
                current = thiswMonth
                  .startOf('week')
                  .week(week - 52)
                  .add(n + i, 'day');
              }
              return (
                <Text style={styles.box} key={i}>
                  {current.format('D')}
                </Text>
              );
            })}
          {'\n'}
        </Text>,
      );
    }
    return calendar;
  };
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>월,화,수,목,금,토,일</Text>
        <Text style={styles.container}>{createCalendar()}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#292929',
    borderWidth: 1,
    borderColor: '#ababab',
    width: '100%',
  },
  row: {
    textAlign: 'center',
  },
  box: {
    textAlign: 'center',
  },
});

export default Calendar;

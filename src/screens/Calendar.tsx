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
        <Text>
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
              return <Text key={i}>{current.format('D')}</Text>;
            })}
        </Text>,
      );
    }
    return calendar;
  };
  return (
    <SafeAreaView>
      <View>
        <Text></Text>
        <Text style={styles.text}>월,화,수,목,금,토,일</Text>
        <Text>{createCalendar()}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#292929',
    borderWidth: 1,
    borderColor: '#ababab',
    width: '100%',
  },
});

export default Calendar;

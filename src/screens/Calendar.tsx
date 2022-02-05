import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import GestureRecognizer from 'react-native-swipe-gestures';
import IconButton from '../components/atoms/IconButton';
import CalendatHeader from '../components/organisms/CalendarHeader';

const Calendar = ({navigation}: any) => {
  dayjs.extend(weekOfYear);

  const [thisMonth, setThisMonth] = useState(dayjs());
  const [gesture, setGesture] = useState('None');

  const onSwipe = (gestureName: string, gestureState: any) => {
    // const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    setGesture(gestureName);
  };
  const onSwipeLeft = (gestureState: any) => {
    setThisMonth(thisMonth => thisMonth.add(1, 'month'));
  };

  const onSwipeRight = (gestureState: any) => {
    setThisMonth(thisMonth => thisMonth.subtract(1, 'month'));
  };

  const getHeaderDate = (thisMonth: any) => {
    setThisMonth(thisMonth);
  };
  const createCalendar = () => {
    let calendar = [];
    const startOfWeek: number = thisMonth.startOf('month').week();
    const endOfWeek: number = startOfWeek + 6; // 6 주 고정
    for (let week: number = startOfWeek; week < endOfWeek; week++) {
      calendar.push(
        <View key={week} style={styles.row}>
          {Array(7)
            .fill(0)
            .map((n, i) => {
              let current = thisMonth
                .startOf('year')
                .week(week)
                .startOf('week')
                .add(n + i, 'day');
              if (week > 52) {
                current = thisMonth
                  .startOf('week')
                  .week(week - 52)
                  .add(n + i, 'day');
              }
              return (
                <Text style={styles.day} key={i}>
                  {current.format('D')}
                </Text>
              );
            })}
        </View>,
      );
    }
    return calendar;
  };

  const nameOfWeekKor: string[] = ['일', '월', '화', '수', '목', '금', '토'];
  const nameOfWeekEng: string[] = [
    'SUN',
    'MON',
    'TUE',
    'WEN',
    'THR',
    'FRI',
    'SAT',
  ];

  let weekNameArr = nameOfWeekKor || nameOfWeekEng;
  let weekNameHeaderTag = weekNameArr.map(week => (
    <Text style={styles.day} key={week}>
      {week}
    </Text>
  ));
  return (
    <GestureRecognizer
      onSwipe={(direction, state) => onSwipe(direction, state)}
      onSwipeLeft={state => onSwipeLeft(state)}
      onSwipeRight={state => onSwipeRight(state)}>
      <SafeAreaView style={styles.body}>
        <CalendatHeader
          navigation={navigation}
          getHeaderDate={getHeaderDate}
          thisMonth={thisMonth}
        />
        <View style={styles.weekText}>{weekNameHeaderTag}</View>
        <View style={styles.container}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Schedule');
            }}>
            <View style={styles.weekRow}>{createCalendar()}</View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.footerIcon}>
          <IconButton
            icon="plus"
            onPress={() => {
              navigation.navigate('Schedule');
            }}
          />
        </View>
      </SafeAreaView>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  body: {
    height: '100%',
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    textAlign: 'center',
    // borderWidth: 1,
    // borderColor: '#ababab',
  },
  day: {
    flex: 1,
    textAlign: 'center',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    color: '#292929',
    width: '100%',
  },
  weekRow: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    borderBottomColor: '#ababab',
  },
  weekText: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    borderBottomColor: '#ababab',
  },
  footerIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderWidth: 2,
    borderRadius: 50,
    borderStyle: 'dashed',
  },
});

export default Calendar;

import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Alert,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import IconButton from '../components/atoms/IconButton';


const Calendar = ({navigation}) => {
  dayjs.extend(weekOfYear);

  const [thiswMonth, setThiswMonth] = useState(dayjs());
  const [gesture, setGesture] = useState('None');

  const onSwipe = (gestureName, gestureState) => {
    const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    setGesture(gestureName);
  };

  const onSwipeLeft = gestureState => {
    setThiswMonth(thiswMonth.add(1, 'month'));
  };

  const onSwipeRight = gestureState => {
    setThiswMonth(thiswMonth.subtract(1, 'month'));
  };

  const createCalendar = () => {
    let calendar = [];
    const startOfWeek: number = thiswMonth.startOf('month').week();
    const endOfWeek: number =
      thiswMonth.endOf('month').week() === 1
        ? 53
        : thiswMonth.endOf('month').week();

    for (let week: number = startOfWeek; week <= endOfWeek + 1; week++) {
      calendar.push(
        <View key={week} style={styles.row}>
          {Array(7)
            .fill(0)
            .map((n, i) => {
              let current = thiswMonth
                .startOf('year')
                .week(week)
                .startOf('week')
                .add(n + i, 'day');
              if (week > 52) {
                current = thiswMonth
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
  return (
    <GestureRecognizer
      onSwipe={(direction, state) => onSwipe(direction, state)}
      onSwipeLeft={state => onSwipeLeft(state)}
      onSwipeRight={state => onSwipeRight(state)}>
      <SafeAreaView style={styles.body}>
        <View style={styles.weekText}>
          <Text style={styles.day}>일</Text>
          <Text style={styles.day}>월</Text>
          <Text style={styles.day}>화</Text>
          <Text style={styles.day}>수</Text>
          <Text style={styles.day}>목</Text>
          <Text style={styles.day}>금</Text>
          <Text style={styles.day}>토</Text>
        </View>
        <View style={styles.container}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Schedule');
            }}>
            <View style={styles.weekRow}>{createCalendar()}</View>
          </TouchableWithoutFeedback>         
        </View>
        <View style={styles.footerIcon}>
          <IconButton icon="plus" onPress={() => {navigation.navigate('Schedule')}}/>
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
    position : 'absolute',
    bottom : 20,
    right : 20,
    borderWidth : 2,
    borderRadius : 50,
    borderStyle : 'dashed'
  }
});

export default Calendar;

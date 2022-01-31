import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {Text} from 'react-native-paper';
import dayjs from 'dayjs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {findUserSchedule} from '../service/scheduleService';

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
  },
  containers: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  header: {
    flex: 0.1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  headerText: {
    textAlign: 'center',
    marginBottom: 10,
  },
  summary: {
    paddingLeft: 10,
    flex: 0.05,
  },
  content: {
    flex: 1,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },
});

const nameOfWeekKor: string[] = ['일', '월', '화', '수', '목', '금', '토'];
const today = dayjs();
const startOfWeek = today.startOf('week');

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

const timeOfDayTag = timeOfDayArr.map((time: string, index: number) => (
  <View key={index} style={styles.contentRow}>
    <Text>{time}</Text>
    <TouchableOpacity></TouchableOpacity>
  </View>
));

const Memo = ({navigation}: any) => {
  const [userSchedule, setUserSchedule] = useState(null);

  const getUserSchedule = async () => {
    const userId = await AsyncStorage.getItem('@userId');
    // const scheduleData = await findUserSchedule(userId);
    const scheduleData = await findUserSchedule('3'); // 3번으로 테스트 진행
    setUserSchedule(scheduleData);
    console.log(scheduleData);
  };

  useEffect(() => {
    getUserSchedule();
    return () => console.log('component unmounting');
  }, []);

  const nameOfWeekArr = nameOfWeekKor.map((week: string, index: number) => (
    <TouchableOpacity
      key={startOfWeek.add(index, 'day').format('D')}
      onPress={() => {
        navigation.navigate('MemoDetail', {
          weeks: week,
          days: startOfWeek.add(index, 'day').format('D'),
          data: null,
        });
      }}>
      <Text style={styles.headerText}>{week}</Text>
      <Text style={styles.headerText}>
        {startOfWeek.add(index, 'day').format('D')}
      </Text>
    </TouchableOpacity>
  ));

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.containers}>
        <View style={styles.header}>{nameOfWeekArr}</View>
        <View style={styles.summary}>
          {!userSchedule ? (
            <Text style={{fontWeight: 'bold'}}>일정이 없습니다.</Text>
          ) : typeof userSchedule === 'object' ? (
            <Text>{userSchedule.title}</Text>
          ) : null}
        </View>
        <ScrollView style={styles.content}>{timeOfDayTag}</ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Memo;

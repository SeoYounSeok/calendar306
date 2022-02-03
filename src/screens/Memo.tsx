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
import TimeOfDaySchedule from '../components/organisms/TimeOfDaySchedule';

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
  headerTodayText: {
    textAlign: 'center',
    marginBottom: 7,
    borderRadius: 40,
  },
  summary: {
    paddingLeft: 10,
    flex: 0.05,
  },
  summaryItems: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  summaryItem: {
    backgroundColor: '#F261DF',
    borderWidth: 1,
    borderColor: '#F261DF',
    borderRadius: 10,
    padding: 5,
    marginRight: 5,
  },
  content: {
    flex: 1,
    paddingLeft: 10,
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

type ScheduleProps = {
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

const Memo = ({navigation}: any) => {
  const [userSchedule, setUserSchedule] = useState<
    ScheduleProps | ScheduleProps[] | null
  >(null);

  const getUserSchedule = async () => {
    const userId = await AsyncStorage.getItem('@userId');
    // const scheduleData = await findUserSchedule(userId);
    const scheduleData = await findUserSchedule('3'); // 3번으로 테스트 진행
    setUserSchedule(scheduleData);
    console.log(typeof scheduleData, scheduleData.length, scheduleData);
  };

  useEffect(() => {
    getUserSchedule();
    return () => console.log('component unmounting');
  }, []);

  console.log(today.get('date').toString());
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
      {today.get('date').toString() ==
      startOfWeek.add(index, 'day').format('D') ? (
        <Text style={styles.headerTodayText}>
          ಇ{startOfWeek.add(index, 'day').format('D')}ಇ
        </Text>
      ) : (
        <Text style={styles.headerText}>
          {startOfWeek.add(index, 'day').format('D')}
        </Text>
      )}
    </TouchableOpacity>
  ));

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.containers}>
        <View style={styles.header}>{nameOfWeekArr}</View>
        <View style={styles.summary}>
          {!userSchedule ? (
            <Text style={{fontWeight: 'bold'}}>일정이 없습니다.</Text>
          ) : !userSchedule.length ? (
            <View style={styles.summaryItems}>
              <Text style={styles.summaryItem} t>
                {userSchedule.title}
              </Text>
            </View>
          ) : (
            <View style={styles.summaryItems}>
              {userSchedule.map((schedule: object, index: number) => (
                <Text key={'summary' + index} style={styles.summaryItem}>
                  {schedule.title}
                </Text>
              ))}
            </View>
          )}
        </View>
        <ScrollView style={styles.content}>
          <TimeOfDaySchedule
            userSchedule={userSchedule}
            navigation={navigation}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Memo;

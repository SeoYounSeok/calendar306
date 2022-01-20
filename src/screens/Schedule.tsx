import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import TextInput from '../components/atoms/TextInput/TextInput';
import Switch from '../components/atoms/Switch/Switch';
import Reminder from './Modal/Reminder';
import Recurrence from './Modal/Recurrence';
import DatePicker from 'react-native-date-picker';
import {convertDateFormat, convertTimeFormat} from '../utils/DateUtils';

const Schedule = () => {
  const startDateInit = new Date();
  const endDateInint = new Date(
    startDateInit.setHours(startDateInit.getHours() + 1),
  );
  // 심플 or 디테일 스케줄 분기하는 스케줄의 속성 타입
  // simple = false, detail = true (boolean 처리를 위해)
  const [calendarSwitch, setCalendarSwitch] = useState(false);
  const [calendarType, setCalendarType] = useState('simple');
  // 스케줄(메모) 제목
  const [title, setTitle] = useState('');
  // 스케줄(메모) 내용
  const [content, setContent] = useState('');
  // 하루 종일 스케줄인지 체크
  const [isAllday, setIsAllday] = useState(false);
  // 스케줄 시작 시간
  const [startDate, setStartDate] = useState(startDateInit);
  // 스케줄 종료 시간
  const [endDate, setEndDate] = useState(endDateInint);
  // 스케줄이 진행될 장소 지정
  const [location, setLocation] = useState('');
  // 스케줄 참여 인원
  const [attendant, setAttendant] = useState('');
  // 스케줄 알림 여부
  const [isReminder, setIsReminder] = useState(false);
  // 스케줄 알림 주기 설정
  const [reminderValue, setReminderValue] = useState('');
  // 스케줄 반복 여부
  const [isRecurrence, setIsRecurrence] = useState(false);
  // 스케줄 반복 내용
  const [recurrenceValue, setRecurrenceValue] = useState('');
  // 스케줄 시작 시간 표시
  const [startDateVisible, setStartDateVisible] = useState(false);
  // 스케줄 종료 시간 표시
  const [endDateVisible, setEndDateVisible] = useState(false);

  const getReminderValue = (value: string) => {
    setReminderValue(value);
  };
  const getRecurrenceValue = (value: string) => {
    setRecurrenceValue(value);
  };
  const onPressStartDate = () => {
    setStartDateVisible(!startDateVisible);
    setEndDateVisible(false);
  };
  const onPressEndDate = () => {
    setEndDateVisible(!endDateVisible);
    setStartDateVisible(false);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.row}>
        <Text style={styles.switchText}>상세 정보 펼치기</Text>
        <Switch
          value={calendarSwitch}
          onValueChange={() => {
            setCalendarSwitch(!calendarSwitch);
            {
              !calendarSwitch
                ? setCalendarType('simple')
                : setCalendarType('detail');
            }
          }}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.switchText}>하루 종일</Text>
        <Switch
          value={isAllday}
          onValueChange={() => {
            setIsAllday(!isAllday);
          }}
        />
      </View>

      <View style={styles.containers}>
        <TextInput
          label="스케줄 제목"
          value={title}
          onChangeText={setTitle}
          placeholder="스케줄 제목을 입력하세요."
        />
        <TextInput
          label="스케줄 내용"
          value={content}
          onChangeText={setContent}
          placeholder="스케줄 내용을 입력하세요."
        />
        <TextInput
          label="스케줄 장소"
          value={location}
          onChangeText={setLocation}
          placeholder="스케줄 장소를 입력하세요."
        />
        <TextInput
          label="스케줄 참여자"
          value={attendant}
          onChangeText={setAttendant}
          placeholder="스케줄 참여자를 입력하세요."
        />
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={onPressStartDate}>
          <View>
            <Text>{convertDateFormat(startDate)}</Text>
            <Text>{convertTimeFormat(startDate)}</Text>
          </View>
        </TouchableOpacity>
        <Text> ~ </Text>
        <TouchableOpacity onPress={onPressEndDate}>
          <View>
            <Text>{convertDateFormat(endDate)}</Text>
            <Text>{convertTimeFormat(endDate)}</Text>
          </View>
        </TouchableOpacity>
      </View>
      {!startDateVisible ? null : (
        <DatePicker date={startDate} onDateChange={setStartDate} />
      )}
      {!endDateVisible ? null : (
        <DatePicker date={endDate} onDateChange={setEndDate} />
      )}
      <View style={styles.row}>
        <Text style={styles.switchText}>알림 설정</Text>
        <Switch
          value={isReminder}
          onValueChange={() => {
            setIsReminder(!isReminder);
          }}
        />
        {isReminder && (
          <Reminder value={reminderValue} getReminderValue={getReminderValue} />
        )}
      </View>

      <View style={styles.row}>
        <Text style={styles.switchText}>반복 설정</Text>
        <Switch
          value={isRecurrence}
          onValueChange={() => {
            setIsRecurrence(!isRecurrence);
          }}
        />
        {isRecurrence && (
          <Recurrence
            value={recurrenceValue}
            getRecurrenceValue={getRecurrenceValue}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containers: {
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Schedule;

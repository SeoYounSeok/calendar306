import React, {useState} from 'react';
import {SafeAreaView, View, Text, TextInput, StyleSheet} from 'react-native';

const Schedule = () => {
  // 심플 or 디테일 스케쥴 분기하는 스케쥴의 속성 타입
  const [calendarType, setCalendarType] = useState('simple');
  // 스케줄(메모) 제목
  const [title, setTitle] = useState('');
  // 스케줄(메모) 내용
  const [content, setContent] = useState('');
  // 하루 종일 스케줄인지 체크
  const [isAllday, setIsAllday] = useState(false);
  // 스케쥴 시작 시간
  const [startDate, setStartDate] = useState('');
  // 스케줄 종료 시간
  const [endDate, setEndDate] = useState('');
  // 스케쥴이 진행될 장소 지정
  const [location, setLocation] = useState('');
  // 스케줄 참여 인원
  const [attendant, setAttendant] = useState('');
  // 스케줄 알림 여부
  const [isReminder, setIsReminder] = useState(false);
  // 스케쥴 알림 주기 설정
  const [reminderValue, setReminderValue] = useState(false);
  // 스케줄 반복 여부
  const [isRecurrence, setIsRecurrence] = useState(false);
  // 스케줄 반복 내용
  const [recurrenceValue, setRecurrenceValue] = useState(false);

  return (
    <SafeAreaView>
      <TextInput
        // style={styles.input}
        style={{borderBottomColor: '#ababab', borderBottomWidth: 1}}
        onChangeText={setTitle}
        value={title}
        placeholder="일정을 입력하세요."
      />
      <TextInput
        // style={styles.input}
        style={{borderBottomColor: '#ababab', borderBottomWidth: 1}}
        onChangeText={setContent}
        value={content}
        placeholder="세부정보를 입력해주세요"
      />
      <TextInput
        // style={styles.input}
        style={{borderBottomColor: '#ababab', borderBottomWidth: 1}}
        onChangeText={setAttendant}
        value={attendant}
        placeholder="참가자를 선택해주세요."
      />
    </SafeAreaView>
  );
};

export default Schedule;

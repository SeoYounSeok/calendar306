import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import TextInput from '../components/atoms/TextInput/TextInput';
import Switch from '../components/atoms/Switch/Switch';

const Schedule = () => {
  // 심플 or 디테일 스케줄 분기하는 스케줄의 속성 타입
  const [calendarType, setCalendarType] = useState('simple');
  // 스케줄(메모) 제목
  const [title, setTitle] = useState('');
  // 스케줄(메모) 내용
  const [content, setContent] = useState('');
  // 하루 종일 스케줄인지 체크
  const [isAllday, setIsAllday] = useState(false);
  // 스케줄 시작 시간
  const [startDate, setStartDate] = useState('');
  // 스케줄 종료 시간
  const [endDate, setEndDate] = useState('');
  // 스케줄이 진행될 장소 지정
  const [location, setLocation] = useState('');
  // 스케줄 참여 인원
  const [attendant, setAttendant] = useState('');
  // 스케줄 알림 여부
  const [isReminder, setIsReminder] = useState(false);
  // 스케줄 알림 주기 설정
  const [reminderValue, setReminderValue] = useState(false);
  // 스케줄 반복 여부
  const [isRecurrence, setIsRecurrence] = useState(false);
  // 스케줄 반복 내용
  const [recurrenceValue, setRecurrenceValue] = useState(false);

  const onValueChange = () => {
    // visible 처리 추가 + 체크 시 나타나기
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Switch
        value={isAllday}
        onValueChange={console.log('변환시 들어갈 내용')}
      />
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Schedule;

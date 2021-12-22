import React, {useState} from 'react';
import {SafeAreaView, View, Text, TextInput, StyleSheet} from 'react-native';

const Schedule = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [attendant, setAttendant] = useState('');
  const [calendarType, setCalendarType] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [isAllday, setIsAllday] = useState(false);
  const [isRecurrence, setIsRecurrence] = useState(false);
  const [isReminder, setIsReminder] = useState(false);
  const [location, setLocation] = useState('');
  const [recurrenceValue, setRecurrenceValue] = useState(false);
  const [reminderValue, setReminderValue] = useState(false);

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

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });

export default Schedule;

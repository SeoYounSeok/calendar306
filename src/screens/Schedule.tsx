import React, {useState} from 'react';
import {SafeAreaView, View, Text, TextInput, StyleSheet} from 'react-native';

const Schedule = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [calendarType, setCalendarType] = useState('');
  const [content, setContent] = useState('');
  const [content, setContent] = useState('');
  const [content, setContent] = useState('');
  const [content, setContent] = useState('');
  const [place, setPlace] = useState('');
  const [toDate, setToDate] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [content, setContent] = useState('');
  const [toggled, setToggled] = useState(false);
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
        onChangeText={setTitle}
        value={title}
        placeholder="일정을 입력하세요."
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

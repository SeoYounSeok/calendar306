import React, {useEffect} from 'react';
import {SafeAreaView, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import dayjs from 'dayjs';

const styles = StyleSheet.create({
  body: {
    height: '100%',
  },
  containers: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  headerText: {
    textAlign: 'center',
  },
});

const nameOfWeekKor: string[] = ['일', '월', '화', '수', '목', '금', '토'];
const today = dayjs();
const startOfWeek = today.startOf('week');

const nameOfWeekArr = nameOfWeekKor.map((week: string, index: number) => (
  <TouchableOpacity key={week}>
    <Text style={styles.headerText}>{week}</Text>
    <Text style={styles.headerText}>
      {startOfWeek.add(index, 'day').format('D')}
    </Text>
  </TouchableOpacity>
));

const Memo = () => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.containers}>
        <View style={styles.header}>{nameOfWeekArr}</View>
      </View>
    </SafeAreaView>
  );
};

export default Memo;

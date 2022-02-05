import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import IconButton from '../atoms/IconButton';
import {convertDateFormat} from '../../utils/DateUtils';

const CalendatHeader = ({navigation}: any) => {
  const reduxState = useSelector(state => state);
  const dayjs = reduxState.calendarReducer.thisMonth;

  const [date, setDate] = useState(dayjs.toDate());
  const [dateVisible, setDateVisible] = useState(false);
  const onPressDate = () => {
    setDateVisible(!dateVisible);
  };

  return (
    <View style={styles.container}>
      <IconButton
        icon="menu"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <TouchableOpacity onPress={onPressDate} style={styles.dateTouchable}>
        <Text style={styles.dateText}>
          {convertDateFormat(date).substring(0, 7)}
        </Text>
      </TouchableOpacity>
      {!dateVisible ? null : <DatePicker date={date} onDateChange={setDate} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateTouchable: {
    justifyContent: 'center',
  },
  dateText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default CalendatHeader;

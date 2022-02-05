import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import IconButton from '../atoms/IconButton';
import {convertDateFormat} from '../../utils/DateUtils';
import dayjs from 'dayjs';

const CalendatHeader = ({navigation, getHeaderDate, thisMonth}: any) => {
  // const reduxState = useSelector(state => state);
  // const reduxDate = reduxState.calendarReducer.thisMonth;

  const [date, setDate] = useState(thisMonth.toDate());
  const [dateVisible, setDateVisible] = useState(false);
  const onPressDate = () => {
    setDateVisible(!dateVisible);
  };
  const setMonth = (dateInit: any) => {
    setDate(dateInit);
    getHeaderDate(dayjs(dateInit));
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <IconButton
          icon="menu"
          onPress={() => {
            navigation.openDrawer();
          }}
        />
        <TouchableOpacity onPress={onPressDate} style={styles.dateTouchable}>
          <Text style={styles.dateText}>{thisMonth.format('YYYY.M')}</Text>
        </TouchableOpacity>
      </View>
      {!dateVisible ? null : (
        <DatePicker
          date={date}
          onDateChange={date => {
            setMonth(date);
          }}
          mode="date"
        />
      )}
    </SafeAreaView>
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

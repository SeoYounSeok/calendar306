import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import IconButton from '../atoms/IconButton';
import {convertDateFormat} from '../../utils/DateUtils';

const CalendatHeader = ({navigation}: any) => {
  // 리덕스에서 데이터를 가져오는 것은 가능하나, DatePicker 사용 시, date 만 사용해야 하기 때문에 , dayjs 를 사용하지 못함.
  // 확인하여, 리덕스에 초기 값을 new Date() 로 사용해야 할 것 같음.
  const reduxState = useSelector(state => state);
  const dateInit = new Date();
  // const dayjs = reduxState.calendarReducer.thisMonth;
  // const initDate = dayjs.format('YYYY.M');

  const [date, setDate] = useState(dateInit);
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
      <View>
        <TouchableOpacity onPress={onPressDate} style={styles.dateTouchable}>
          <Text style={styles.dateText}>
            {convertDateFormat(date).substring(0, 7)}
          </Text>
        </TouchableOpacity>
        {!dateVisible ? null : (
          <DatePicker date={date} onDateChange={setDate} />
        )}
      </View>
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

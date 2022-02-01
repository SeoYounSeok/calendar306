import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import IconButton from '../components/atoms/IconButton';
import {windowHeight} from '../utils/Dimensions';

const MemoScheduleDetail = ({navigation, route}: any) => {
  const goMemoMain = () => {
    navigation.navigate('Memo');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tab}>
        <IconButton icon="arrow-left" onPress={goMemoMain} />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>{route.params.userSchedule.title}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          {route.params.userSchedule.startDate} ~
          {route.params.userSchedule.endDate}
        </Text>
        <Text style={styles.bodyText}>
          참석자
          {route.params.userSchedule.attendant}
        </Text>
        <Text style={styles.bodyContent}>
          참석자
          {route.params.userSchedule.content}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
  },
  tab: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  tabText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  headerText: {
    fontSize: 28,
  },
  body: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  bodyText: {
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 3,
  },
  bodyContent: {
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 3,
    height: '100%',
  },
});

export default MemoScheduleDetail;

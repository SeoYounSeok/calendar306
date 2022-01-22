import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import IconButton from '../components/atoms/IconButton';

const MemoDetail = ({navigation, route}: any) => {
  const goMemoMain = () => {
    navigation.navigate('MemoMain');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <IconButton icon="arrow-left" onPress={goMemoMain} />
        <Text style={styles.headerText}>{route.params.days}일 </Text>
        <Text style={styles.headerText}>({route.params.weeks})</Text>
      </View>
      {!route.params.data ? (
        <View>
          <Text>일정이 없습니다.</Text>
        </View>
      ) : (
        <View>
          <Text>일정이 있습니다. 데이터 구현 예정</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  header: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MemoDetail;

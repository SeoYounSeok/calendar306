import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';

const MemoDetail = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MemoMain');
          }}>
          <Text> 디테일 자료 입력 </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MemoDetail;

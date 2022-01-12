import React, {useState} from 'react';
import {View} from 'react-native';
import {Modal, Text, Button} from 'react-native-paper';
const Recurrence = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        <Text> 알림 없음</Text>
        <Text> 10분 전</Text>
        <Text> 30분 전</Text>
        <Text> 1시간 전 </Text>
        <Text> 2시간 전</Text>
        <Text> 3시간 전</Text>
        <Text> 6시간 전</Text>
        <Text> 1일 전</Text>
        <Text> 일주일 전</Text>
      </Modal>
      <Button style={{marginTop: 30}} color="black" onPress={showModal}>
        반복
      </Button>
    </View>
  );
};

export default Recurrence;

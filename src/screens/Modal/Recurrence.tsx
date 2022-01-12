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
        <Text> 없음 </Text>
        <Text> 매일 </Text>
        <Text> 매주 </Text>
        <Text> 매월 </Text>
        <Text> 매년 </Text>
      </Modal>
      <Button style={{marginTop: 30}} color="black" onPress={showModal}>
        반복
      </Button>
    </View>
  );
};

export default Recurrence;

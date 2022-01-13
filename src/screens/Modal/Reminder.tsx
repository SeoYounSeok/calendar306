import React, {useState} from 'react';
import {Modal, View, SafeAreaView} from 'react-native';
import {Text, Button} from 'react-native-paper';
import IconButton from '../../components/atoms/IconButton';
import {windowWidth, windowHeight} from '../../utils/Dimensions';

const Reminder = ({...props}: any) => {
  const [visible, setVisible] = useState(false);
  const [remindData, setRemindData] = useState('알림 없음');
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const dataOfRemindArr: string[] = [
    '알림 없음',
    '10분 전',
    '20분 전',
    '30분 전',
    '1시간 전',
    '2시간 전',
    '3시간 전',
    '6시간 전',
  ];
  const onPressRemind = (remind: string) => {
    props.getReminderValue(remind);
    setRemindData(remind);
    hideModal();
  };

  const dataOfRemindTag = dataOfRemindArr.map(remind => (
    <Button
      key={remind}
      color="black"
      onPress={() => {
        onPressRemind(remind);
      }}>
      {remind}
    </Button>
  ));

  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={false} visible={visible}>
        <SafeAreaView>
          <View>
            <IconButton icon="close" onPress={hideModal}></IconButton>
            {dataOfRemindTag}
          </View>
        </SafeAreaView>
      </Modal>
      <Button onPress={showModal}>
        <Text>{remindData}</Text>
      </Button>
    </SafeAreaView>
  );
};

export default Reminder;

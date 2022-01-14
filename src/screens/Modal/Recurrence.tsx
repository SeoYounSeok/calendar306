import React, {useState} from 'react';
import {Modal, View, SafeAreaView} from 'react-native';
import {Text, Button} from 'react-native-paper';
import IconButton from '../../components/atoms/IconButton';
import {windowWidth, windowHeight} from '../../utils/Dimensions';

const Recurrence = ({...props}: any) => {
  const [visible, setVisible] = useState(false);
  const [recurrenceData, setRecurrenceData] = useState('반복 없음');
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const dataOfRecurrenceArr: string[] = [
    '반복 없음',
    '매일',
    '매주',
    '매월',
    '매년',
  ];
  const onPressRecurrence = (recurrence: string) => {
    props.getRecurrenceValue(recurrence);
    setRecurrenceData(recurrence);
    hideModal();
  };

  const dateOfRecurrenceTag = dataOfRecurrenceArr.map((recurrence: string) => (
    <Button
      key={recurrence}
      color="black"
      onPress={() => {
        onPressRecurrence(recurrence);
      }}>
      {recurrence}
    </Button>
  ));

  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={false} visible={visible}>
        <SafeAreaView>
          <View>
            <IconButton icon="close" onPress={hideModal}></IconButton>
            {dateOfRecurrenceTag}
          </View>
        </SafeAreaView>
      </Modal>
      <Button onPress={showModal}>
        <Text>{recurrenceData}</Text>
      </Button>
    </SafeAreaView>
  );
};

export default Recurrence;

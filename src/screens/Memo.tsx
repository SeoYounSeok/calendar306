import React from 'react';
import {SafeAreaView, ImageBackground} from 'react-native';

const Memo = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('../../images/coming-soon-removed.png')}
        resizeMode="contain"></ImageBackground>
    </SafeAreaView>
  );
};

export default Memo;

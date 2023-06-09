import React, {useEffect, useRef, useState} from 'react';
import {DeviceEventEmitter, ScrollView, View} from 'react-native';
import {useIsFocused, useTheme} from '@react-navigation/native';

// components
import {
  Spacer,
  TextBox,
  StatusHeader,
  Header,
  BackButton,
  Icons,
} from 'components';

import constants, {routesConstants} from 'theme/constants';

// style
import usePixel, {Height} from 'hook/DevicePixel';
import BoxButtons from 'components/boxButtons';
import MyVision from './myVision';
import MyGoal from './myGoal';
import styles from './style';
import Activity from './activity';

const boxButtonName = [5, 3, 1];
const Boards = ({navigation}): any => {
  const {colors}: any = useTheme();
  const isFocused = useIsFocused();
  const style = styles(colors);
  const scrollRef = useRef(null);

  React.useEffect(() => {
    if (isFocused) {
      DeviceEventEmitter.emit('setBottomTabIndex', 1);
    }
  }, [isFocused]);

  const [iconPress, setIconPress] = useState(0);
  const headers = value => {
    switch (value) {
      case 0:
        return constants.vision;
      case 1:
        return constants.myGoal;
      case 2:
        return constants.myActivity;
    }
  };

  useEffect(() => {
    scrollRef && scrollRef.current.scrollTo({y: 0, animation: true});
  }, [iconPress]);

  return (
    <View style={style.container}>
      <StatusHeader />
      <Header title={headers(iconPress)} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 30,
        }}>
        <BoxButtons
          color={colors}
          arr={boxButtonName}
          iconPress={iconPress}
          setIconPress={setIconPress}
          noOfItem={3}
        />
      </View>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        {iconPress === 0 ? (
          <MyVision navigation={navigation} />
        ) : iconPress === 1 ? (
          <MyGoal navigation={navigation} />
        ) : iconPress === 2 ? (
          <Activity navigation={navigation} />
        ) : null}
        <Spacer height={constants.BottomHeight} />
      </ScrollView>
    </View>
  );
};

export default Boards;

import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {colors} from 'theme/colors';

import styles from './style';

type props = {
  color: colors;
  value: (e: boolean) => {};
  defaultValue: boolean;
};

const RoundCheckBox = ({color, value, defaultValue = true}: props) => {
  const [check, setCheck] = useState(defaultValue);
  const style: any = styles(color);
  useEffect(()=>{
    setCheck(defaultValue)
  },[defaultValue])
  return (
    <TouchableOpacity
      onPress={() => {
        setCheck(!check), value(check);
      }}
      activeOpacity={0.8}>
      <View style={style.container}>
        <View
          style={[
            style.innerContainer,
            {alignSelf: check  ? 'flex-end' : 'flex-start'},
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default RoundCheckBox;

import usePixel from 'hook/DevicePixel';
import React, {memo} from 'react';
import {View} from 'react-native';

type props = {
  height?: number | any;
  flex?: number;
  styles?: object;
};

const Spacer = ({height, flex, styles}: props) => {
  const size = height && usePixel(height);
  return <View style={[styles, {height: height, flex: flex, minHeight: 10}]} />;
};
export default memo(Spacer);

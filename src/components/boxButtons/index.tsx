import React from 'react';
import {TouchableOpacity} from 'react-native';
import {TextBox} from 'components';
import styles from './styles';
import {colors} from 'theme/colors';
import constants from 'theme/constants';
import {Width} from 'hook/DevicePixel';

type props = {
  arr: Array<number | string>;
  iconPress: number;
  setIconPress: any;
  color: colors;
  noOfItem: number;
  size?: number;
};

const BoxButtons = ({
  arr,
  iconPress,
  setIconPress,
  color,
  noOfItem,
  size = 30,
}: props) => {
  const width = (Width - (constants.screenPadding +15) * 2) / noOfItem;
  const style = styles(color);
  return arr.map((item: any, index: number) => (
    <TouchableOpacity
      key={item}
      style={[
        iconPress === index
          ? {
              ...style.innerButton,
              backgroundColor: color.learnAbout531Background,
            }
          : style.innerButton,
        {width: width},
      ]}
      onPress={() => setIconPress(index)}>
      <TextBox
        text={item}
        size={size}
        color={
          iconPress === index ? color.learnAbout531text : color.black
        }
      />
    </TouchableOpacity>
  ));
};
export default BoxButtons;

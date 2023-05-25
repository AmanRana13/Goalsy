import React, {memo, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icons from 'components/icons';
import usePixel from 'hook/DevicePixel';
import {colors} from 'theme/colors';
import appImages from 'theme/images';

type props = {
  value?: (e: boolean) => {};
  size?: number;
  styles?: object;
  border?: boolean;
  color: colors;
  borderColor?: string;
  circle?: boolean;
};

const CheckBox = ({
  styles,
  value,
  color,
  size = 23,
  circle = false,
  borderColor,
}: props) => {
  const [state, setState] = useState<boolean>(false);
  const sizes = usePixel(size);
  const design = style(color);
  return (
    <TouchableOpacity
      style={[
        design.container,
        {
          height: sizes,
          width: sizes,
          borderRadius: circle ? 30 : 7,
          backgroundColor: state ? color?.checkBoxHead : color?.commonWhite,
          borderColor: borderColor,
        },
        styles,
      ]}
      onPress={() => {
        setState(!state);
        value && value(!state);
      }}>
      {state ? (
        <Icons
          source={appImages.checkImage}
          size={size / 1.8}
          disabled={true}
        />
      ) : (
        ''
      )}
    </TouchableOpacity>
  );
};

export default memo(CheckBox);

const style = color =>
  StyleSheet.create({
    container: {
      borderWidth: 2,
      borderRadius: 10,
      borderColor: color?.black,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

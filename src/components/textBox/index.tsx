import {Text} from 'react-native';
import React, {memo, useCallback} from 'react';
import usePixel from 'hook/DevicePixel';
import {useTheme} from '@react-navigation/native';
import {fonts} from 'theme/fonts';
import {props} from './type';

const TextBox = ({
  text = '',
  color,
  size = 15,
  styles,
  fontFamily,
  onPress,
}: props) => {
  const {colors} = useTheme();
  const fontSize = usePixel(size);
  const renderView = useCallback(() => {
    return (
      // NOTE* if the text color not going to change with mode the sent text color on color variable
      <Text
        onPress={onPress}
        allowFontScaling={false}
        style={{
          color: color ?? colors?.black,
          fontSize: fontSize,
          fontFamily: fontFamily ?? fonts.medium,
          ...styles,
        }}>
        {text}
      </Text>
    );
  }, [text, color, colors, fontSize, styles]);

  return renderView();
};

export default memo(TextBox);

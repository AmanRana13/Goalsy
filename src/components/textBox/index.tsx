import {Text} from 'react-native';
import React, {memo, useCallback} from 'react';
import usePixel from 'hook/DevicePixel';
import {useTheme} from '@react-navigation/native';
import {fonts} from 'theme/fonts';
import {props} from './type';
import {colors} from 'theme/colors';

const TextBox = ({
  text = '',
  color,
  size = 15,
  styles,
  fontFamily,
  onPress,
  textProps,
}: props) => {
  const {colors}: colors = useTheme();
  const fontSize = usePixel(size);
  const renderView = useCallback(() => {
    return (
      // NOTE* if the text color not going to change with mode the sent text color on color variable
      <Text
        onPress={onPress}
        allowFontScaling={false}
        suppressHighlighting={true}
        style={{
          color: color ?? colors?.textColor,
          fontSize: fontSize,
          fontFamily: fontFamily ?? fonts.medium,
          ...styles,
        }}
        {...textProps}>
        {text}
      </Text>
    );
  }, [text, color, colors, fontSize, styles]);

  return renderView();
};

export default memo(TextBox);

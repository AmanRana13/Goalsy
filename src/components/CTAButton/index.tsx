import React, {memo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import TextBox from 'components/textBox';
import usePixel from 'hook/DevicePixel';
import {button} from './type';
import style from './style';
import constants, {buttonSize} from 'theme/constants';
import {Shadow} from 'react-native-shadow-2';
import {useTheme} from '@react-navigation/native';
import { colors } from 'theme/colors';

const CTAButton = ({
  text,
  color,
  buttonStyle,
  fontFamily,
  isShadow = true,
  onPress = () => {},
  opacity = 0.5,
  disabled = false,
  type = constants.medium,
  textColor = '#000', // to make the color change with mode remove the default value of color
}: button) => {
  const {colors}:colors = useTheme();
  const styles = style(color);
  
  // button Size
  const width = usePixel(buttonSize[type].width);
  const height = usePixel(buttonSize[type].height);
  
  // button Shadow
  const shadowColor = isShadow ? 'rgba(0,0,0,0.15)' : colors.white;
  
  return (
    <View style={buttonStyle}>
      <Shadow
        distance={buttonSize[type].distance}
        startColor={shadowColor}
        offset={[0, 3]}>
        <TouchableOpacity
          onPress={onPress}
          style={[
            styles.container,
            {width, height, borderRadius: buttonSize[type].radius},
            buttonStyle,
          ]}
          activeOpacity={opacity}
          disabled={disabled}>
          {disabled && (
            <View
              style={{
                ...styles.container,
                backgroundColor: 'rgba(159, 157, 170, 0.78)',
                width: '100%',
                height: '100%',
                position: 'absolute',
                zIndex: 100,
              }}
            />
          )}
          <TextBox
            text={text}
            size={buttonSize[type].fontSize}
            color={textColor}
            fontFamily={fontFamily ?? buttonSize[type].fontFamily}
          />
        </TouchableOpacity>
      </Shadow>
    </View>
  );
};

export default memo(CTAButton);

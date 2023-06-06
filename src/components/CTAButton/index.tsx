import React, {memo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import TextBox from 'components/textBox';
import usePixel from 'hook/DevicePixel';
import {button, buttonSizeProps} from './type';
import style from './style';
import constants from 'theme/constants';
import {Shadow} from 'react-native-shadow-2';
import {useTheme} from '@react-navigation/native';
import {colors} from 'theme/colors';
import {fonts} from 'theme/fonts';

const buttonSize: buttonSizeProps = {
  large: {
    height: 55,
    width: 200,
    fontSize: 23,
    radius: 15,
    distance: 6,
    fontFamily: fonts.medium,
  },
  medium: {
    height: 50,
    width: 160,
    fontSize: 20,
    radius: 15,
    distance: 4,
    fontFamily: fonts.medium,
  },
  small: {
    height: 40,
    width: 80,
    fontSize: 16,
    radius: 10,
    distance: 5,
    fontFamily: fonts.semiBold,
  },
};

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
  textColor = '#000',
  hideShadow = false, // to make the color change with mode remove the default value of color
}: button) => {
  const {colors}: colors = useTheme();
  const styles = style(color);
  // button Size
  const width = usePixel(buttonSize[type].width);
  const height = usePixel(buttonSize[type].height);

  // button Shadow
  const startColor = isShadow
    ? 'rgba(14, 9, 43,0.08)'
    : hideShadow
    ? colors.modalButtonShadow
    : colors.white;
  const endColor = isShadow
    ? 'rgba(14, 9, 43,0.005)'
    : hideShadow
    ? colors.modalButtonShadow
    : colors.white;

  return (
    <View style={buttonStyle}>
      <Shadow
        distance={buttonSize[type].distance}
        startColor={startColor}
        endColor={endColor}
        offset={[0, 2]}>
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

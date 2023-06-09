import React, {memo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import TextBox from 'components/textBox';
import usePixel from 'hook/DevicePixel';
import {button, buttonSizeProps} from './type';
import style from './style';
import constants from 'theme/constants';
import {Shadow} from 'react-native-shadow-2';
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
  showShadow = true,
  onPress = () => {},
  opacity = 0.5,
  disabled = false,
  type = constants.medium,
  textColor = '#000',
}: button) => {
  const styles = style(color);
  // button Size
  const width = usePixel(buttonSize[type].width);
  const height = usePixel(buttonSize[type].height);

  return (
    <View style={buttonStyle}>
      <Shadow
        disabled={!showShadow}
        distance={buttonSize[type].distance}
        startColor={'#0e092b14'}
        endColor={'#0e092b01'}
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

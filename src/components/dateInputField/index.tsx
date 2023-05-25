import React, {ReactElement, forwardRef, memo} from 'react';
import {Keyboard, Text, TouchableOpacity, View} from 'react-native';

//Component
import TextBox from 'components/textBox';
import Icons from 'components/icons';

//Hook
import usePixel from 'hook/DevicePixel';

//Constant
import constants from 'theme/constants';

//style
import styles from './style';

// type
import {InputFieldProps} from './type';
import {fonts} from 'theme/fonts';

const DateInputField = forwardRef(
  (props: InputFieldProps | any, ref): ReactElement => {
    const inputFont = usePixel(17);
    const inputHeight = usePixel(constants.inputHeight);
    const {label, RightCompo, TextInputProps, LabelCompo, colors, onPress} =
      props;

    const {
      inputStyle,
      required = false,
      editable = true,
      placeholder,
      value,
    } = TextInputProps;

    const style = styles(colors);
    return (
      <TouchableOpacity onPress={onPress} style={style.container}>
        {/* Input Label */}
        <View style={style.labelStyle}>
          {LabelCompo
            ? LabelCompo
            : label && (
                <TextBox
                  size={16}
                  fontFamily={fonts.regular}
                  text={`${label}${required ? '*' : ''}`}
                />
              )}
        </View>
        <View
          style={[
            style.innerContainer,
            {
              height: inputHeight,
              backgroundColor: !editable ? colors.disable : colors.commonWhite,
            },
            inputStyle,
          ]}>
          {/* Input Field Start */}
          <Text
            style={[
              style.input,
              {
                fontSize: inputFont,
                color: value ? colors.commonBlack : colors.disable,
              },
            ]}
            {...TextInputProps}>
            {value || placeholder}
          </Text>
          {/* Input Right Icon */}
          {RightCompo && <View style={style.RightCompo}>{RightCompo}</View>}
        </View>
      </TouchableOpacity>
    );
  },
);

export default memo(DateInputField);

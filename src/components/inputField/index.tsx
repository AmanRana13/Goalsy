import React, {ReactElement, forwardRef, memo} from 'react';
import {Keyboard, TextInput, View} from 'react-native';

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

const InputField = forwardRef(
  (props: InputFieldProps | any, ref): ReactElement => {
    const inputFont = usePixel(17);
    const inputHeight = usePixel(constants.inputHeight);
    const {
      label,
      LeftCompo,
      RightCompo,
      TextInputProps,
      LabelCompo,
      LeftIconSource,
      colors,
      showWordCount = false,
      disableColor = false,
    } = props;

    const {
      placeholder,
      maxLength,
      keyboardType,
      autoCapitalize,
      inputStyle,
      onChangeText,
      nextField,
      textInput,
      returnKeyType = 'next',
      required = false,
      editable = true,
      inputContainerStyle,
    } = TextInputProps;

    const onSubmitEditing = () => {
      if (returnKeyType == 'next' || returnKeyType === 'done') {
        returnKeyType == 'next' ? nextField() : Keyboard.dismiss();
      }
    };

    const style = styles(colors);
    const disabledColorBackground = disableColor
      ? colors.commonWhite
      : colors.disable;
    const disabledColorText =
      !disableColor && !editable ? {color: colors.disable} : null;
    return (
      <View style={style.container}>
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
              backgroundColor: !editable
                ? disabledColorBackground
                : colors.commonWhite,
            },
            inputContainerStyle,
          ]}>
          {/* Input Left Icon */}
          <View style={[style.innerInput, {height: inputHeight}, inputStyle]}>
            {LeftCompo
              ? LeftCompo
              : LeftIconSource && (
                  <View style={style.LeftCompo}>
                    <Icons size={30} source={LeftIconSource} />
                  </View>
                )}
            {/* Input Field Start */}
            <TextInput
              ref={ref}
              numberOfLines={1}
              maxFontSizeMultiplier={1}
              autoCorrect={false}
              blurOnSubmit={false}
              allowFontScaling={false}
              maxLength={maxLength ?? 100}
              onSubmitEditing={onSubmitEditing}
              onChangeText={onChangeText}
              placeholder={placeholder ?? label}
              selectionColor={colors.TextSelection}
              returnKeyType={returnKeyType ?? 'next'}
              keyboardType={keyboardType ?? 'default'}
              placeholderTextColor={colors.placeholder}
              autoCapitalize={autoCapitalize ?? 'sentences'}
              style={[
                style.input,
                {
                  fontSize: inputFont,
                  textAlignVertical: TextInputProps?.multiline && 'top',
                  ...disabledColorText,
                },
                textInput,
              ]}
              {...TextInputProps}
            />
            {/* Input Right Icon */}
            {RightCompo && <View style={style.RightCompo}>{RightCompo}</View>}
          </View>
          {showWordCount && (
            <View
              style={{
                alignSelf: 'flex-end',
                flexDirection: 'row',
                paddingBottom: 10,
                paddingRight: 15,
              }}>
              <TextBox
                text={TextInputProps?.value ? TextInputProps?.value.length : 0}
                fontFamily={fonts.regular}
              />
              <TextBox text={`/${maxLength}`} fontFamily={fonts.regular} />
            </View>
          )}
        </View>
      </View>
    );
  },
);

export default memo(InputField);

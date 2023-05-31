import React, {memo} from 'react';
import {Modal, View} from 'react-native';

//Components
import {CTAButton, TextBox, Icons} from 'components';

// type
import {modalProps} from './type';

// theme
import {fonts} from 'theme/fonts';
//style
import styles from './style';
import constants from 'theme/constants';

const ConfirmModal = memo(
  ({
    source,
    description,
    visible,
    leftButton,
    rightButton,
    Colors,
    textSize = 18,
  }: modalProps) => {
    const style = styles(Colors);
    return (
      <Modal
        statusBarTranslucent={true}
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {}}>
        <View style={style.container}>
          <View style={style.modalView}>
            <Icons source={source} size={40} />
            <View style={style.textContainer}>
              <TextBox
                text={description}
                styles={style.text}
                size={textSize}
                fontFamily={fonts.regular}
              />
            </View>
            <View style={style.buttonContainer}>
              {leftButton && (
                <CTAButton
                  type={constants.small}
                  text={leftButton?.text}
                  color={Colors?.themeColor}
                  buttonStyle={leftButton?.style}
                  onPress={leftButton.onPress}
                  isShadow={false}
                  hideShadow
                />
              )}
              {rightButton && (
                <CTAButton
                  type={constants.small}
                  text={rightButton?.text}
                  color={Colors?.themeColor}
                  buttonStyle={rightButton?.style}
                  onPress={rightButton.onPress}
                  isShadow={false}
                  hideShadow
                />
              )}
            </View>
          </View>
        </View>
      </Modal>
    );
  },
);
export default ConfirmModal;

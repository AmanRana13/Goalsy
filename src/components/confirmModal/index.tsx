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
import {BlurView} from '@react-native-community/blur';

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
    const style = styles(Colors!);
    return (
      <>
        <Modal
          statusBarTranslucent={true}
          animated={true}
          animationType="fade"
          transparent={true}
          visible={visible}
          onRequestClose={() => {}}
        >
          <BlurView
            style={{
              flex:1
            }}
            blurType="dark"
            blurAmount={2}
            >
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
                    showShadow={false}
                    hideShadow
                  />
                )}
                {rightButton && (
                  <CTAButton
                    type={constants.small}
                    text={rightButton?.text}
                    color={Colors?.themeColor}
                    buttonStyle={rightButton.style}
                    onPress={rightButton.onPress}
                    showShadow={false}
                    hideShadow
                  />
                )}
              </View>
            </View>
          </View>
          </BlurView>
        </Modal>
      </>
    );
  },
);
export default ConfirmModal;

import React, {memo} from 'react';
import {View} from 'react-native';
import {CTAButton, Icons, TextBox} from 'components';
import usePixel from 'hook/DevicePixel';
import {friendCardProps} from './type';
import style from './styles';
import {fonts} from 'theme/fonts';
import constants from 'theme/constants';

const FriendsCard = memo(({item, color, button1, button2}: friendCardProps) => {
  const height = usePixel(110);
  const styles = style(color);
  return (
    <View style={[styles.container, {height: height}]}>
      <Icons
        source={item?.source}
        size={60}
        disabled={true}
        styles={styles.icons}
      />
      <View style={styles.text}>
        {item?.userName && (
          <TextBox
            text={item?.userName}
            size={20}
            fontFamily={fonts.semiBold}
          />
        )}
        {item?.description && <TextBox text={item?.description} size={15} />}
      </View>
      <View style={styles.button}>
        {button1 && (
          <CTAButton
            text={button1.text}
            onPress={button1.onPress}
            type={constants.small}
            color={color.themeColor}
            textColor={color.commonBlack}
            fontFamily={fonts.semiBold}
            showShadow={false}
            hideShadow={true}
          />
        )}

        {button2 && (
          <CTAButton
            text={button2.text}
            onPress={button2.onPress}
            type={constants.small}
            color={color.gray}
            textColor={color.commonBlack}
            fontFamily={fonts.semiBold}
            showShadow={false}
            hideShadow={true}
          />
        )}
      </View>
    </View>
  );
});

export default FriendsCard;

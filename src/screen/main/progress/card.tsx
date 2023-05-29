import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CTAButton, TextBox} from 'components';
import constants, {routesConstants} from 'theme/constants';
import {Width} from 'hook/DevicePixel';
import {fonts} from 'theme/fonts';

type props = {
  header: string;
  description: string;
  size: number;
  fontFamily?: string;
};

const Card = ({color, navigation}) => {
  const style = styles(color);
  const InnerRow = ({header, description, size, fontFamily}: props) => {
    return (
      <View style={{flexDirection: 'row', gap: 6, flexWrap: 'wrap'}}>
        <TextBox text={header} size={size} fontFamily={fontFamily} />
        <TextBox text={description} size={size} fontFamily={fontFamily} />
      </View>
    );
  };
  return (
    <View style={style.container}>
      <View style={style.innerContainer}>
        <InnerRow
          header={'Activity Name'}
          description={'HELLO'}
          size={18}
          fontFamily={fonts.semiBold}
        />
        <InnerRow
          header={'Goal Name'}
          description={'HELLO'}
          size={18}
          fontFamily={fonts.semiBold}
        />
        <InnerRow
          fontFamily={fonts.medium}
          header={'Reminder:'}
          description={'M,T,W: 12:00 PM'}
          size={13}
        />
        <InnerRow
          fontFamily={fonts.medium}
          header={'Due Date:'}
          description={'May 05, 1923'}
          size={13}
        />
      </View>
      <View style={{gap: 10, justifyContent: 'space-evenly'}}>
        <CTAButton
          isShadow={false}
          text={'Edit'}
          color={color.themeColor}
          type={constants.small}
          buttonStyle={style.buttonStyle}
          onPress={() => navigation.navigate(routesConstants.editActivity)}
          fontFamily={fonts.semiBold}
        />
        <CTAButton
          isShadow={false}
          text={'Complete'}
          color={color.themeColor}
          type={constants.small}
          buttonStyle={style.buttonStyle}
          fontFamily={fonts.semiBold}
        />
      </View>
    </View>
  );
};

export default Card;

const styles = color =>
  StyleSheet.create({
    container: {
      gap: 10,
      padding: 15,
      borderRadius: 16,
      width: Width - 40,
      marginTop: 20,
      flexDirection: 'row',
      backgroundColor: color.white,
      justifyContent: 'space-between',
    },
    innerContainer: {maxWidth: Width * 0.58, gap: 4, flex: 8},
    buttonStyle: {width: Width * 0.22, height: 35},
  });

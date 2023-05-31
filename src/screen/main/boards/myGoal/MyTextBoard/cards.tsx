import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TextBox from 'components/textBox';
import {Spacer} from 'components';
import Icons from 'components/icons';
import appImages from 'theme/images';
import { colors } from 'theme/colors';
import { onShare } from 'utils/globalFunctions';

export const VisionCards = ({item, color}) => {
  const style = styles(color);
  return (
    <View style={style.container}>
      <TextBox text={item.vision} size={18} />
      <TextBox text={item.name} size={18} />
      <TextBox text={item.category} size={18} />
      <View style={{flexDirection: 'row', gap: 10}}>
        <TextBox text={'Due Date:'} size={18} />
        <TextBox text={item.date} size={18} />
      </View>
    </View>
  );
};

export const ActivityCards = ({color}) => {
  const style = styles(color);
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View
          style={{
            flexDirection: 'row',
            gap: 20,
          }}>
          <View style={{flex: 1, gap: 5}}>
            <TextBox text={'Activity Name WWWW'} size={19} />
            <TextBox text={'Goal Name'} size={19} />
          </View>
        </View>
        <Spacer />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
          }}>
          <View>
            <TextBox text={'Reminder: M,T 12:00 PM'} size={14} />
            <TextBox text={'Due Date: May 05, 2023'} size={14} />
          </View>
          <Icons
            source={[appImages.shareIcon, appImages.shareIconDark]}
            size={30}
            onPress={() => onShare()}
          />
          {/* <CTAButton
            text={constants.complete}
            buttonStyle={style.buttonStyle}
            color={color?.themeColor}
            type={constants.small}
            buttonStyle={{
              width: Width * 0.25,
            }}
          /> */}
        </View>
      </View>
    </View>
  );
};

const styles = (color:colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: color.darkGray,
      marginVertical: 10,
      borderRadius: 15,
      gap: 5,
      paddingVertical: 15,
      paddingHorizontal: 15,
    },
    header: {
      columnGap: 10,
    },
    InnerHeader: {gap: 10},
    time: {
      alignSelf: 'flex-end',
      marginTop: 8,
    },
    icons: {flex: 2},
    icon: {
      alignSelf: 'flex-end',
    },
  });

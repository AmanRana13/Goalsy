import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CTAButton, TextBox} from 'components';
import style from './styles';
import {GoalCardProps} from './type';
import constants, {routesConstants} from 'theme/constants';
import {Width} from 'hook/DevicePixel';
import Spacer from 'components/spacer';

const ActivityCard = ({
  color,
  onPress,
  disabled,
  navigation,
}: GoalCardProps) => {
  const styles = style(color);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routesConstants.editActivity)}
      disabled={disabled}
      style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            gap: 20,
          }}>
          <View style={{flex: 1}}>
            <TextBox text={'Activity Name WWWW'} size={19} />
            <TextBox text={'Goal Name'} size={19} />
          </View>
        </View>
        {/* <Spacer /> */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
          }}>
          <View style={{rowGap:3}}>
            <TextBox text={"Reminders: M,T,W: 12:00 PM"} size={14} />
            <TextBox text={'Due Date: May 05, 2023'} size={14} />
          </View>
          <CTAButton
            showShadow={false}
            text={constants.complete}
            buttonStyle={style.buttonStyle}
            color={color?.themeColor}
            type={constants.small}
            buttonStyle={{
              width: Width * 0.25,
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ActivityCard;

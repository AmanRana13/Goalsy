import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CTAButton, Icons, TextBox} from 'components';
import style from './styles';
import {GoalCardProps} from './type';
import constants, {routesConstants} from 'theme/constants';
import {Width} from 'hook/DevicePixel';
import Spacer from 'components/spacer';

const ActivityCard = ({
  item,
  source,
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
          <CTAButton
            isShadow={false}
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

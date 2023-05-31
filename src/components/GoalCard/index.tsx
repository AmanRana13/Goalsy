import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CTAButton, Icons, TextBox} from 'components';
import style from './styles';
import {GoalCardProps} from './type';
import appImages from 'theme/images';
import constants, {routesConstants} from 'theme/constants';
import {Width} from 'hook/DevicePixel';
import Spacer from 'components/spacer';
import {navigationRef} from 'routes/navigationServices';
import { onShare } from 'utils/globalFunctions';

const GoalCard = ({
  item,
  source,
  color,
  onPress,
  disabled = true,
  showButton = true,
}: GoalCardProps) => {
  const styles = style(color);
  return (
    <TouchableOpacity disabled={disabled} style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            gap: 20,
          }}>
          <Icons
            disabled={true}
            source={appImages.DummyGoal}
            styles={{
              borderRadius: 10,
              borderWidth: 3,
              borderColor: color.themeColor,
            }}
            size={80}
          />
          <View style={{flex: 1, gap: 5}}>
            <TextBox text={'Goal Name WWWW'} size={19} />
            <TextBox text={'Category Name'} size={14} />
            <View
              style={{
                flexDirection: 'row',
                gap: 8,
                justifyContent: 'space-between',
              }}>
              <TextBox text={'Due Date: May 05, 2023'} size={14} />

              <Icons
                source={[appImages.shareIcon,appImages.shareIconDark]}
                size={20}
                styles={{alignSelf: 'flex-end'}}
                onPress={()=>onShare()}
              />
            </View>
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
          <Icons
            disabled={true}
            source={appImages.slider}
            styles={{
              flex: 1,
              height: 15,
              marginHorizontal: 5,
              borderRadius: 20,
            }}
            resize={showButton ? 'contain' : 'cover'}
          />
          {showButton ? (
            <CTAButton
              isShadow={false}
              text={constants.complete}
              buttonStyle={style.buttonStyle}
              color={color?.themeColor}
              type={constants.small}
              buttonStyle={{
                width: Width * 0.25,
              }}
              hideShadow
            />
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GoalCard;

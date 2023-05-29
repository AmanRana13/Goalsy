import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CTAButton, Icons, TextBox} from 'components';
import style from './styles';
import {GoalCardProps} from './type';
import constants, {routesConstants} from 'theme/constants';
import appImages from 'theme/images';
import {Width} from 'hook/DevicePixel';
import {fonts} from 'theme/fonts';
import {onShare} from 'utils/globalFunctions';

const VisionCard = ({
  item,
  source,
  color,
  onPress,
  disabled,
  navigation,
}: GoalCardProps) => {
  const styles = style(color);
  return (
    <View style={styles.container}>
      <View style={{flex: 1, gap: 5}}>
        <TextBox
          text={'My Vision Name WWWW'}
          size={16}
          fontFamily={fonts.semiBold}
        />
        <TextBox text={'Vision Name'} size={16} fontFamily={fonts.semiBold} />
        <TextBox
          text={'Vision Category'}
          size={16}
          fontFamily={fonts.semiBold}
        />
        <TextBox
          text={'Due Date: May 05, 2023'}
          size={16}
          fontFamily={fonts.semiBold}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignSelf: 'center',
            justifyContent: 'center',
            flex: 1,
          }}>
          <CTAButton
            isShadow={false}
            text={constants.edit}
            buttonStyle={style.buttonStyle}
            color={color?.themeColor}
            type={constants.small}
            onPress={() => navigation.navigate(routesConstants.editVision)}
            buttonStyle={{
              width: Width * 0.22,
            }}
          />
          <CTAButton
            isShadow={false}
            text={constants.invite}
            buttonStyle={style.buttonStyle}
            color={color?.themeColor}
            type={constants.small}
            buttonStyle={{
              width: Width * 0.22,
            }}
            onPress={() => navigation.navigate(routesConstants.inviteUser)}
          />
        </View>
        <Icons
          source={appImages.shareIcon}
          onPress={() => onShare()}
          size={20}
          styles={{alignSelf: 'flex-end', marginBottom: 8}}
        />
      </View>
    </View>
  );
};

export default VisionCard;

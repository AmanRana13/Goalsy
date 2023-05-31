import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CTAButton, Spacer, TextBox} from 'components';
import appImages from 'theme/images';
import constants from 'theme/constants';
import {colors} from 'theme/colors';
import Icons from 'components/icons';
import CheckBox from 'components/checkBox';
import {Width} from 'hook/DevicePixel';
import {goBack} from 'routes/navigationServices';

const InviteUserCard = ({color, item, onPress = () => {}, isModal = false}) => {
  const style = styles(color);
  const CheckBoxContainer = ({type}) => {
    return (
      <View style={{flexDirection: 'row', gap: 20}}>
        <CheckBox color={color} />
        <TextBox text={type} size={20} />
      </View>
    );
  };
  return (
    <View style={style.container}>
      <View style={{flexDirection: 'row', gap: 20}}>
        <Icons
          source={appImages.dummyUser}
          styles={{
            borderWidth: 3,
            borderColor: color?.themeColor,
            borderRadius: 150,
          }}
          size={80}
        />
        <View style={{justifyContent: 'center', alignSelf: 'center', gap: 20}}>
          <TextBox
            text={item.userName ?? 'Evelyn'}
            size={26}
            styles={{paddingTop: 25}}
          />
          {/* <Spacer height={constants.height30} /> */}
          <CheckBoxContainer type={'Invite'} />
          <CheckBoxContainer type={'View'} />
          <CheckBoxContainer type={'Edit'} />
          <Spacer height={constants.height20} />
        </View>
      </View>

      <CTAButton
        text={item.buttonName}
        type={constants.medium}
        color={color.themeColor}
        textColor={color.commonBlack}
        buttonStyle={{
          alignSelf: 'center',
          width:
            item.buttonName ===constants.updateInviteAccess
              ? Width * 0.63
              : Width * 0.44,
        }}
        onPress={() => {
          isModal ? onPress() :goBack()
        }}
      />
    </View>
  );
};

export default InviteUserCard;

const styles = (color: colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: color?.darkGray,
      paddingHorizontal: 30,
      paddingVertical: 20,
      marginVertical: 12,
      borderRadius: 15,
    },
  });

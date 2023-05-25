import React, {useCallback, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {
  Header,
  Icons,
  TextBox,
  StatusHeader,
  RoundCheckBox,
  Spacer,
  BackButton,
  ConfirmModal,
} from 'components';

import constants, {routesConstants} from 'theme/constants';
import appImages from 'theme/images';
import {colors} from 'theme/colors';
import {Width} from 'hook/DevicePixel';
import {logout} from 'utils/globalFunctions';

const AccountSetting = ({navigation}: any): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const [buttonClick, setButtonClick] = useState('');
  const data = [
    {
      id: 1,
      name: 'notification',
      onPress: () => navigation.navigate(routesConstants.notification),
      source: [appImages.notification, appImages.notificationDark],
    },
    {
      id: 2,
      name: 'changesPassword',
      source: [appImages.changePassword, appImages.changePasswordDark],
      onPress: () => navigation.navigate(routesConstants.changePassword),
    },
    {
      id: 3,
      name: 'needHelp',
      source: [appImages.needHelp, appImages.needHelpDark],
      onPress: () => navigation.navigate(routesConstants.needHelp),
    },
    {
      id: 4,
      name: 'deleteAccount',
      onPress: () => {
        setButtonClick(constants.deleteButton);
        setShowModal(true);
      },
      source: [appImages.deleteAccount, appImages.deleteAccountDark],
    },
    {
      id: 5,
      name: 'logout',
      onPress: () => {
        setShowModal(true);
        setButtonClick(constants.logoutButton);
      },
      source: [appImages.logout, appImages.logoutDark],
    },
  ];

  const {colors}: colors | any = useTheme();
  const CheckBox = useCallback(
    ({title, onPress}: any) => {
      return (
        <View style={styles.checkBox}>
          <TextBox text={title} size={17} />
          <RoundCheckBox color={colors} value={onPress} />
        </View>
      );
    },
    [colors],
  );

  const SettingIcon = () => {
    return data?.map(item => {
      return (
        <Icons
          source={item.source}
          size={170}
          onPress={item.onPress}
          color={colors}
        />
      );
    });
  };

  return (
    <View style={{flex: 1}}>
      <StatusHeader />
      <View style={{paddingHorizontal: constants.screenPadding}}>
        <Header title={constants.AccountSetting} LeftIcon={<BackButton />} />
      </View>
      <Spacer />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: constants.screenPadding}}>
          <TextBox
            text={'Notifications Sound'}
            styles={{alignSelf: 'center'}}
            size={16}
          />
          <Spacer height={constants.height30} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CheckBox title={'Social Sounds'} onPress={() => {}} />
            <CheckBox title={'Goal Sounds'} onPress={() => {}} />
          </View>
        </View>
        <Spacer height={constants.height30} />
        <View style={{paddingHorizontal: 10}}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              rowGap: Width * 0.04,
            }}>
            <SettingIcon />
          </View>
        </View>
        <Spacer height={constants.height50} />
      </ScrollView>
      <ConfirmModal
        textSize={14}
        source={
          buttonClick === constants.deleteButton
            ? [appImages.deleteAcc, appImages.deleteAccDark]
            : [appImages.warring, appImages.warringDark]
        }
        visible={showModal}
        Colors={colors}
        description={
          buttonClick === constants.deleteButton
            ? constants.deleteAcc
            : constants.logout
        }
        leftButton={{
          text: 'Yes',
          onPress: () => {
            setShowModal(false);
            if (buttonClick !== constants.deleteButton) {
              logout('Logout successfully');
            }
          },
        }}
        rightButton={{
          text: 'No',
          onPress: () => {
            setShowModal(false);
          },
        }}
      />
    </View>
  );
};

export default AccountSetting;

const styles = StyleSheet.create({
  checkBox: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-evenly',
  },
});

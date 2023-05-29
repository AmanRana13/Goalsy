import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Alert, Dimensions, ScrollView, Share, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

// components
import {Icons, Spacer, TextBox, StatusHeader} from 'components';

// theme
import appImages from 'theme/images';
import constants, {routesConstants} from 'theme/constants';
import {DataManager} from 'utils/dataManager';

// style
import styles from './styles';
import usePixel, {Width} from 'hook/DevicePixel';
import {hasNotch} from 'react-native-device-info';
import {openLinks} from 'utils/globalFunctions';

const Home = ({navigation}): any => {
  const {colors}: any = useTheme();
  const sizes = usePixel(constants.progressIconSize);
  const style = styles(colors);
  const [name, setName] = useState('');
  useLayoutEffect(() => {
    getName();
  }, []);
  const getName = async () => {
    const tempData = await DataManager.getUserData();
    const tempName = JSON.parse(tempData).name.toString();
    setName(tempName);
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={style.container}>
      <StatusHeader />
      <Spacer />
      <TextBox text={constants.hello} size={16} />
      <TextBox text={name} size={34} textProps={
        {
          numberOfLines:1
        }
      }/>
      <Spacer />
      <Icons
        size={constants.progressIconSize + (hasNotch() ? 0 : -25)}
        disabled={true}
        styles={style.center}
        source={[appImages.progressLogo, appImages.progressLogo]}
      />
      <Spacer height={constants.height30} />
      <View style={style.iconsOuterContainer}>
        <View
          style={{
            height: sizes * 3,
            width: Width,
            position: 'relative',
          }}>
          <View
            style={[
              style.common,
              {
                left: sizes * 0.41,
              },
            ]}>
            <Icons
              size={constants.progressIconSize}
              source={[appImages.learnAbout, appImages.learnAboutDark]}
              onPress={() => navigation.navigate(routesConstants.learnAbout531)}
            />
            <Icons
              size={constants.progressIconSize}
              source={[appImages.additional, appImages.additionalDark]}
              onPress={() => openLinks(constants.additionalResourcesURL)}
            />
          </View>

          <View
            style={[
              style.common,
              {
                top: sizes * 0.705,
                left: 0,
              },
            ]}>
            <Icons
              size={constants.progressIconSize}
              source={[appImages.account, appImages.accountDark]}
              onPress={() =>
                navigation.navigate(routesConstants.AccountSetting)
              }
            />
            <Icons
              size={constants.progressIconSize}
              source={[appImages.visionBoard, appImages.visionBoardDark]}
              onPress={() => navigation.navigate(routesConstants.boards)}
            />
            <Icons
              source={[appImages.about, appImages.aboutDark]}
              size={constants.progressIconSize}
              onPress={() => navigation.navigate(routesConstants.aboutUs)}
            />
          </View>
          <View
            style={[
              style.common,
              {
                left: sizes * 0.415,
                top: sizes * 1.41,
              },
            ]}>
            <Icons
              source={[appImages.share, appImages.shareDark]}
              size={constants.progressIconSize}
              onPress={onShare}
            />
            <Icons
              size={constants.progressIconSize}
              source={[appImages.updateProfile, appImages.updateProfileDark]}
              onPress={() => navigation.navigate(routesConstants.Profile)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

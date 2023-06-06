import React, { useEffect } from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

// components
import {Icons, TextBox, Spacer, StatusHeader} from 'components';

// themes
import appImages from 'theme/images';
import constants, {routesConstants} from 'theme/constants';

// styles
import styles from './style';
import {colors} from 'theme/colors';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

const Welcome = ({navigation}: any) => {
  const {colors}: colors | any = useTheme();
  const style = styles(colors);
  useEffect(()=>{
    (async () => {
      try {
        const response = await changeNavigationBarColor("#D4F369");
      } catch (e) {
      }
    })();
  },[])
  return (
    <View style={style.container}>
      <StatusHeader color={'#D4F369'} />
      <View style={style.innerContainer}>
        <Icons source={appImages.welcomeMsg} styles={style.image} disabled />
      </View>
      <Spacer height={constants.height50} />
      <View style={style.text}>
        <Icons source={appImages.welcomeGroup} styles={style.image} disabled />
      </View>
      <TouchableOpacity
        style={style.group}
        onPress={() => navigation.navigate(routesConstants.login)}>
        <View style={style.button}>
          <View style={style.innerButtonContainer}>
            <TextBox
              text={constants.start}
              color={colors.commonWhite}
              size={26}
            />
          </View>
          <View style={style.buttonImage}>
            <Icons source={appImages.forwardArrow} disabled={true} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

import React, {useState} from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';

// components
import {TextBox, Icons, Spacer, CTAButton} from 'components';

import constants, {routesConstants} from 'theme/constants';

// style
import styles from './styles';
import usePixel, {Width} from 'hook/DevicePixel';
import appImages from 'theme/images';
import {fonts} from 'theme/fonts';
import VisionCard from 'components/visionCard';

const boxButtonName = [5, 3, 1];

const MyVision = ({navigation}): any => {
  const {colors}: any = useTheme();
  const [showData, setShowData] = useState(false);
  const style = styles(colors);
  const sizes = usePixel(360);
  return (
    <View style={style.container}>
      {!showData ? (
        <>
          <TextBox
            text={constants.vision}
            size={20}
            styles={{alignSelf: 'center'}}
          />
          <View
            style={{
              width: sizes,
              height: sizes / 2,
              backgroundColor: colors.commonWhite,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              borderRadius: 23,
              marginVertical: 20,
            }}>
            <Icons
              size={50}
              source={appImages.plus}
              onPress={() => navigation.navigate(routesConstants.createVision)}
              styles={{marginTop: 5}}
            />
            <TextBox text={constants.createVision} size={20} />
          </View>
          <TextBox
            text={constants.welcome}
            size={45}
            styles={{alignSelf: 'center', marginBottom: 40}}
            onPress={() => setShowData(true)}
          />
          <TextBox
            text={constants.dummyText}
            size={16}
            fontFamily={fonts.regular}
            styles={{alignSelf: 'center'}}
          />
        </>
      ) : (
        <View style={{flex: 1}}>
          <VisionCard color={colors} navigation={navigation} />
          <Spacer flex={1} />
          <CTAButton
            text={constants.ViewBoard}
            buttonStyle={style.buttonStyle}
            color={colors?.themeColor}
            type={constants.large}
            buttonStyle={{
              alignSelf: 'center',
              width: Width * 0.55,
            }}
            onPress={() => navigation.navigate(routesConstants.myBoard, false)}
          />
          <Spacer flex={1} />
        </View>
      )}
    </View>
  );
};

export default MyVision;

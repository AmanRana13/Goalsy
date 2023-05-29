import React, {useState} from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';

// components
import {TextBox, CTAButton, Spacer} from 'components';

import constants, {routesConstants} from 'theme/constants';

// style
import styles from './styles';
import {fonts} from 'theme/fonts';
import ActivityCard from 'components/activityCard';

const Activity = ({navigation}): any => {
  const {colors}: any = useTheme();
  const [showData, setShowData] = useState(false);
  const style = styles(colors);
  return (
    <View style={style.container}>
      {!showData ? (
        <>
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
            styles={{alignSelf: 'center', marginBottom: 90}}
          />
        </>
      ) : (
        <>
          <ActivityCard color={colors} navigation={navigation} />
          <ActivityCard color={colors} navigation={navigation} />
        </>
      )}
      <View>
      {/* <Spacer height={constants.height30}/> */}
        <TextBox
          text={'Note: Maximum 10 activities can be created'}
          size={16}
          styles={{alignSelf: 'center'}}
          fontFamily={fonts.regular}
        />
        <Spacer height={constants.height20}/>
        <CTAButton
          text={constants.addActivity}
          buttonStyle={style.buttonStyle}
          color={colors.themeColor}
          type={constants.large}
          onPress={() => navigation.navigate(routesConstants.addActivity)}
        />
      </View>
    </View>
  );
};

export default Activity;

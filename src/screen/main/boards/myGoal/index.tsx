import React, {useState} from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';

// components
import {TextBox, CTAButton} from 'components';

import constants, {routesConstants} from 'theme/constants';

// style
import styles from './styles';
import {fonts} from 'theme/fonts';
import GoalCard from 'components/GoalCard';
import Spacer from 'components/spacer';

const boxButtonName = [5, 3, 1];
const Board = ({navigation}): any => {
  const {colors}: any = useTheme();
  const style = styles(colors);
  const [data, showData] = useState(false);
  return (
    <View style={style.container}>
      {!data ? (
        <>
          <TextBox
            text={constants.welcome}
            size={45}
            styles={{alignSelf: 'center', marginBottom: 40}}
            onPress={() => showData(true)}
          />
          <TextBox
            text={constants.dummyText}
            size={16}
            fontFamily={fonts.regular}
            styles={{alignSelf: 'center', marginBottom: 90}}
          />
        </>
      ) : (
        <GoalCard color={colors} />
      )}
      <View style={{alignSelf: 'center'}}>
        <TextBox
          text={'Note: Maximum 5 goals can be created'}
          size={16}
          styles={{alignSelf: 'center'}}
          fontFamily={fonts.regular}
        />
        <Spacer height={constants.height30}/>
        <CTAButton
          text={constants.addGoal}
          buttonStyle={style.buttonStyle}
          color={colors.themeColor}
          type={constants.large}
          onPress={() => navigation.navigate(routesConstants.addGoal)}
        />
      </View>
    </View>
  );
};

export default Board;

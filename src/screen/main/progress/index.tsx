import React from 'react';
import {ScrollView, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

// components
import {
  Spacer,
  TextBox,
  StatusHeader,
  Header,
  Icons,
  DropDown,
} from 'components';

import constants from 'theme/constants';

// style
import styles from './styles';
import usePixel, {Width} from 'hook/DevicePixel';
import appImages from 'theme/images';
import Card from './card';
import CustomCalender from 'components/customCalandar';
import {fonts} from 'theme/fonts';

let list = [
  {id: 1, value: 'vision1'},
  {id: 2, value: 'vision2'},
  {id: 3, value: 'vision3'},
  {id: 4, value: 'vision3'},
  {id: 5, value: 'vision3'},
  {id: 6, value: 'vision3'},
  {id: 7, value: 'vision3'},
];
let list2 = [
  {id: 1, value: 'Type 1'},
  {id: 2, value: 'Type 1'},
  {id: 3, value: 'Type 1'},
];

const Progress = ({navigation}): any => {
  const {colors}: any = useTheme();
  const sizes = usePixel(constants.progressIconSize);
  const style = styles(colors);
  const onDropDownPress = item => {
  };
  return (
    <View style={style.container}>
      <StatusHeader />
      <Header title={constants.trackProgress} />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <Spacer />
        <TextBox
          text={constants.activity}
          styles={{alignSelf: 'center'}}
          fontFamily={fonts.semiBold}
          size={19}
        />
        <View
          style={{
            marginVertical: 30,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            justifyContent: 'space-evenly',
          }}>
          <Icons source={appImages.chart} size={30} />
          <Icons source={appImages.progressWheel} size={250} disabled={true} />
          <Icons source={appImages.edit} size={34} />
        </View>
        <View style={style.quote}>
          <TextBox
            text={'Quote comes here'}
            size={20}
            fontFamily={fonts.semiBold}
          />
        </View>
        <Spacer height={constants.height30} />
        <Card color={colors} navigation={navigation} />
        <Card color={colors} navigation={navigation} />
        <Spacer height={constants.height30} />
        <CustomCalender />
        <Spacer height={constants.height30} />
        <DropDown
          onPress={onDropDownPress}
          color={colors}
          list={list}
          label={'Select Vision'}
        />
        <Spacer height={constants.height20} />
        <DropDown
          onPress={onDropDownPress}
          color={colors}
          list={list2}
          label={'Select Type'}
        />
        <Spacer height={constants.BottomHeight} />
      </ScrollView>
    </View>
  );
};

export default Progress;

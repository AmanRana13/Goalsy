import {ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {
  BackButton,
  CTAButton,
  Header,
  Icons,
  Spacer,
  StatusHeader,
  TextBox,
} from 'components';
import constants, {routesConstants} from 'theme/constants';
import {useTheme} from '@react-navigation/native';
import appImages from 'theme/images';
import {colors} from 'theme/colors';
import styles from './styles';
import {fonts} from 'theme/fonts';
import usePixel from 'hook/DevicePixel';

const categoryList = [
  {id: 1, value: 'category 1'},
  {id: 2, value: 'category 2'},
  {id: 3, value: 'category 3'},
];

const ViewSample = ({navigation}) => {
  const {colors}: colors | any = useTheme();
  const style = styles(colors);
  const sizes = usePixel(360);
  const [createBoard, setCreateBoard] = useState(false);

  return (
    <View style={style.container}>
      <StatusHeader />
      <Header LeftIcon={<BackButton />} title={constants.viewSample} />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <Spacer height={constants.height20} />
        <TextBox styles={{textAlign: 'center'}} text={'Sample 1'} size={40} />
        <Spacer height={constants.height20} />
        <View
          style={{
            width: sizes,
            height: sizes / 2,
            backgroundColor: colors.darkGray,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            borderRadius: 23,
            marginVertical: 20,
            paddingVertical: 30,
          }}>
          <Icons disabled={true} size={180} source={appImages.boardIcons} />
        </View>
        <Spacer height={constants.height20} />
        <TextBox styles={{textAlign: 'center'}} text={'Sample 2'} size={40} />
        <Spacer height={constants.height20} />
        <View
          style={{
            flexDirection: 'row',
            width: sizes,
            height: sizes / 2,
            backgroundColor: colors.darkGray,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 23,
            marginVertical: 20,
            paddingVertical: 10,
            paddingStart: 80,
            paddingEnd: 16,
          }}>
          <Icons disabled={true} size={120} source={appImages.sample2} />
          <TextBox
            styles={{
              textAlign: 'right',
              height: '100%',
            }}
            text={'Hello'}
            size={20}
          />
        </View>
        <Spacer height={constants.height20} />
        <TextBox styles={{textAlign: 'center'}} text={'Sample 3'} size={40} />
        <Spacer height={constants.height20} />
        <View
          style={{
            width: sizes,
            height: sizes / 2,
            backgroundColor: colors.darkGray,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            borderRadius: 23,
            marginVertical: 20,
            paddingVertical: 30,
          }}>
          <Icons disabled={true} size={180} source={appImages.sample3} />
        </View>
        <Spacer height={constants.height50} />
      </ScrollView>
    </View>
  );
};

export default ViewSample;

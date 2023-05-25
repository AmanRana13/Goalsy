import {Image, ScrollView, View} from 'react-native';
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

const CreateBoard = ({navigation}) => {
  const {colors}: colors | any = useTheme();
  const style = styles(colors);
  const sizes = usePixel(360);
  const [createBoard, setCreateBoard] = useState(false);

  return (
    <View style={style.container}>
      <StatusHeader />
      <Header LeftIcon={<BackButton />} title={constants.createBoard} />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <Spacer height={constants.height20} />
        <View
          style={{
            width: sizes,
            height: sizes / 2,
            backgroundColor: colors.commonWhite,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            borderRadius: 23,
            marginVertical: 20,
            paddingVertical: 30,
          }}>
          <Icons disabled={true} size={180} source={appImages.boardIcons} />
        </View>
        <TextBox text={constants.selectShape} size={16} />
        <Spacer height={12} />
        <Image
          style={{width: '100%', height: 60}}
          source={appImages.selectShape}
        />
        <Spacer height={12} />
        <TextBox text={constants.selectBoardColor} size={16} />
        <Spacer height={12} />
        <Image
          style={{width: '100%', height: 60}}
          source={appImages.selectBoardColor}
        />
        <Spacer height={12} />
        <TextBox text={constants.selectImage} size={16} />
        <Spacer height={12} />
        <Image
          style={{width: 60, height: 60}}
          source={appImages.addBoardIcon}
        />
        <Spacer height={constants.height50} />
        <View style={{alignSelf: 'center'}}>
          <CTAButton
            onPress={() => {
              navigation.navigate(routesConstants.myBoard, true);
            }}
            text={constants.create}
            buttonStyle={style.buttonStyle}
            color={colors.themeColor}
            type={constants.large}
          />
        </View>
        <Spacer height={constants.height50} />
      </ScrollView>
    </View>
  );
};

export default CreateBoard;

import {ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {
  BackButton,
  ConfirmModal,
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

const MyBoard = ({navigation, route}) => {
  const {colors}: colors | any = useTheme();
  const style = styles(colors);
  const sizes = usePixel(360);
  const [showModal, setShowModal] = useState(false);
  console.log('rrrr', route?.params);

  return (
    <View style={style.container}>
      <StatusHeader />
      <Header
        RightIcon={
          route.params ? (
            <Icons
              size={32}
              source={appImages.delete}
              onPress={() => setShowModal(true)}
            />
          ) : null
        }
        LeftIcon={<BackButton />}
        title={constants.boards}
      />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <Spacer height={constants.height20} />
        <TextBox
          styles={{textAlign: 'center'}}
          text={constants.myBoardText}
          size={40}
        />
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
          {route.params ? (
            <Icons size={180} source={appImages.boardIcons} />
          ) : (
            <>
              <Icons
                size={50}
                source={appImages.plus}
                onPress={() => navigation.navigate(routesConstants.createBoard)}
              />
              <TextBox text={constants.createBoards} size={20} />
            </>
          )}
        </View>
        <Spacer height={constants.height50} />
        <View style={{alignSelf: 'center'}}>
          <CTAButton
            onPress={() => {
              navigation.navigate(routesConstants.viewSample);
            }}
            text={constants.viewSample}
            buttonStyle={style.buttonStyle}
            color={colors.themeColor}
            type={constants.large}
          />
          <Spacer height={constants.height30} />
          <CTAButton
            text={constants.viewMyTextboard}
            buttonStyle={style.buttonStyle1}
            color={colors.themeColor}
            type={constants.large}
            onPress={()=>{navigation.navigate(routesConstants.myTextBoard)}}
          />
          <Spacer height={constants.height30} />
          <CTAButton
            disabled={true}
            text={constants.purchases}
            buttonStyle={style.buttonStyle2}
            color={colors.themeColor}
            type={constants.large}
          />
        </View>
        <Spacer height={constants.height50} />
      </ScrollView>
      <ConfirmModal
        source={[appImages.warring, appImages.warringDark]}
        visible={showModal}
        Colors={colors}
        description={constants.removeFriend}
        leftButton={{
          text: 'Yes',
          onPress: () => {
            setShowModal(false);
            navigation.navigate(routesConstants.myBoard, false);
          },
        }}
        rightButton={{
          text: 'No',
          onPress: () => setShowModal(false),
        }}
      />
    </View>
  );
};

export default MyBoard;

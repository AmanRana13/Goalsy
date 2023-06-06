import React, {useCallback, useRef, useState} from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

// components
import {
  Icons,
  Spacer,
  StatusHeader,
  Header,
  InputField,
  BackButton,
  TextBox,
  CTAButton,
} from 'components';

// theme
import appImages from 'theme/images';
import constants, {routesConstants} from 'theme/constants';
import {fonts} from 'theme/fonts';

// style
import styles from './styles';
import {friendCount} from '../../type';
import usePixel from 'hook/DevicePixel';
import {width} from 'utils/globalFunctions';
const data = [
  {
    id: 1,
    post: appImages.dummyPost,
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isLiked: true,
  },
  {
    id: 2,
    post: appImages.dummyPost,
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isLiked: false,
  },
  {
    id: 3,
    post: appImages.dummyPost,
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isLiked: false,
  },
  {
    id: 4,
    post: appImages.dummyPost,
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isLiked: true,
  },
];
const OtherUserProfile = ({navigation}: any) => {
  const blackBoxHeight = usePixel(71);
  const sizes = usePixel(360);
  const widthButton = usePixel(130);
  const imageContainerHeight = usePixel(100);
  const {colors}: any = useTheme();
  const style = styles(colors, sizes);

  const CountsCard = useCallback(({count, title, onPress}: friendCount) => {
    return (
      <View style={{flex: 1}}>
        <TextBox
          text={count}
          size={20}
          color={colors.themeColor}
          styles={{alignSelf: 'center'}}
        />
        <TextBox
          text={title}
          size={17}
          fontFamily={fonts.medium}
          styles={{alignSelf: 'center'}}
          color={colors.commonWhite}
        />
      </View>
    );
  }, []);

  return (
    <View style={style.container}>
      <StatusHeader />
      <Header title={'User'} LeftIcon={<BackButton />} />
      <Spacer height={constants.height20} />
      <View
        style={{
          flexDirection: 'row',
          height: imageContainerHeight,
          justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: -10,
          width: width - 20,
        }}>
        <View style={{width: widthButton}} />
        <Icons size={100} source={appImages.dummyUser} styles={style.logo} />
        <CTAButton
          text={constants.addFriend}
          onPress={() => {}}
          type={'small'}
          color={colors.themeColor}
          textColor={colors.commonBlack}
          buttonStyle={{width: widthButton}}
          isShadow={false}
        />
      </View>
      <Spacer height={constants.height30} />
      <View
        style={{
          backgroundColor: '#000',
          flexDirection: 'row',
          marginBottom: 10,
          paddingVertical: 10,
          borderRadius: 10,
          height: blackBoxHeight,
        }}>
        <CountsCard count={'12'} title={'Followers'} />
        <Spacer
          styles={{
            borderLeftWidth: 3,
            borderColor: '#ffffff31',
            borderRadius: 2,
            height: '100%',
          }}
        />
        <CountsCard count={'12'} title={'Following '} />
      </View>
      <Spacer />
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View>
              <Icons
                disabled={true}
                source={item.post}
                styles={style.postImage}
                resize="cover"
              />
              <TextBox text={item.text} size={14} styles={style.postText} />
              <View style={style.likeCommentContainer}>
                <Icons
                  disabled={false}
                  size={30}
                  source={[appImages.heart, appImages.heartDark]}
                  imageStyle={item.isLiked ? null : {tintColor: colors.gray}}
                />
                <Icons
                  disabled={false}
                  size={30}
                  source={[appImages.comment, appImages.commentDark]}
                  onPress={() => {
                    navigation.navigate(routesConstants.comments);
                  }}
                  styles={{marginLeft: 8}}
                />
              </View>
              <View
                style={
                  data.length != index + 1
                    ? style.postFooter
                    : style.postFooterWithoutBorder
                }
              />
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default OtherUserProfile;

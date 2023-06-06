import React, {useEffect, useRef, useState} from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';
import {useIsFocused, useTheme} from '@react-navigation/native';

// components
import {
  Icons,
  Spacer,
  StatusHeader,
  Header,
  InputField,
  BackButton,
  TextBox,
  CountsCard,
} from 'components';

// theme
import appImages from 'theme/images';
import constants, {routesConstants} from 'theme/constants';

// style
import styles from './styles';
import {userProfile} from 'redux/actions/home';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {url} from 'redux/axios/apikit';
import FullScreenImage from 'components/FullScreenImage';

const Profile = ({navigation}: any) => {
  const {colors, dark}: any = useTheme();
  const inputRef: any = useRef([]);
  const scrollViewRef = useRef<any>();
  const style = styles(colors);
  const [toolTip, showToolTip] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const dispatch = useDispatch();
  const {userDetails} = useSelector((state: any) => state.homeReducer);
  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused && dispatch(userProfile());
  }, [isFocused]);

  useEffect(() => {
    if (toolTip) {
      setTimeout(() => {
        scrollViewRef && scrollViewRef?.current.scrollToEnd({animated: true});
      }, 10);
    }
  }, [toolTip]);
  return (
    <View style={style.container}>
      <StatusHeader />
      <Header
        title={'Profile'}
        LeftIcon={<BackButton />}
        RightIcon={
          <Icons
            source={[appImages.edit, appImages.editDark]}
            onPress={() => navigation.navigate(routesConstants.editProfile)}
          />
        }
      />
      <ScrollView
        ref={scrollViewRef}
        style={style.innerContainer}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <Spacer height={constants.height20} />
        <Icons
          size={120}
          source={{uri: url + userDetails?.profileImage}}
          styles={style.logo}
          imageStyle={style.image}
          onPress={() => setShowImage(true)}
        />
        <CountsCard
          friendCount={userDetails?.friend}
          friendRequestCount={userDetails?.friendRequests}
          colors={colors}
          navigation={navigation}
        />
        <InputField
          ref={ref => (inputRef[0] = ref)}
          colors={colors}
          TextInputProps={{
            editable: false,
            placeholder: constants.name,
            value: userDetails?.name,
            nextField: () => inputRef[1].focus(),
          }}
          label={constants.name}
          disableColor
        />
        <InputField
          ref={ref => (inputRef[1] = ref)}
          colors={colors}
          TextInputProps={{
            editable: false,
            placeholder: constants.email,
            value: userDetails?.email,
            nextField: () => inputRef[2].focus(),
          }}
          label={constants.email}
          disableColor
        />
        <InputField
          colors={colors}
          TextInputProps={{
            editable: false,
            placeholder: constants.DOB,
            value: moment(userDetails?.dob).format('MMM DD, YYYY'),
          }}
          label={constants.DOB}
          RightCompo={<Icons source={appImages.calendar} size={30} />}
          disableColor
        />
        <InputField
          colors={colors}
          TextInputProps={{
            editable: false,
            placeholder: constants.location,
            returnKeyType: constants.done,
            value: userDetails?.location,
          }}
          label={constants.location}
          disableColor
        />
        <InputField
          colors={colors}
          TextInputProps={{
            editable: false,
            placeholder: constants.gender,
            value: userDetails?.gender,
          }}
          label={constants.gender}
          disableColor
        />
        <Spacer height={constants.height30} />
        <View style={style.buttonContainer}>
          <Icons
            source={appImages.aboutYourSelf}
            size={160}
            onPress={() => navigation.navigate(routesConstants.quiz)}
          />
          <Icons
            source={[appImages.exclamation, appImages.exclamationDark]}
            styles={style.exc}
            onPress={() => {
              showToolTip(!toolTip);
            }}
          />
          {toolTip && (
            <ImageBackground
              source={dark ? appImages.tooltipDark : appImages.tooltip}
              style={style.toolTip}
              resizeMode="cover">
              <TextBox styles={style.text} text={constants.tellUsMore} />
            </ImageBackground>
          )}
        </View>
        <Spacer height={constants.height50} />
      </ScrollView>
      <FullScreenImage
        visible={showImage}
        closeImage={() => setShowImage(false)}
        image={{uri: url + userDetails?.profileImage}}
      />
    </View>
  );
};

export default Profile;

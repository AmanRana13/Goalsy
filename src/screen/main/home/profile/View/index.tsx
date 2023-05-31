import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
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

const Profile = ({navigation}: any) => {
  const {colors, dark}: any = useTheme();
  const inputRef: any = useRef([]);
  const style = styles(colors);
  const [toolTip, showToolTip] = useState(false);
  const scrollViewRef = useRef();

  useEffect(() => {
    if (toolTip) {
      setTimeout(() => {
        scrollViewRef && scrollViewRef.current.scrollToEnd({animated: true});
      }, 10);
    }
  }, [toolTip]);

  const FriendCounts = useCallback(({count, title, onPress}: friendCount) => {
    return (
      <TouchableOpacity onPress={onPress} style={{flex: 1}}>
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
      </TouchableOpacity>
    );
  }, []);

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
        // onContentSizeChange={() =>  scrollViewRef.current.scrollToEnd({animated: true})}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <Spacer height={constants.height20} />
        <Icons size={120} source={appImages.dummyUser} styles={style.logo} />
        <View
          style={{
            backgroundColor: '#000',
            flexDirection: 'row',
            flex: 1,
            marginBottom: 10,
            paddingVertical: 10,
            borderRadius: 10,
          }}>
          <FriendCounts
            count={'12'}
            title={'Friends'}
            onPress={() =>
              navigation.navigate(routesConstants.Friend, {
                screen: routesConstants.Friend,
              })
            }
          />
          <Spacer
            styles={{
              borderLeftWidth: 3,
              borderColor: '#ffffff31',
              borderRadius: 2,
              height: '100%',
            }}
          />
          <FriendCounts
            count={'12'}
            title={'Friend Requests '}
            onPress={() =>
              navigation.navigate(routesConstants.Friend, {
                screen: routesConstants.friendRequest,
              })
            }
          />
        </View>
        <InputField
          ref={ref => (inputRef[0] = ref)}
          colors={colors}
          TextInputProps={{
            editable: false,
            placeholder: constants.name,
            value: 'Winni',
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
            value: 'winni@example.com',
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
            value: 'May 05,1995',
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
            value: 'New York',
          }}
          label={constants.location}
          disableColor
        />
        <InputField
          colors={colors}
          TextInputProps={{
            editable: false,
            placeholder: constants.gender,
            value: 'Female',
          }}
          RightCompo={<Icons source={appImages.downArrow} size={20} />}
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
            source={[appImages.exclamation,appImages.exclamationDark]}
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
    </View>
  );
};

export default Profile;

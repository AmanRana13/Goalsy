import React, {useEffect, useRef, useState} from 'react';

import {Platform, ScrollView, Text, View} from 'react-native';

// navigation
import {useIsFocused, useTheme} from '@react-navigation/native';

// components
import {
  CTAButton,
  CheckBox,
  Spacer,
  Icons,
  InputField,
  TextBox,
  StatusHeader,
} from 'components';

// themes
import appImages from 'theme/images';
import constants, {popupType, routesConstants} from 'theme/constants';

// styles
import styles from './style';
import {fonts} from 'theme/fonts';
import {useDispatch} from 'react-redux';
import {loginCheck} from 'utils/validator';
import {ShowAlertMessage} from 'utils/showAlertMessage';
import {loginAction} from 'redux/actions/authActions';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

const Login = ({navigation}: any): JSX.Element => {
  const dispatch = useDispatch();
  const {colors, dark}: any = useTheme();
  const inputRef: any = useRef([]);
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isChecked, setChecked] = useState<boolean>(true);
  const style = styles(colors);
  const scrollRef = useRef(null);

  const isFocused = useIsFocused();
  useEffect(() => {
    isFocused && scrollRef.current.scrollTo({y: 0, animation: true});
  }, [isFocused]);

  useEffect(() => {
    (async () => {
      try {
        const response = await changeNavigationBarColor(
          dark ? '#000000' : '#F5F6F0',
        );
      } catch (e) {}
    })();
  }, []);

  const onSubmit = () => {
    const isValidationFailed = loginCheck(email, password, isChecked);
    if (isValidationFailed) {
      ShowAlertMessage(isValidationFailed, popupType.error);
    } else {
      const body = {
        email: email,
        password: password,
        deviceType: Platform.OS,
        // deviceToken: '123456',
      };

      dispatch(loginAction(body));
    }
  };
  return (
    <View style={style.container}>
      <StatusHeader />
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <Spacer height={constants.height50} />
        <Icons
          size={140}
          source={[appImages.logo, appImages.logoDark]}
          styles={style.logo}
        />
        <InputField
          ref={ref => (inputRef[0] = ref)}
          colors={colors}
          TextInputProps={{
            placeholder: constants.email,
            autoCapitalize: 'none',
            nextField: () => inputRef[1].focus(),
            onChangeText: (data: string) => {
              let value = data.trim();
              setEmail(value);
            },
            value: email.toLowerCase(),
            // keyboardType: Platform.OS == 'ios' ? 'ascii-capable' : 'default',
          }}
          label={constants.email}
        />
        <InputField
          ref={ref => (inputRef[1] = ref)}
          colors={colors}
          TextInputProps={{
            placeholder: constants.password,
            returnKeyType: constants.done,
            secureTextEntry: showPassword,
            textContentType: 'oneTimeCode',
            onChangeText: (data: string) => {
              setPassword(data.trim());
            },
            value: password,
          }}
          label={constants.password}
          RightCompo={
            <Icons
              source={showPassword ? appImages.eyeHide : appImages.eye}
              size={30}
              onPress={() => setShowPassword(data => !data)}
            />
          }
        />
        <TextBox
          text={'Forgot Password?'}
          size={18}
          styles={style.FGPass}
          onPress={() => navigation.navigate(routesConstants.forgotPassword)}
        />
        <Spacer height={constants.height40} />
        <View style={style.checkBoxContainer}>
          <CheckBox value={data => setChecked(data)} color={colors} />
          <Text style={style.checkBoxText}>
            {constants.IHaveAccept}
            <TextBox
              text={constants.TC}
              size={16}
              styles={style.TC}
              onPress={() =>
                navigation.navigate(routesConstants.TermAndPolicy, {
                  screen: constants.TC,
                })
              }
            />
            {constants.and}
            <TextBox
              text={constants.PP}
              size={16}
              styles={style.TC}
              onPress={() =>
                navigation.navigate(routesConstants.TermAndPolicy, {
                  screen: constants.PP,
                })
              }
            />
          </Text>
        </View>
        <Spacer height={constants.height50} />
        <CTAButton
          text={constants.login}
          color={colors.themeColor}
          buttonStyle={style.buttonStyle}
          type={constants.medium}
          onPress={onSubmit}
        />
        <Spacer height={constants.height50} />
        <View style={style.notRegisContainer}>
          <Text style={style.notRegisText}>
            {constants.notRegister}
            <TextBox
              onPress={() => {
                setEmail('');
                setPassword('');
                navigation.navigate(routesConstants.signUp);
              }}
              text={constants.signUp}
              size={18}
              fontFamily={fonts.bold}
            />
          </Text>
        </View>
        <Spacer />
      </ScrollView>
    </View>
  );
};

export default Login;

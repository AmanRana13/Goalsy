import React, {useEffect, useRef, useState} from 'react';

import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';

// navigation
import {useTheme} from '@react-navigation/native';

// components
import {
  CTAButton,
  Spacer,
  Icons,
  InputField,
  Header,
  StatusHeader,
  BackButton,
} from 'components';

// themes
import appImages from 'theme/images';
import constants, {popupType} from 'theme/constants';

// styles
import styles from './style';
import {changePasswordCheck} from 'utils/validator';
import {ShowAlertMessage} from 'utils/showAlertMessage';
import {dispatch} from 'utils/globalFunctions';
import {changePasswordAction} from 'redux/actions/home';
import KeyboardManager from 'react-native-keyboard-manager';

const ChangePassword = ({navigation}: any): JSX.Element => {
  const {colors}: any = useTheme();
  const style = styles(colors);
  const inputRef: any = useRef([]);

  const [oldShowPassword, setOldShowPassword] = useState(true);
  const [newShowPassword, setNewShowPassword] = useState(true);
  const [keyboardOpen, setKeyBoardOpen] = useState(true);
  const [confirmNewShowPassword, setConfirmNewShowPassword] = useState(true);

  const [newPassword, setNewPassword] = useState<String>();
  const [confirmNewPassword, setConfirmNewPassword] = useState<String>();
  const [oldPassword, setOldPassword] = useState<String>();

  const onSubmit = () => {
    const isValidationFailed = changePasswordCheck(
      oldPassword,
      newPassword,
      confirmNewPassword,
    );
    if (isValidationFailed) {
      ShowAlertMessage(isValidationFailed, popupType.error);
    } else {
      dispatch(changePasswordAction({oldPassword, newPassword}));
    }
  };

  useEffect(() => {
    Platform.OS === 'ios' && KeyboardManager.setEnable(false);
    return () => Platform.OS === 'ios' && KeyboardManager.setEnable(true);
  }, []);

  useEffect(async () => {
    if (Platform.OS === 'ios') {
      let isKeyboardOpen = await KeyboardManager.isKeyboardShowing();
      setKeyBoardOpen(isKeyboardOpen);
    }
  }, []);

  return (
    <View style={style.container}>
      <StatusHeader />
      <Header title={constants.changePassword} LeftIcon={<BackButton />} />
      <Spacer height={constants.height30} />
      <KeyboardAvoidingView
        behavior="height"
        keyboardVerticalOffset={Platform.OS === 'ios' && keyboardOpen ? 50 : 0}
        contentContainerStyle={{
          height: Dimensions.get('window').height * 2.25,
          width: '100%',
          flexGrow: 1,
        }}
        style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}>
          <Icons
            size={140}
            source={[appImages.forgotPassword, appImages.forgotPasswordDark]}
            styles={style.logo}
          />
          <InputField
            ref={ref => (inputRef[0] = ref)}
            colors={colors}
            TextInputProps={{
              placeholder: constants.oldPassword,
              nextField: () => inputRef[1].focus(),
              secureTextEntry: oldShowPassword,
              textContentType: 'oneTimeCode',
              onChangeText: (data: string) => {
                setOldPassword(data.trim());
              },
              value: oldPassword,
            }}
            label={constants.oldPassword}
            RightCompo={
              <Icons
                size={30}
                source={oldShowPassword ? appImages.eyeHide : appImages.eye}
                onPress={() => setOldShowPassword(data => !data)}
              />
            }
          />
          <InputField
            ref={ref => (inputRef[1] = ref)}
            colors={colors}
            TextInputProps={{
              placeholder: constants.newPassword,
              nextField: () => inputRef[2].focus(),
              secureTextEntry: newShowPassword,
              textContentType: 'oneTimeCode',
              onChangeText: (data: string) => {
                setNewPassword(data.trim());
              },
              value: newPassword,
            }}
            label={constants.newPassword}
            RightCompo={
              <Icons
                source={newShowPassword ? appImages.eyeHide : appImages.eye}
                onPress={() => setNewShowPassword(data => !data)}
                size={30}
              />
            }
          />
          <InputField
            ref={ref => (inputRef[2] = ref)}
            colors={colors}
            TextInputProps={{
              placeholder: constants.confirmNewPassword,
              returnKeyType: constants.done,
              secureTextEntry: confirmNewShowPassword,
              textContentType: 'oneTimeCode',
              onChangeText: (data: string) => {
                setConfirmNewPassword(data.trim());
              },
              value: confirmNewPassword,
            }}
            label={constants.confirmNewPassword}
            RightCompo={
              <Icons
                source={
                  confirmNewShowPassword ? appImages.eyeHide : appImages.eye
                }
                onPress={() => setConfirmNewShowPassword(data => !data)}
                size={30}
              />
            }
          />
          <Spacer flex={1} />
          <CTAButton
            text={constants.update}
            buttonStyle={style.buttonStyle}
            color={colors.themeColor}
            type={constants.medium}
            onPress={onSubmit}
          />
          <Spacer flex={1} />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChangePassword;

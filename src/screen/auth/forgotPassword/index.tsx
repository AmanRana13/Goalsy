import React, {useRef, useState} from 'react';

import {Platform, View} from 'react-native';

// navigation
import {useTheme} from '@react-navigation/native';

// components
import {
  CTAButton,
  Spacer,
  Icons,
  InputField,
  Header,
  ConfirmModal,
  StatusHeader,
  BackButton,
} from 'components';

// themes
import appImages from 'theme/images';
import constants, {popupType, routesConstants} from 'theme/constants';

// styles
import styles from './style';
import {forgotPasswordCheck} from 'utils/validator';
import {ShowAlertMessage} from 'utils/showAlertMessage';
import {
  forgotModalAction,
  forgotPasswordAction,
} from 'redux/actions/authActions';
import {useDispatch, useSelector} from 'react-redux';

const ForgotPassword = ({navigation}: any): JSX.Element => {
  const dispatch = useDispatch();
  const {colors}: any = useTheme();
  const inputRef: any = useRef([]);
  const style = styles(colors);
  const [email, setEmail] = useState<string>('');

  const openForgotPasswordModal = useSelector(
    (state: any) => state.authenticationReducer.openForgotPasswordModal,
  );
  const onSubmit = () => {
    const isValidationFailed = forgotPasswordCheck(email);
    if (isValidationFailed) {
      ShowAlertMessage(isValidationFailed, popupType.error);
    } else {
      const body = {
        email: email,
      };
      dispatch(forgotPasswordAction(body));
    }
  };

  return (
    <View style={style.container}>
      <StatusHeader />
      <Header title={constants.ForgotPassword} LeftIcon={<BackButton />} />
      <Spacer height={constants.height30} />
      <Icons size={140} source={appImages.forgotPassword} styles={style.logo} />
      <InputField
        ref={ref => (inputRef[0] = ref)}
        colors={colors}
        TextInputProps={{
          placeholder: constants.email,
          returnKeyType: 'done',
          onChangeText: (data: string) => {
            setEmail(data.trim().toLowerCase());
          },
          value: email,
          keyboardType: Platform.OS == 'ios' ? 'ascii-capable' : 'default',
        }}
        label={constants.email}
      />
      <Spacer flex={1} />
      <CTAButton
        text={constants.submit}
        buttonStyle={style.buttonStyle}
        onPress={onSubmit}
        color={colors.themeColor}
        type={constants.medium}
      />
      <Spacer flex={1} />
      {/* Modal */}
      <ConfirmModal
        source={[appImages.success,appImages.successDark]}
        visible={openForgotPasswordModal}
        Colors={colors}
        description={constants.FGPassSuccess}
        leftButton={{
          text: 'Ok',
          onPress: () => {
            dispatch(forgotModalAction(false));
            navigation.goBack();
          },
        }}
      />
    </View>
  );
};

export default ForgotPassword;

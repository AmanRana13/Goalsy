import React, {useRef, useState} from 'react';

import {View} from 'react-native';

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
import constants from 'theme/constants';

// styles
import styles from './style';

const ChangePassword = ({navigation}: any): JSX.Element => {
  const {colors}: any = useTheme();
  const inputRef: any = useRef([]);
  const style = styles(colors);
  const [oldShowPassword, setOldShowPassword] = useState(true);
  const [newShowPassword, setNewShowPassword] = useState(true);
  const [confirmNewShowPassword, setConfirmNewShowPassword] = useState(true);
  return (
    <View style={style.container}>
      <StatusHeader />
      <Header title={constants.changePassword} LeftIcon={<BackButton />} />
      <Spacer height={constants.height30} />
      <Icons size={140} source={appImages.forgotPassword} styles={style.logo} />
      <InputField
        ref={ref => (inputRef[0] = ref)}
        colors={colors}
        TextInputProps={{
          placeholder: constants.oldPassword,
          nextField: () => inputRef[1].focus(),
          secureTextEntry: oldShowPassword,
          textContentType: 'oneTimeCode',
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
        }}
        label={constants.confirmNewPassword}
        RightCompo={
          <Icons
            source={confirmNewShowPassword ? appImages.eyeHide : appImages.eye}
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
      />
      <Spacer flex={1} />
    </View>
  );
};

export default ChangePassword;

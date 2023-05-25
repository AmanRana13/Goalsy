import React, {useRef} from 'react';

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
        }}
        label={constants.oldPassword}
        RightCompo={<Icons source={appImages.eyeHide} size={30} />}
      />
      <InputField
        ref={ref => (inputRef[1] = ref)}
        colors={colors}
        TextInputProps={{
          placeholder: constants.newPassword,
          nextField: () => inputRef[2].focus(),
        }}
        label={constants.newPassword}
        RightCompo={<Icons source={appImages.eyeHide} size={30} />}
      />
      <InputField
        ref={ref => (inputRef[2] = ref)}
        colors={colors}
        TextInputProps={{
          placeholder: constants.confirmNewPassword,
          returnKeyType: constants.done,
        }}
        label={constants.confirmNewPassword}
        RightCompo={<Icons source={appImages.eyeHide} size={30} />}
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

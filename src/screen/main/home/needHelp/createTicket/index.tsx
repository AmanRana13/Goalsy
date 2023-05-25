import React, { useRef } from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';

// components
import {StatusHeader, Header, BackButton, CTAButton} from 'components';

import constants from 'theme/constants';
// style
import styles from './styles';
import Spacer from 'components/spacer';
import usePixel from 'hook/DevicePixel';
import appImages from 'theme/images';
import Icons from 'components/icons';
import InputField from 'components/inputField';
const CreateTicket = ({navigation}): any => {
  const sizes = usePixel(360);
  const inputRef = useRef([]);
  const {colors}: any = useTheme();
  const style = styles(colors, sizes);
  return (
    <View style={style.container}>
      <StatusHeader />
      <Header title={constants.createTicket} LeftIcon={<BackButton />} />
      <Spacer height={constants.height30} />
      <Icons
        disabled={false}
        source={[appImages.createTicket, appImages.createTicketDark]}
        size={90}
        styles={{alignSelf: 'center'}}
      />
      <Spacer height={constants.height30} />
      <InputField
        colors={colors}
        label={constants.subject}
        
        ref={ref => (inputRef[0] = ref)}
        TextInputProps={{
          placeholder: constants.subject,
          nextField: () => inputRef[1].focus(),
        }}
      />
      <Spacer />
      <InputField
        colors={colors}
        label={constants.description}
        ref={ref => (inputRef[1] = ref)}
        TextInputProps={{
          placeholder: constants.description,
          returnKeyType: 'default',
          multiline: true,
          maxLength: 500,
          inputStyle: {
            borderRadius: 23,
            height: sizes / 2,
            paddingVertical: 12,
          },
        }}
      />
      <Spacer flex={1} />
      <CTAButton
        text={constants.send}
        buttonStyle={style.buttonStyle}
        color={colors.themeColor}
        type={constants.large}
        onPress={() => navigation.goBack()}
      />
      <Spacer flex={1} />
    </View>
  );
};

export default CreateTicket;

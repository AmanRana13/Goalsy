import React, {useRef, useState} from 'react';
import {KeyboardAvoidingView, ScrollView, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

// components
import {StatusHeader, Header, BackButton, CTAButton} from 'components';

import constants, {popupType} from 'theme/constants';
// style
import styles from './styles';
import Spacer from 'components/spacer';
import usePixel from 'hook/DevicePixel';
import appImages from 'theme/images';
import Icons from 'components/icons';
import InputField from 'components/inputField';
import {createTicket} from 'utils/validator';
import {ShowAlertMessage} from 'utils/showAlertMessage';
import {dispatch} from 'utils/globalFunctions';
import {createTicketAction} from 'redux/actions/home';

export type createTicket = {
  subject: string;
  description: string;
};

const CreateTicket = ({navigation}: any) => {
  const sizes = usePixel(360);
  const inputRef = useRef([]);
  const {colors}: any = useTheme();
  const style = styles(colors, sizes);

  const [inputData, setInputData] = useState<createTicket>({
    subject: '',
    description: '',
  });

  const onSubmit = () => {
    const isError = createTicket(inputData);
    if (!!isError) {
      ShowAlertMessage(isError, popupType.error);
    } else {
      dispatch(createTicketAction(inputData));
    }
  };

  return (
    <View style={style.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <KeyboardAvoidingView style={{flex: 1}}>
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
              onChangeText: (e: string) => {
                setInputData(obj => ({...obj, subject: e.trimStart()}));
              },
              value: inputData.subject,
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
              onChangeText: (e: string) => {
                setInputData(obj => ({...obj, description: e.trimStart()}));
              },
              value: inputData.description,
            }}
          />
          <Spacer flex={1} />
          <CTAButton
            text={constants.send}
            buttonStyle={style.buttonStyle}
            color={colors.themeColor}
            type={constants.large}
            onPress={onSubmit}
          />
          <Spacer flex={1} />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default CreateTicket;

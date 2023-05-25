import React, { useState } from 'react';
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
const CreatePost = ({navigation}): any => {
  const sizes = usePixel(360);
  const {colors}: any = useTheme();
  const style = styles(colors, sizes);
  const [desc, setDesc] = useState<string>('');
  return (
    <View style={style.container}>
      <StatusHeader />
      <Header title={constants.createPost} LeftIcon={<BackButton />} />
      <Spacer height={constants.height30} />
      <View
        style={{
          width: sizes,
          height: sizes / 2,
          backgroundColor: colors.commonWhite,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 23,
        }}>
        <Icons disabled={false} size={50} source={appImages.plus} />
      </View>
      <Spacer />
      <InputField
        colors={colors}
        showWordCount
        TextInputProps={{
          placeholder: constants.writeYourThoughts,
          returnKeyType: 'default',
          multiline: true,
          maxLength: 500,
          onChangeText: setDesc,
          value: desc,
          inputStyle: {
            borderRadius: 23,
            height: sizes / 2,
            paddingVertical: 12,
          },
        }}
      />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <CTAButton
          text={constants.submit}
          buttonStyle={style.buttonStyle}
          color={colors.themeColor}
          type={'large'}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default CreatePost;

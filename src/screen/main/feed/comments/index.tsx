import React, {useEffect, useLayoutEffect} from 'react';
import {FlatList, KeyboardAvoidingView, Platform, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

// components
import {
  Spacer,
  StatusHeader,
  Header,
  BackButton,
  CommentCard,
} from 'components';
// theme
import appImages from 'theme/images';
import constants from 'theme/constants';

// style
import styles from './styles';
import InputField from 'components/inputField';
import Icons from 'components/icons';
import {Width} from 'hook/DevicePixel';
import KeyboardManager from 'react-native-keyboard-manager';

const Data = [
  {
    _id: 1,
    userName: 'Winni',
    source: appImages.dummyUser,
    description: 'user’s comment comes here.',
  },
  {
    _id: 2,
    userName: 'Winni',
    source: appImages.dummyUser,
    description: 'user’s comment comes here.',
  },
  {
    _id: 3,
    userName: 'Winni',
    source: appImages.dummyUser,
    description: 'user’s comment comes here.',
  },
  {
    _id: 4,
    userName: 'Winni',
    source: appImages.dummyUser,
    description: 'user’s comment comes here.',
  },
  {
    _id: 5,
    userName: 'Winni',
    source: appImages.dummyUser,
    description: 'user’s comment comes here.',
  },
  {
    _id: 6,
    userName: 'Winni',
    source: appImages.dummyUser,
    description: 'user’s comment comes here.',
  },
  {
    _id: 7,
    userName: 'Winni',
    source: appImages.dummyUser,
    description: 'user’s comment comes here.',
  },
  {
    _id: 8,
    userName: 'Winni',
    source: appImages.dummyUser,
    description: 'user’s comment comes here.',
  },
  {
    _id: 9,
    userName: 'Winni',
    source: appImages.dummyUser,
    description: 'user’s comment comes here.',
  },
  {
    _id: 10,
    userName: 'Winni',
    source: appImages.dummyUser,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const Comments = ({navigation}: any) => {
  const {colors}: any = useTheme();
  const style = styles(colors);
  useLayoutEffect(() => {
    Platform.OS === 'ios' && KeyboardManager.setEnable(false);
    return () => Platform.OS === 'ios' && KeyboardManager.setEnable(true);
  }, []);
  return (
    <View style={style.container}>
      <StatusHeader />
      <Header title={constants.comments} LeftIcon={<BackButton />} />
      <Spacer />

      <FlatList
        data={Data}
        renderItem={({item}) => <CommentCard item={item} color={colors} />}
        contentContainerStyle={{flexGrow: 1}}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <InputField
          colors={colors}
          RightCompo={
            <Icons size={30} source={[appImages.send, appImages.sendDark]} />
          }
          TextInputProps={{
            placeholder: constants.writeYourComment,
            returnKeyType: 'done',
            inputContainerStyle: {
              borderRadius: 18,
              borderColor: colors.black,
              borderWidth: 3,
              backgroundColor: 'transparent',
            },
            textInput: {
              fontSize: Width * 0.04,
              color: colors.black,
            },
          }}
        />
        <Spacer height={constants.height20} />
      </KeyboardAvoidingView>
    </View>
  );
};

export default Comments;

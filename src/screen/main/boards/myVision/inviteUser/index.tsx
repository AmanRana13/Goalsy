import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  BackButton,
  Header,
  Icons,
  InputField,
  Spacer,
  StatusHeader,
} from 'components';
import appImages from 'theme/images';
import constants from 'theme/constants';
import InviteUserCard from 'components/InviteUserCard';
import {useTheme} from '@react-navigation/native';
import {Width} from 'hook/DevicePixel';

const data = [
  {id: 1, userName: 'Evelyn', buttonName: 'Invited'},
  {id: 2, userName: 'Evelyn', buttonName: 'Send Invite'},
  {id: 3, userName: 'Evelyn', buttonName: 'Send Invite'},
];

const InviteUser = () => {
  const {colors} = useTheme();
  const style = styles(colors);
  console.log(Width);

  return (
    <View style={style.container}>
      <StatusHeader />
      <Header title={constants.InviteUser} LeftIcon={<BackButton />} />
      <InputField
        colors={colors}
        LeftIconSource={appImages.search}
        TextInputProps={{
          placeholder: constants.searchUser,
          returnKeyType: 'done',
          inputStyle: {borderRadius: 30, paddingHorizontal: 16},
          textInput: {fontSize: Width * 0.058},
        }}
      />
      <Spacer height={constants.height20} />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        data={data}
        renderItem={({item}) => <InviteUserCard color={colors} item={item} />}
      />
    </View>
  );
};

export default InviteUser;

const styles = color =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.background,
      paddingHorizontal: constants.screenPadding,
    },
  });

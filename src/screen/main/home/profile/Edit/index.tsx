import React, {useCallback, useRef, useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

// components
import {
  Icons,
  Spacer,
  StatusHeader,
  Header,
  InputField,
  BackButton,
  TextBox,
  CTAButton,
  DropDown,
} from 'components';

// theme
import appImages from 'theme/images';
import constants, {routesConstants} from 'theme/constants';
import {fonts} from 'theme/fonts';

// style
import styles from './styles';

const genderList = [
  {id: 'Male', value: 'Male'},
  {id: 'Female', value: 'Female'},
  {id: 'Others', value: 'Others'},
  {id: 'Wish not to disclose', value: 'Wish not to disclose'},
];

const ProfileEdit = ({navigation}: any) => {
  const {colors}: any = useTheme();
  const inputRef: any = useRef([]);
  const style = styles(colors);
  const [gender, setGender] = useState<any>(null);
  const onGenderSelect = (item: any) => {
    setGender(item);
  };
  return (
    <View style={style.container}>
      <StatusHeader />
      <ScrollView
        style={style.innerContainer}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <Header title={'Edit Profile'} LeftIcon={<BackButton />} />
        <Spacer height={constants.height20} />
        <Icons size={140} source={appImages.dummyUser} styles={style.logo} />

        <InputField
          ref={ref => (inputRef[0] = ref)}
          colors={colors}
          TextInputProps={{
            required: true,
            placeholder: constants.name,
            nextField: () => inputRef[1].focus(),
          }}
          label={constants.name}
        />
        <InputField
          ref={ref => (inputRef[1] = ref)}
          colors={colors}
          TextInputProps={{
            required: true,
            placeholder: constants.email,
            returnKeyType: 'done',
          }}
          label={constants.email}
        />
        <InputField
          colors={colors}
          TextInputProps={{
            placeholder: constants.DOB,
            editable: false,
          }}
          label={constants.DOB}
          RightCompo={<Icons source={appImages.calendar} size={30} />}
        />
        <InputField
          colors={colors}
          TextInputProps={{
            placeholder: constants.location,
            returnKeyType: constants.done,
          }}
          label={constants.location}
        />
        <DropDown
          list={genderList}
          onPress={onGenderSelect}
          color={colors}
          label={constants.gender}
        />
        <Spacer height={constants.height50} />
        <CTAButton
          text={constants.update}
          color={colors.themeColor}
          type={constants.medium}
          buttonStyle={{alignSelf: 'center'}}
          onPress={() => navigation.navigate(routesConstants.Profile)}
        />
        <Spacer height={constants.height50} />
      </ScrollView>
    </View>
  );
};

export default ProfileEdit;

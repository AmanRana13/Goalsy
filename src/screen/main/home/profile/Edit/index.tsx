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
import DateInputField from 'components/dateInputField';
import {DatePickerModal} from 'components/DatePickerModal';
import moment from 'moment';

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
  const [name, setName] = useState<string>('Winni');

  const [dob, setDob] = useState<string>('May 05, 1995');
  const [datePicker, setDatePicker] = React.useState(false);
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
            value: name,
            onChange: setName,
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
            value: 'winni@example.com',
            editable: false,
          }}
          label={constants.email}
        />
        <DateInputField
          colors={colors}
          TextInputProps={{
            placeholder: constants.DOB,
            value: dob,
          }}
          label={constants.DOB}
          onPress={() => {
            setDatePicker(true);
          }}
          RightCompo={
            <Icons
              source={appImages.calendar}
              size={30}
              onPress={() => {
                setDatePicker(true);
              }}
            />
          }
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

        <DatePickerModal
          minimumDate={new Date(1920, 0, 1)}
          maximumDate={new Date()}
          onCancel={() => {
            setDatePicker(false);
          }}
          isDropdownVisible={datePicker}
          onClose={date => {
            setDatePicker(false);
            setDob(`${moment(date).format('MMM DD, YYYY')}`);
          }}
        />
      </ScrollView>
    </View>
  );
};

export default ProfileEdit;

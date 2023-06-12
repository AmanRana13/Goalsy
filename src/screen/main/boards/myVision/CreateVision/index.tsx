import {KeyboardAvoidingView, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {
  BackButton,
  CTAButton,
  Header,
  Icons,
  InputField,
  Spacer,
  StatusHeader,
  DropDown,
  DatePickerModal,
  TextBox,
  DateInputField
} from 'components';
import constants, {routesConstants} from 'theme/constants';
import {useTheme} from '@react-navigation/native';
import appImages from 'theme/images';
import styles from './styles';
import {fonts} from 'theme/fonts';
import {goBack} from 'routes/navigationServices';
import moment from 'moment';

const categoryList = [
  {id: 1, value: 'category 1'},
  {id: 2, value: 'category 2'},
  {id: 3, value: 'category 3'},
];

const CreateVision = ({navigation}) => {
  const {colors} = useTheme();
  const style = styles(colors);
  const [dob, setDob] = useState<string>('May 05, 1995');
  const [datePicker, setDatePicker] = useState(false);
  const onCategorySelect = e => {
  };
  return (
    <View style={style.container}>
      <StatusHeader />
      <Header LeftIcon={<BackButton />} title={constants.createVision} />
      <ScrollView
      nestedScrollEnabled = {true}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <Spacer height={constants.height20} />
        <DropDown
          list={categoryList}
          onPress={onCategorySelect}
          color={colors}
          label={constants.selectCategory}
        />
        <InputField
          colors={colors}
          TextInputProps={{
            placeholder: constants.visionName,
            returnKeyType: 'done',
          }}
          label={constants.visionName}
        />
        <TextBox
          text={constants.VisionIcon}
          styles={{paddingVertical: 10}}
          fontFamily={fonts.regular}
          size={16}
        />
        <Icons
          source={[appImages.plus, appImages.plusDark]}
          size={60}
          styles={{paddingVertical: 5}}
        />
        <DateInputField
          colors={colors}
          TextInputProps={{
            placeholder: constants.deadline,
            value: dob,
          }}
          label={constants.deadline}
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
        <Spacer height={constants.height50} />
        <View style={{alignSelf: 'center'}}>
          <CTAButton
            text={constants.create}
            buttonStyle={style.buttonStyle}
            color={colors.themeColor}
            type={constants.large}
            onPress={() => navigation.navigate(routesConstants.inviteUser)}
          />
          <Spacer height={constants.height30} />
          <CTAButton
            text={constants.SampleVision}
            buttonStyle={style.buttonStyle}
            color={colors.gray}
            showShadow={false}
            type={constants.large}
            onPress={() => goBack()}
          />
        </View>
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

export default CreateVision;

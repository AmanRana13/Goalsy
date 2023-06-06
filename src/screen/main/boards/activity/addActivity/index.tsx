import {ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {
  BackButton,
  CTAButton,
  Header,
  Icons,
  InputField,
  Spacer,
  StatusHeader,
  TextBox,
  DropDown,
  RoundCheckBox,
  DatePickerModal,
  ColorDropdown,
  DateInputField
} from 'components';
import constants from 'theme/constants';
import {useTheme} from '@react-navigation/native';
import appImages from 'theme/images';
import {colors} from 'theme/colors';
import styles from './styles';
import {fonts} from 'theme/fonts';
import {Width} from 'hook/DevicePixel';
import {goBack} from 'routes/navigationServices';
import moment from 'moment';

const categoryList = [
  {id: 1, value: 'Goal 1'},
  {id: 2, value: 'Goal 2'},
  {id: 3, value: 'Goal 3'},
];
const colorList = [
  {id: 1, colorCode: 'Red', color: 'red'},
  {id: 2, colorCode: 'Green', color: 'green'},
  {id: 3, colorCode: 'Yellow', color: 'yellow'},
  {id: 4, colorCode: 'orange', color: 'orange'},
  {id: 5, colorCode: 'pink', color: 'pink'},
];
const AddActivity = () => {
  const {colors}: colors | any = useTheme();
  const style = styles(colors);
  const [dob, setDob] = useState<string>('May 05, 2023');
  const [datePicker, setDatePicker] = React.useState(false);
  const onCategorySelect = e => {
  };
  const CheckBoxValue = () => {};
  const width = (Width - 200) / 7;
  return (
    <View style={style.container}>
      <StatusHeader />
      <Header LeftIcon={<BackButton />} title={constants.AddActivity} />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <Spacer height={constants.height20} />
        <DropDown
          list={categoryList}
          onPress={onCategorySelect}
          color={colors}
          label={constants.selectGoal}
        />
        <InputField
          colors={colors}
          TextInputProps={{
            placeholder: constants.ActivityName,
            returnKeyType: 'done',
          }}
          label={constants.ActivityName}
        />
        <Spacer />
        <ColorDropdown
          list={colorList}
          onPress={onCategorySelect}
          color={colors}
          label={'Select Color'}
        />
        <Spacer height={constants.height20} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextBox text={'Reminder'} size={16} fontFamily={fonts.regular} />
          <RoundCheckBox color={colors} value={CheckBoxValue} />
        </View>
        <Spacer />
        <View
          style={{
            backgroundColor: colors.white,
            paddingHorizontal: 15,
            paddingVertical: 20,
            borderRadius: 20,
          }}>
          <View style={{flexDirection: 'row', gap: 15}}>
            <View
              style={{
                borderRadius: 8,
                borderColor: colors.black,
                borderWidth: 2,
                alignItems: 'center',
                width: width,
              }}>
              <TextBox text={'S'} size={22} fontFamily={fonts.regular} />
            </View>
            <View
              style={{
                borderRadius: 8,
                borderColor: colors.black,
                borderWidth: 2,
                width: width,
                alignItems: 'center',
              }}>
              <TextBox text={'M'} size={22} fontFamily={fonts.regular} />
            </View>
            <View
              style={{
                borderRadius: 8,
                borderColor: colors.black,
                borderWidth: 2,
                width: width,
                alignItems: 'center',
              }}>
              <TextBox text={'T'} size={22} fontFamily={fonts.regular} />
            </View>
            <View
              style={{
                borderRadius: 8,
                borderColor: colors.black,
                borderWidth: 2,
                width: width,
                alignItems: 'center',
              }}>
              <TextBox text={'W'} size={22} fontFamily={fonts.regular} />
            </View>
            <View
              style={{
                borderRadius: 8,
                borderColor: colors.black,
                borderWidth: 2,
                width: width,
                alignItems: 'center',
              }}>
              <TextBox text={'T'} size={22} fontFamily={fonts.regular} />
            </View>
            <View
              style={{
                borderRadius: 8,
                borderColor: colors.black,
                borderWidth: 2,
                width: width,
                alignItems: 'center',
              }}>
              <TextBox text={'F'} size={22} fontFamily={fonts.regular} />
            </View>
            <View
              style={{
                borderRadius: 8,
                borderColor: colors.black,
                borderWidth: 2,
                width: width,
                alignItems: 'center',
              }}>
              <TextBox text={'S'} size={22} fontFamily={fonts.regular} />
            </View>
          </View>
          <TextBox
            text={'12:00 PM'}
            styles={{alignSelf: 'flex-end', paddingTop: 15}}
          />
        </View>
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
        <InputField
          colors={colors}
          TextInputProps={{
            placeholder: constants.note,
            returnKeyType: 'done',
          }}
          label={constants.note}
        />
        <Spacer height={constants.height50} />
        <View style={{alignSelf: 'center'}}>
          <CTAButton
            text={constants.AddActivity}
            buttonStyle={style.buttonStyle}
            color={colors.themeColor}
            type={constants.large}
            onPress={() => goBack()}
            hideShadow
          />
          <Spacer height={constants.height30} />
          <CTAButton
            text={constants.SampleActivity}
            buttonStyle={[style.buttonStyle, {width: Width * 0.53}]}
            color={colors.gray}
            isShadow={false}
            type={constants.large}
            onPress={() => goBack()}
            hideShadow
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

export default AddActivity;

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
  DateInputField,
  ColorDropdown,
} from 'components';
import constants, { dateFormat } from 'theme/constants';
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

const EditActivity = () => {
  const {colors}: colors | any = useTheme();
  const style = styles(colors);
  const [dob, setDob] = useState<string>('May 05, 2023');
  const [name, setName] = useState<string>('Hello');
  const [note, setNote] = useState<string>('Hello');
  const [datePicker, setDatePicker] = React.useState(false);
  const onCategorySelect = e => {};
  const CheckBoxValue = () => {};
  const width = (Width - 200) / 7;
  return (
    <View style={style.container}>
      <StatusHeader />
      <Header LeftIcon={<BackButton />} title={constants.editActivity} />
      <ScrollView
        nestedScrollEnabled={true}
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
            value: name,
            onChange: setName,
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
          <TextBox text={'Reminders'} size={16} />
          <RoundCheckBox color={colors} value={CheckBoxValue} />
        </View>
        <Spacer />
        <View
          style={{
            backgroundColor: colors.commonWhite,
            paddingHorizontal: 15,
            paddingTop: 15,
            paddingBottom: 10,
            borderRadius: 20,
          }}>
          <View style={{flexDirection: 'row', gap: 12}}>
            <View
              style={{
                borderRadius: 8,
                borderColor: colors.commonBlack,
                borderWidth: 2,
                alignItems: 'center',
                width: width,
              }}>
              <TextBox
                text={'S'}
                size={22}
                fontFamily={fonts.regular}
                color={colors.commonBlack}
              />
            </View>
            <View
              style={{
                borderRadius: 8,
                borderColor: colors.commonBlack,
                borderWidth: 2,
                width: width,
                alignItems: 'center',
              }}>
              <TextBox
                text={'M'}
                size={22}
                fontFamily={fonts.regular}
                color={colors.commonBlack}
              />
            </View>
            <View
              style={{
                borderRadius: 8,
                borderColor: colors.commonBlack,
                borderWidth: 2,
                width: width,
                alignItems: 'center',
              }}>
              <TextBox
                text={'T'}
                size={22}
                fontFamily={fonts.regular}
                color={colors.commonBlack}
              />
            </View>
            <View
              style={{
                borderRadius: 8,
                borderColor: colors.commonBlack,
                borderWidth: 2,
                width: width,
                alignItems: 'center',
              }}>
              <TextBox
                text={'W'}
                size={22}
                fontFamily={fonts.regular}
                color={colors.commonBlack}
              />
            </View>
            <View
              style={{
                borderRadius: 8,
                borderColor: colors.commonBlack,
                borderWidth: 2,
                width: width,
                alignItems: 'center',
              }}>
              <TextBox
                text={'T'}
                size={22}
                fontFamily={fonts.regular}
                color={colors.commonBlack}
              />
            </View>
            <View
              style={{
                borderRadius: 8,
                borderColor: colors.commonBlack,
                borderWidth: 2,
                width: width,
                alignItems: 'center',
              }}>
              <TextBox
                text={'F'}
                size={22}
                fontFamily={fonts.regular}
                color={colors.commonBlack}
              />
            </View>
            <View
              style={{
                borderRadius: 8,
                borderColor: colors.commonBlack,
                borderWidth: 2,
                width: width,
                alignItems: 'center',
              }}>
              <TextBox
                text={'S'}
                size={22}
                fontFamily={fonts.regular}
                color={colors.commonBlack}
              />
            </View>
          </View>
          <TextBox
            text={'12:00 PM'}
            styles={{alignSelf: 'flex-end', paddingTop: 15}}
            color={colors.commonBlack}
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
            value: note,
            onChange: setNote,
          }}
          label={constants.note}
        />
        <Spacer height={constants.height50} />
        <View style={{alignSelf: 'center'}}>
          <CTAButton
            text={constants.updateActivity}
            buttonStyle={style.buttonStyle}
            color={colors.themeColor}
            type={constants.large}
            buttonStyle={{width: Width * 0.57}}
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
            setDob(`${moment(date).format(dateFormat)}`);
          }}
        />
      </ScrollView>
    </View>
  );
};

export default EditActivity;

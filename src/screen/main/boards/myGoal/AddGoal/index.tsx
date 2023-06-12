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
import {goBack} from 'routes/navigationServices';
import moment from 'moment';

const categoryList = [
  {id: 1, value: 'category 1'},
  {id: 2, value: 'category 2'},
  {id: 3, value: 'category 3'},
  {id: 4, value: 'category 3'},
  {id: 5, value: 'category 3'},
  {id: 6, value: 'category 3'},
  {id: 7, value: 'category 3'},
];
const colorList = [
  {id: 1, colorCode: 'Red', color: 'red'},
  {id: 2, colorCode: 'Green', color: 'green'},
  {id: 3, colorCode: 'Yellow', color: 'yellow'},
  {id: 4, colorCode: 'orange', color: 'orange'},
  {id: 5, colorCode: 'pink', color: 'pink'},
];

const AddGoal = () => {
  const {colors}: colors | any = useTheme();
  const style = styles(colors);
  const [dob, setDob] = useState<string>('May 05, 2023');
  const [datePicker, setDatePicker] = React.useState(false);
  const onCategorySelect = e => {
  };
  return (
    <View style={style.container}>
      <StatusHeader />
      <Header LeftIcon={<BackButton />} title={constants.AddGoal} />
      <ScrollView  nestedScrollEnabled = {true}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <Spacer height={constants.height20} />
        <DropDown
          list={categoryList}
          onPress={onCategorySelect}
          color={colors}
          label={constants.selectVision}
        />
        <InputField
          colors={colors}
          TextInputProps={{
            placeholder: constants.goalName,
            returnKeyType: 'done',
          }}
          label={constants.goalName}
        />
        <TextBox
          text={constants.GoalIcon}
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
        <Spacer />
        <ColorDropdown
          list={colorList}
          onPress={onCategorySelect}
          color={colors}
          label={constants.selectColor}
        />
        <Spacer height={constants.height50} />
        <View style={{alignSelf: 'center'}}>
          <CTAButton
            text={constants.addGoal}
            buttonStyle={[style.buttonStyle]}
            color={colors.themeColor}
            type={constants.large}
            onPress={() => goBack()}
          />
          <Spacer height={constants.height30} />
          <CTAButton
            text={constants.SampleGoal}
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

export default AddGoal;

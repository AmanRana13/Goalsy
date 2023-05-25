import {ScrollView, View} from 'react-native';
import React from 'react';
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
} from 'components';
import constants from 'theme/constants';
import {useTheme} from '@react-navigation/native';
import appImages from 'theme/images';
import {colors} from 'theme/colors';
import styles from './styles';
import {fonts} from 'theme/fonts';
import {goBack} from 'routes/navigationServices';
import ColorDropdown from 'components/colorDropdown';

const categoryList = [
  {id: 1, value: 'category 1'},
  {id: 2, value: 'category 2'},
  {id: 3, value: 'category 3'},
];
const colorList = [
  {id: 1, colorCode: 'Red', color: 'red'},
  {id: 2, colorCode: 'Green', color: 'green'},
  {id: 3, colorCode: 'Yellow', color: 'yellow'},
];

const AddGoal = () => {
  const {colors}: colors | any = useTheme();
  const style = styles(colors);
  const onCategorySelect = e => {
    console.log(':::::', e);
  };
  return (
    <View style={style.container}>
      <StatusHeader />
      <Header LeftIcon={<BackButton />} title={constants.AddGoal} />
      <ScrollView
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
            placeholder: constants.ActivityName,
            returnKeyType: 'done',
          }}
          label={constants.ActivityName}
        />
        <TextBox
          text={constants.VisionIcon}
          styles={{paddingVertical: 10}}
          fontFamily={fonts.regular}
          size={16}
        />
        <Icons
          source={appImages.plus}
          size={60}
          styles={{paddingVertical: 5}}
        />
        <InputField
          label={constants.deadline}
          colors={colors}
          TextInputProps={{
            placeholder: constants.deadline,
            editable: false,
          }}
          RightCompo={<Icons source={appImages.calendar} size={30} />}
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
            buttonStyle={style.buttonStyle}
            color={colors.themeColor}
            type={constants.large}
            onPress={() => goBack()}
          />
          <Spacer height={constants.height30} />
          <CTAButton
            text={constants.SampleGoal}
            buttonStyle={style.buttonStyle}
            color={colors.gray}
            type={constants.large}
            onPress={() => goBack()}
          />
        </View>
        <Spacer height={constants.height50} />
      </ScrollView>
    </View>
  );
};

export default AddGoal;

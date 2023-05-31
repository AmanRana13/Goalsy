import React, {useEffect, useRef, useState} from 'react';
import {
  ActionSheetIOS,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import ActionSheet from 'react-native-actionsheet';

// navigation
import {useTheme} from '@react-navigation/native';

// components
import {
  CTAButton,
  Icons,
  InputField,
  TextBox,
  CheckBox,
  Spacer,
  Header,
  ConfirmModal,
  StatusHeader,
  BackButton,
  DropDown,
} from 'components';

// themes
import appImages from 'theme/images';
import constants, {popupType, routesConstants} from 'theme/constants';
import KeyboardManager from 'react-native-keyboard-manager';

import styles from './style';
import {pickSingleImage, pickSingleImageWithCamera} from 'utils/imagePicker';
import {userSignUpCheck} from 'utils/validator';
import {ShowAlertMessage} from 'utils/showAlertMessage';
import {DatePickerModal} from 'components/DatePickerModal';
import moment from 'moment';
import DateInputField from 'components/dateInputField';
import {useDispatch, useSelector} from 'react-redux';
import {signUpModalAction, signupAction} from 'redux/actions/authActions';
import {fonts} from 'theme/fonts';

const genderList = [
  {id: 'Male', value: 'Male'},
  {id: 'Female', value: 'Female'},
  {id: 'Others', value: 'Others'},
  {id: 'Wish not to disclose', value: 'Wish not to disclose'},
];

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const {dark, colors}: any = useTheme();
  const inputRef: any = useRef([]);
  const actionSheet: any = useRef();
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [image, setImage] = useState<any>(null);
  const [gender, setGender] = useState<any>(null);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [dob, setDob] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [isChecked, setChecked] = useState<boolean>(false);
  const [datePicker, setDatePicker] = React.useState(false);
  const style = styles(colors);

  const openSignUpModal = useSelector(
    (state: any) => state.authenticationReducer.openSignUpModal,
  );

  useEffect(() => {
    Platform.OS === 'ios' && KeyboardManager.setEnable(false);
    return () => {
      Platform.OS === 'ios' && KeyboardManager.setEnable(true);
    };
  }, []);

  const onGenderSelect = (item: any) => {
    setGender(item);
  };

  const openImagePicker = (
    cropit: boolean,
    circular = false,
    setPic: (data: any) => {},
  ) => {
    return Platform.OS == 'ios'
      ? ActionSheetIOS.showActionSheetWithOptions(
          {
            options: [constants.cancel, constants.gallery, constants.camera],
            cancelButtonIndex: 0,
          },
          buttonIndex => {
            if (buttonIndex === 0) {
            } else if (buttonIndex === 1) {
              return pickSingleImage(cropit, circular, setPic);
            } else if (buttonIndex === 2) {
              return pickSingleImageWithCamera(cropit, circular, setPic);
            }
          },
        )
      : actionSheet.current.show();
  };

  const onSubmit = () => {
    const isValidationFailed = userSignUpCheck(
      image,
      name,
      email,
      password,
      confirmPassword,
      dob,
      location,
      gender,
      isChecked,
    );
    if (isValidationFailed) {
      ShowAlertMessage(isValidationFailed, popupType.error);
    } else {
      const formData = new FormData();
      gender?.id && formData.append('gender', gender.id);
      dob &&
        formData.append(
          'dob',
          moment(dob, 'MMM DD, YYYY').format('YYYY-MM-DD'),
        );
      formData.append('password', password);
      formData.append('email', email);
      formData.append('name', name);
      location && formData.append('location', location);
      formData.append('profileImage', {
        uri: image?.path,
        name: image?.filename,
        type: image?.mime,
      });

      dispatch(signupAction(formData));
    }
  };

  return (
    <KeyboardAvoidingView
      style={style.container}
      behavior="height"
      keyboardVerticalOffset={80}
      contentContainerStyle={{
        height: Dimensions.get('window').height * 2.25,
        width: '100%',
      }}>
      <StatusHeader />
      <Header LeftIcon={<BackButton />} />
      <ScrollView
        style={style.innerContainer}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets={true}>
        <Icons
          size={140}
          source={image ? {uri: image.path} : appImages.user}
          styles={style.logo}
          imageStyle={{borderRadius: 150}}
          resize="cover"
          onPress={() => openImagePicker(true, false, setImage)}
        />
        <TextBox
          size={16}
          fontFamily={fonts.regular}
          text={'Profile picture is required'}
          styles={{textAlign: 'center'}}
        />
        <InputField
          ref={ref => (inputRef[0] = ref)}
          colors={colors}
          TextInputProps={{
            required: true,
            placeholder: constants.name,
            maxLength: 80,
            nextField: () => inputRef[1].focus(),
            onChangeText: (data: string) => {
              setName(data.trimStart());
            },
            value: name,
            keyboardType: Platform.OS == 'ios' ? 'ascii-capable' : 'default',
          }}
          label={constants.name}
        />
        <InputField
          ref={ref => (inputRef[1] = ref)}
          colors={colors}
          TextInputProps={{
            required: true,
            placeholder: constants.email,
            nextField: () => inputRef[2].focus(),
            onChangeText: (data: string) => {
              setEmail(data.trim().toLowerCase());
            },
            value: email,
            keyboardType: Platform.OS == 'ios' ? 'ascii-capable' : 'default',
          }}
          label={constants.email}
        />
        <InputField
          ref={ref => (inputRef[2] = ref)}
          colors={colors}
          TextInputProps={{
            required: true,
            placeholder: constants.password,
            nextField: () => inputRef[3].focus(),
            secureTextEntry: showPassword,
            textContentType: 'oneTimeCode',
            onChangeText: (data: string) => {
              setPassword(data.trim());
            },
            value: password,
            keyboardType: Platform.OS == 'ios' ? 'ascii-capable' : 'default',
          }}
          label={constants.password}
          RightCompo={
            <Icons
              source={showPassword ? appImages.eyeHide : appImages.eye}
              size={30}
              onPress={() => setShowPassword(data => !data)}
            />
          }
        />
        <InputField
          ref={ref => (inputRef[3] = ref)}
          colors={colors}
          TextInputProps={{
            required: true,
            placeholder: constants.confirmPassword,
            returnKeyType: constants.done,
            secureTextEntry: showConfirmPassword,
            textContentType: 'oneTimeCode',
            onChangeText: (data: string) => {
              setConfirmPassword(data.trim());
            },
            value: confirmPassword,
            keyboardType: Platform.OS == 'ios' ? 'ascii-capable' : 'default',
          }}
          label={constants.confirmPassword}
          RightCompo={
            <Icons
              source={showConfirmPassword ? appImages.eyeHide : appImages.eye}
              size={30}
              onPress={() => setShowConfirmPassword(data => !data)}
            />
          }
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
            onChangeText: (data: string) => {
              setLocation(data.trim());
            },
            value: location,
            keyboardType: Platform.OS == 'ios' ? 'ascii-capable' : 'default',
          }}
          label={constants.location}
        />

        <DropDown
          list={genderList}
          onPress={onGenderSelect}
          color={colors}
          label={constants.gender}
        />

        <Spacer height={constants.height30} />
        <View style={style.checkBoxContainer}>
          <CheckBox value={data => setChecked(data)} color={colors} />
          <Text style={style.checkBoxText}>
            {constants.IHaveAccept}
            <TextBox
              text={constants.TC}
              size={16}
              styles={style.TC}
              onPress={() =>
                navigation.navigate(routesConstants.TermAndPolicy, {
                  screen: constants.TC,
                })
              }
            />
            {constants.and}
            <TextBox
              text={constants.PP}
              size={16}
              styles={style.TC}
              onPress={() =>
                navigation.navigate(routesConstants.TermAndPolicy, {
                  screen: constants.PP,
                })
              }
            />
          </Text>
        </View>
        <Spacer height={constants.height50} />
        <CTAButton
          text={constants.signUp}
          buttonStyle={style.buttonStyle}
          onPress={onSubmit}
          color={colors.themeColor}
          type={constants.medium}
        />
        <Spacer height={constants.height50} />
      </ScrollView>

      <ActionSheet
        ref={actionSheet}
        title={'Select Image'}
        options={[constants.cancel, constants.gallery, constants.camera]}
        cancelButtonIndex={0}
        onPress={index => {
          if (index === 0) {
          } else if (index === 1) {
            return pickSingleImage(true, false, setImage);
          } else if (index === 2) {
            return pickSingleImageWithCamera(true, false, setImage);
          }
        }}
      />

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

      {/* Modal */}
      <ConfirmModal
        source={[appImages.success, appImages.successDark]}
        visible={openSignUpModal}
        Colors={colors}
        description={constants.signUpSuccess}
        leftButton={{
          text: 'Ok',
          onPress: () => {
            dispatch(signUpModalAction(false));
            navigation.goBack();
          },
        }}
      />
    </KeyboardAvoidingView>
  );
};

export default SignUp;

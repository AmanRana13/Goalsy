import React, {useEffect, useRef, useState} from 'react';

// lib
import {
  ActionSheetIOS,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {useTheme} from '@react-navigation/native';
import ActionSheet from 'react-native-actionsheet';
import KeyboardManager from 'react-native-keyboard-manager';

// components
import {
  Icons,
  Spacer,
  StatusHeader,
  Header,
  InputField,
  BackButton,
  CTAButton,
  DropDown,
  DateInputField,
  DatePickerModal,
} from 'components';

// redux
import {editProfileAction} from 'redux/actions/home';
import {url} from 'redux/axios/apikit';

// theme
import appImages from 'theme/images';
import constants, {MAX_DOB, genderList, popupType} from 'theme/constants';

// utils
import {ShowAlertMessage} from 'utils/showAlertMessage';
import {userEditProfileCheck} from 'utils/validator';
import {pickSingleImage, pickSingleImageWithCamera} from 'utils/imagePicker';

// style
import styles from './styles';

const ProfileEdit = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {colors}: any = useTheme();
  const inputRef: any = useRef([]);
  const actionSheet: any = useRef();
  const [image, setImage] = useState<any>(null);
  const [gender, setGender] = useState<Object>();
  const [name, setName] = useState<string>('');
  const [dob, setDob] = useState<string>(null);
  const [location, setLocation] = useState<string>('');
  const [datePicker, setDatePicker] = React.useState(false);
  const style = styles(colors);
  const {userDetails} = useSelector((state: any) => state.homeReducer);
  // useEffect(() => {
  //   Platform.OS === 'ios' && KeyboardManager.setEnable(false);
  //   return () => {
  //     Platform.OS === 'ios' && KeyboardManager.setEnable(true);
  //   };
  // }, []);

  useEffect(() => {
    if (userDetails) {
      if(userDetails.dob){
        let DOB = moment(userDetails?.dob).format('MMM DD, YYYY');
        setDob(DOB);
      }
      setName(userDetails?.name);
      setGender(userDetails?.gender);
      setLocation(userDetails?.location);
    }
  }, [userDetails]);

  const openImagePicker = (cropit: boolean, circular = false, setPic: any) => {
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
    const isValidationFailed = userEditProfileCheck(name);
    if (isValidationFailed) {
      ShowAlertMessage(isValidationFailed, popupType.error);
    } else {
      const formData = new FormData();
      gender && formData.append('gender', gender);
      dob &&
        formData.append(
          'dob',
          moment(dob, 'MMM DD, YYYY').format('YYYY-MM-DD'),
        );
      formData.append('name', name);
      location && formData.append('location', location);
      {
        image &&
          formData.append('profileImage', {
            uri: image?.path,
            type: image?.mime,
            name: 'image.jpg',
          });
      }
      dispatch(editProfileAction(formData, name));
    }
  };
  return (
    <View style={style.container}>
      <StatusHeader />
      <Header title={constants.EditProfile} LeftIcon={<BackButton />} />
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView
          nestedScrollEnabled={true}
          style={style.innerContainer}
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          <Spacer height={constants.height20} />
          <Icons
            size={120}
            source={
              image
                ? {uri: image?.path}
                : {uri: url + userDetails?.profileImage}
            }
            styles={style.logo}
            imageStyle={{borderRadius: 150}}
            resize="cover"
            onPress={() => openImagePicker(true, false, setImage)}
          />

          <InputField
            ref={ref => (inputRef[0] = ref)}
            colors={colors}
            TextInputProps={{
              required: true,
              returnKeyType: constants.done,
              placeholder: constants.name,
              value: name,
              onChangeText: (data: string) => {
                setName(data.trimStart());
              },
            }}
            label={constants.name}
          />
          <InputField
            ref={ref => (inputRef[1] = ref)}
            colors={colors}
            TextInputProps={{
              placeholder: constants.email,
              returnKeyType: 'done',
              value: userDetails?.email,
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
              value: location,
              onChangeText: (data: string) => {
                setLocation(data.trimStart());
              },
            }}
            label={constants.location}
          />
          <DropDown
            list={genderList}
            onPress={(item: any) => setGender(item.value)}
            color={colors}
            label={constants.gender}
            defaultValue={gender}
          />
          <Spacer height={constants.height50} />
          <CTAButton
            text={constants.update}
            color={colors.themeColor}
            type={constants.medium}
            buttonStyle={{alignSelf: 'center'}}
            onPress={onSubmit}
          />
          <Spacer height={constants.height50} />
        </ScrollView>
      </KeyboardAvoidingView>
      <ActionSheet
        ref={actionSheet}
        title={'Select Image'}
        options={[constants.cancel, constants.gallery, constants.camera]}
        cancelButtonIndex={0}
        onPress={(index: number) => {
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
        maximumDate={MAX_DOB}
        onCancel={() => {
          setDatePicker(false);
        }}
        isDropdownVisible={datePicker}
        onClose={(date: any) => {
          setDatePicker(false);
          setDob(`${moment(date).format('MMM DD, YYYY')}`);
        }}
      />
    </View>
  );
};

export default ProfileEdit;

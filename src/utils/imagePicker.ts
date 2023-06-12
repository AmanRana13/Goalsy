import {Platform, Linking, Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {PERMISSIONS, request, check, RESULTS} from 'react-native-permissions';
import {ShowAlertMessage} from './showAlertMessage';
import constants, {popupType} from 'theme/constants';
export const pickSingleImage = (
  cropit: boolean,
  circular = false,
  setPic: (data: any) => {},
) => {
  if (Platform.OS === 'ios') {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      mediaType: 'photo',
      cropping: cropit,
      cropperCircleOverlay: circular,
    })
      .then(image => {
        if (image.size < 20971520) {
          setPic(image);
        } else {
          ShowAlertMessage(constants.fileSizeValidation, popupType.error);
        }
      })
      .catch(e => {
        if (
          e.code == 'E_PERMISSION_MISSING' ||
          e.code == 'E_NO_LIBRARY_PERMISSION'
        ) {
          Alert.alert(constants.appName, constants.accessPhotoValidation, [
            {
              text: constants.openSettings,
              style: 'cancel',
              onPress: () => {
                Linking.openSettings();
              },
            },
            {
              text: constants.cancel,
              style: 'cancel',
              onPress: () => {},
            },
          ]);
        }
      });
  } else {
    // according to the android version

    const checkPermission =
      Platform.Version < 33
        ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
        : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES;

    check(checkPermission).then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE: {
          permissionAlert(true);
          break;
        }
        case RESULTS.DENIED: {
          request(checkPermission)
            .then(data => {
              if (data == RESULTS.GRANTED) {
                androidImagePicker(cropit, circular, setPic);
              } else if (data == RESULTS.BLOCKED) {
                permissionAlert();
              }
            })
            .catch(e => {
              permissionAlert(true);
            });
          break;
        }
        case RESULTS.GRANTED: {
          androidImagePicker(cropit, circular, setPic);
          break;
        }
        case RESULTS.BLOCKED:
          permissionAlert(true);
      }
    });
  }
};

export const pickSingleImageWithCamera = (
  cropping: boolean,
  circular = false,
  setPic: any,
) => {
  if (Platform.OS === 'ios') {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
      includeExif: true,
      mediaType: 'photo',
      cropperCircleOverlay: circular,
    })
      .then(image => {
        if (image.size < 20971520) {
          setPic(image);
        } else {
          ShowAlertMessage(constants.fileSizeValidation, popupType.error);
        }
      })
      .catch(e => {
        if (
          e.code == 'E_NO_CAMERA_PERMISSION' ||
          e.code == 'E_NO_LIBRARY_PERMISSION'
        ) {
          Alert.alert(constants.appName, constants.accessCameraValidation, [
            {
              text: constants.openSettings,
              style: 'cancel',
              onPress: () => {
                Linking.openSettings();
              },
            },
            {
              text: constants.cancel,
              style: 'cancel',
              onPress: () => {},
            },
          ]);
        }
      });
  } else {
    check(PERMISSIONS.ANDROID.CAMERA).then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE: {
          permissionAlert();
          break;
        }
        case RESULTS.DENIED: {
          request(PERMISSIONS.ANDROID.CAMERA)
            .then(data => {
              if (data == RESULTS.GRANTED) {
                androidCameraPicker(cropping, circular, setPic);
              } else if (data == RESULTS.BLOCKED) {
                permissionAlert();
              }
            })
            .catch(e => {
              permissionAlert();
            });
          break;
        }
        case RESULTS.GRANTED: {
          androidCameraPicker(cropping, circular, setPic);
          break;
        }
        case RESULTS.BLOCKED:
          permissionAlert();
      }
    });
  }
};

const permissionAlert = (isGallery = false) => {
  Alert.alert(
    constants.appName,
    isGallery
      ? constants.accessPhotoValidation
      : constants.accessCameraValidation,
    [
      {
        text: constants.openSettings,
        style: 'cancel',
        onPress: () => {
          Linking.openSettings();
        },
      },
      ,
      {
        text: constants.cancel,
        style: 'cancel',
        onPress: () => {},
      },
    ],
  );
};

const androidImagePicker = (
  cropping: boolean,
  circular = false,
  setPic: any,
) => {
  ImagePicker.openPicker({
    width: 500,
    height: 500,
    mediaType: 'photo',
    cropping: cropping,
    cropperCircleOverlay: circular,
  })
    .then(image => {
      if (image.size < 20971520) {
        setPic(image);
      } else {
        ShowAlertMessage(constants.fileSizeValidation, popupType.error);
      }
    })
    .catch(e => {
      if (
        e.code == 'E_PERMISSION_MISSING' ||
        e.code == 'E_NO_LIBRARY_PERMISSION'
      ) {
        permissionAlert(true);
      }
    });
};

const androidCameraPicker = (
  cropping: boolean,
  circular = false,
  setPic: any,
) => {
  ImagePicker.openCamera({
    cropping: cropping,
    width: 500,
    height: 500,
    includeExif: true,
    mediaType: 'photo',
    cropperCircleOverlay: circular,
  })
    .then(image => {
      if (image.size < 20971520) {
        setPic(image);
      } else {
        ShowAlertMessage(constants.fileSizeValidation, popupType.error);
      }
    })
    .catch(e => {
      if (
        e.code == 'E_FAILED_TO_OPEN_CAMERA' ||
        e.code == 'E_NO_LIBRARY_PERMISSION'
      ) {
        permissionAlert();
      }
    });
};

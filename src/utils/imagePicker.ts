import {Platform, Linking, Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {PERMISSIONS, request, check, RESULTS} from 'react-native-permissions';
import {ShowAlertMessage} from './showAlertMessage';
import constants, {popupType} from 'theme/constants';

interface pickerProps {
  mediaType: 'photo' | 'video' | any;
  isGallery: boolean;
  cropIt: boolean;
  circular: boolean;
  setFile: any;
}

const checkPermissions = ({
  isGallery,
  cropIt,
  circular,
  setFile,
}: checkPermissionsProps) => {
  const permission = isGallery
    ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
    : PERMISSIONS.ANDROID.CAMERA;

  check(permission).then(result => {
    if (result === RESULTS.UNAVAILABLE || result === RESULTS.BLOCKED) {
      permissionAlert(isGallery);
    } else if (result === RESULTS.DENIED) {
      request(permission)
        .then(data => {
          if (data === RESULTS.GRANTED) {
            openPicker({cropIt, circular, setFile, isGallery, mediaType});
          } else if (data === RESULTS.BLOCKED) {
            permissionAlert(isGallery);
          }
        })
        .catch(() => {
          permissionAlert(isGallery);
        });
    } else if (result === RESULTS.GRANTED) {
      openPicker({cropIt, circular, setFile, isGallery, mediaType});
    }
  });
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
        onPress: () => {
          Linking.openSettings();
        },
      },
      {
        text: constants.cancel,
        onPress: () => {},
        style: 'cancel',
      },
    ],
  );
};

export const openPicker = ({
  cropIt,
  circular,
  setFile,
  mediaType = 'photo',
  isGallery,
}: pickerProps) => {
  const pickerType = isGallery ? 'openPicker' : 'openCamera';
  ImagePicker[pickerType]({
    width: 500,
    height: 500,
    mediaType: mediaType,
    cropping: cropIt,
    cropperCircleOverlay: circular,
  })
    .then(file => {
      if (file.size < 20971520) {
        setFile(file);
      } else {
        ShowAlertMessage(constants.fileSizeValidation, popupType.error);
      }
    })
    .catch(e => {
      console.log(e);
      
      if (
        e.code === 'E_PERMISSION_MISSING' ||
        e.code === 'E_NO_LIBRARY_PERMISSION'
      ) {
        permissionAlert(isGallery);
      } else {
        checkPermissions({cropIt, circular, setFile, mediaType, isGallery});
      }
    });
};

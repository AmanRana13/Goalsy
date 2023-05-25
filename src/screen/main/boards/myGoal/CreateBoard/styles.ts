import {Width} from 'hook/DevicePixel';
import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import constants from 'theme/constants';
import {width} from 'utils/globalFunctions';

const styles = (color: colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: constants.screenPadding,
      backgroundColor: color.background,
    },
    buttonStyle: {
      alignSelf: 'center',
      width: width * 0.48,
    },
    buttonStyle1: {
      alignSelf: 'center',
      width: width * 0.7,
    },
    buttonStyle2: {
      alignSelf: 'center',
      width: width * 0.55,
    },
  });
export default styles;

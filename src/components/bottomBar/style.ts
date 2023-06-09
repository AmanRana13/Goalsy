import {colors} from 'theme/colors';
import {StyleSheet} from 'react-native';
import {Width} from 'hook/DevicePixel';
import constants from 'theme/constants';
import {hasNotch} from 'react-native-device-info';

const styles = (color: colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: color.darkGray,
      position: 'relative',
      bottom: hasNotch() ? 30 : 5,
      width: Width - constants.screenPadding,
      // marginLeft: constants.screenPadding / 2,
      // marginRight: constants.screenPadding / 2,
      paddingHorizontal: 10,
      borderRadius: 15,
      alignSelf:"center"
    },
    innerContainer: {
      flexGrow: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 70,
    },
    centerImage: {
      position: 'absolute',
      left: Width * 0.5 - 45,
      top: -35,
    },
    icons: {
      justifyContent: 'center',
      alignItems: 'center',
      width: Width * 0.15,
    },
    empty: {height: 70, width: 70},
    text: {alignSelf: 'center'},
  });
export default styles;

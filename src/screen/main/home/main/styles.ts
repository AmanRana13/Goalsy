import {Width} from 'hook/DevicePixel';
import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import constants from 'theme/constants';

const styles = (color: colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: constants.screenPadding,
      backgroundColor: color.background,
    },
    center: {alignSelf: 'center'},
    iconsOuterContainer: {
      alignItems: 'center',
      position: 'relative',
      marginLeft: -20,
      width: Width,
    },
    iconContainer: {
      height: constants.progressIconSize * 3,
      width: constants.progressIconSize * 2.5,
      position: 'absolute',
      backgroundColor:"red"
    },
    common:{
      flexDirection: 'row',
      gap: -Width * 0.065,
      position: 'absolute',
    },
    first: {
      left: Width * 0.13 - constants.screenPadding,
    },
    second: {
      top: Width * 0.25,
      left: Width * 0.02 - constants.screenPadding,
      gap: -Width * 0.055,
    },
    third: {
      left: Width * 0.13 - constants.screenPadding,
      top: Width * 0.5,
    },
  });
export default styles;

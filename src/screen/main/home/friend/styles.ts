import {Width} from 'hook/DevicePixel';
import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import constants from 'theme/constants';

const styles = (color: colors) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: constants.screenPadding,
      flex: 1,
    },
    center: {alignSelf: 'center'},
    iconContainer: {
      flex: 1,
      position: 'relative',
      marginLeft: -5,
    },
    first: {
      flexDirection: 'row',
      position: 'absolute',
      left: Width * 0.15,
      gap: -10,
    },
    second: {
      flexDirection: 'row',
      position: 'absolute',
      top: Width * 0.259,
      gap: -10,
    },
    third: {
      flexDirection: 'row',
      position: 'absolute',
      left: Width * 0.15,
      top: Width * 0.52,
      gap: -10,
    },
  });
export default styles;

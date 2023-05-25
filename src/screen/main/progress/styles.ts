import {Width} from 'hook/DevicePixel';
import {colors} from 'theme/colors';
import constants from 'theme/constants';
import {StyleSheet} from 'react-native';

const styles = (color: colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: constants.screenPadding,
      backgroundColor: color.background,
    },
    quote: {
      backgroundColor: color.white,
      paddingVertical: 33,
      borderRadius: 16,
      width: '80%',
      alignSelf: 'center',
      alignItems: 'center',
    },
  });
export default styles;

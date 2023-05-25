import {Width} from 'hook/DevicePixel';
import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import constants from 'theme/constants';
import { fonts } from 'theme/fonts';

const styles = (color: colors, sizes: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: constants.screenPadding,
      backgroundColor: color.background,
    },
    buttonStyle: {alignSelf: 'center'},
  });
export default styles;

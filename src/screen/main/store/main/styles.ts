import {Width} from 'hook/DevicePixel';
import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import constants from 'theme/constants';
import { width } from 'utils/globalFunctions';

const styles = (color: colors, sizes: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: constants.screenPadding,
      backgroundColor: color.background,
    },
    postImage: {
      borderRadius: 14,
      width: width-40 ,
      height: (width-40) / 1.58,
    },
  });
export default styles;

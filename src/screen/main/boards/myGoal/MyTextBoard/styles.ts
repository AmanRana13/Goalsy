import {Width} from 'hook/DevicePixel';
import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import constants from 'theme/constants';

const styles = (color: colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.background,
      paddingHorizontal:constants.screenPadding
    },
    buttonStyle:{
      alignSelf:"center",
      marginVertical:20
    }
  });
export default styles;

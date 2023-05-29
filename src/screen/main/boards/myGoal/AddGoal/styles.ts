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
    buttonStyle:{
      alignSelf:"center",
       width:Width*0.45
    }
  });
export default styles;

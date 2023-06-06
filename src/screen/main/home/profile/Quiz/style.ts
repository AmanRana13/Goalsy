import {Width} from 'hook/DevicePixel';
import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import constants from 'theme/constants';

const styles = (color: colors) =>StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.background,
      paddingHorizontal: constants.screenPadding,
    },
    options: {
      borderRadius: 10,
      backgroundColor: color.darkGray,
      padding: 20,
      flexDirection: 'row',
      gap: 20,
      marginBottom:20,
      alignItems:'center'
    },
  });
export default styles;

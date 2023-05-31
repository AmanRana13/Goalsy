import {Width} from 'hook/DevicePixel';
import {StyleSheet} from 'react-native';
import { colors } from 'theme/colors';
const styles = (color: colors) =>
  StyleSheet.create({
    listItem: {
      paddingHorizontal: 10,
      paddingTop: 5,
      margin: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    // Dropdown
    text: {paddingHorizontal: 5},
    container: {
      borderRadius: 15,
      backgroundColor: color.commonWhite,
      marginTop: 10,
    },
    innerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
  });
export default styles;

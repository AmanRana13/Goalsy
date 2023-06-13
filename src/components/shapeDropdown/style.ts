import {Width} from 'hook/DevicePixel';
import {StyleSheet} from 'react-native';
const styles = (color: colors) =>
  StyleSheet.create({
    listItem: {
      paddingHorizontal: 10,
      // paddingTop: 5,
      margin: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    // Dropdown
    container: {
      borderRadius: 15,
      backgroundColor: color.commonWhite,
      marginTop: 10,
      // flex: 1,
    },
    innerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 13,
    },
  });
export default styles;

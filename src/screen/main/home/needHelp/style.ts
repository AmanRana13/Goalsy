import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
const style = (color: colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.background,
      paddingHorizontal: 20,
    },
  });
export default style;

import { StyleSheet } from 'react-native';
import { colors } from 'theme/colors';


const style = (color: string) =>
  StyleSheet.create({
    container: {
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color,
    },
  });
export default style;

import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';

const style = (color: colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: color.white,
      paddingHorizontal: 15,
      marginVertical: 10,
      borderRadius: 15,
      gap: 10,
      paddingVertical: 15,
    },
    InnerHeader:{gap:10},
    time: {
      alignSelf: 'flex-end',
      marginTop:8
    },
    icons: {flex: 2, },
    icon: {
      alignSelf: 'flex-end',

    },
  });

export default style;

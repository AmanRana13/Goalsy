import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';

const style = (color: colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: color.darkGray,
      marginVertical: 10,
      borderRadius: 15,
      gap: 10,
      paddingVertical: 15,
      paddingHorizontal: 15,
    },
    header: {
      columnGap: 10,
      // flexDirection: 'row',
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

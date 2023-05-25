import {Width} from 'hook/DevicePixel';
import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
const styles = (color: colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D4F369',
    },
    innerContainer: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: Width * 0.1,
      marginTop: Width * 0.08,
    },
    image: {height: '100%', width: '100%'},
    text: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    group: {
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'center',
    },
    button: {
      flexDirection: 'row',
      paddingVertical: 10,
      backgroundColor: '#000',
      borderRadius: 50,
      width: Width * 0.7,
      height: Width * 0.18,
      alignItems: 'center',
    },
    innerButtonContainer: {
      justifyContent: 'center',
      paddingLeft: Width * 0.08,
      paddingRight: Width * 0.08,
    },
    buttonImage: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 50,
      width: Width * 0.145,
      aspectRatio: 1,
    },
  });
export default styles;

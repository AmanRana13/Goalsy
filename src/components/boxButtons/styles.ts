import {Width} from 'hook/DevicePixel';
import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import constants from 'theme/constants';

const styles = (color: colors) => {

  return StyleSheet.create({
    buttonContainer: {
      gap: 10,
      flexDirection: 'row',
      paddingHorizontal: 20,
      justifyContent: 'space-around',
    },
    innerButton: {
      // borderColor: color.black,
      borderWidth: 2,
      height: Width * 0.12,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomButton: {
      marginVertical:50,
      alignSelf: 'center',
    },
    container: {
      flex: 1,
    },
  });
};
export default styles;

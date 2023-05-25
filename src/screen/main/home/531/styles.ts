import {Width} from 'hook/DevicePixel';
import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import constants from 'theme/constants';

const styles = (color: colors) => {
  const width = (Width - constants.screenPadding - 40 * 2) / 4;

  return StyleSheet.create({
    buttonContainer: {
      gap: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    innerButton: {
      borderColor: color.black,
      borderWidth: 2,
      width: width,
      height: Width * 0.12,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomButton: {
      alignSelf: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: color.background,
      paddingHorizontal: constants.screenPadding,
    },
  });
};
export default styles;

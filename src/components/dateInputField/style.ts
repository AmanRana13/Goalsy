import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import { fonts } from 'theme/fonts';

const styles = (colors: colors) =>
  StyleSheet.create({
    container: {
      paddingVertical: 8,
      zIndex: 1,
    },
    labelStyle: {
      paddingVertical: 10,
    },
    innerContainer: {
      paddingHorizontal: 10,
      borderRadius: 16,
      flexDirection: 'row',
      width: '100%',
      backgroundColor: colors.commonWhite,
    },
    LeftCompo: {
      flex: 1,
      padding: 5,
      justifyContent: 'center',
    },
    RightCompo: {
      minWidth: 30,
      maxWidth: 40,
      flex: 1,
      height: '100%',
      padding: 5,
      justifyContent: 'center',
    },
    input: {
      flex: 8,
      paddingHorizontal: 6,
      paddingTop:20,
      height: '100%',
      color: colors.commonBlack,
      fontFamily:fonts.medium
    },
    label: {
      paddingVertical: 8,
      // fontFamily: "Inter",
    },
  });
export default styles;

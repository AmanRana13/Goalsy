import {StyleSheet, Text, View} from 'react-native';
import {colors} from 'theme/colors';
import constants from 'theme/constants';
import { fonts } from 'theme/fonts';
const styles = (color: colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: constants.screenPadding,
      backgroundColor: color.background,
    },
    innerContainer: {flex: 1},
    logo: {alignSelf: 'center', marginBottom: 30},
    FGPass: {fontWeight: '600', paddingVertical: 5, alignSelf: 'flex-end'},
    checkBoxContainer: {flexDirection: 'row'},
    checkBoxText: {
      fontSize: 16,
      color: color.fadedTextColor,
      flex: 1,
      flexWrap: 'wrap',
      paddingLeft: 10,
      lineHeight: 23,
      fontFamily:fonts.medium
    },
    TC: {fontWeight: '500'},
    buttonStyle: {alignSelf: 'center'},
    notRegisContainer: {
      flex: 1,
      flexDirection: 'column-reverse',
      marginBottom: 10,
      justifyContent: 'flex-start',
      fontFamily:fonts.medium,

    },
    notRegisText: {
      fontSize: 20,
      fontFamily:fonts.medium,
      color: color.fadedTextColor,
      alignSelf: 'center',
    },
  });
export default styles;

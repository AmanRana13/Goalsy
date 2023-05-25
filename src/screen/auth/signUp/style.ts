import { StyleSheet } from 'react-native';
import { colors } from 'theme/colors';
import constants from 'theme/constants';
import { fonts } from 'theme/fonts';
const styles = (color: colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: constants.screenPadding,
    },
    innerContainer: {
      flex: 1,
    },
    logo: { alignSelf: 'center', marginBottom: 30},
    FGPass: { fontWeight: '600', paddingVertical: 5, alignSelf: 'flex-end' },
    checkBoxContainer: { flexDirection: 'row' },
    checkBoxText: {
      fontSize: 16,
      color: color.fadedTextColor,
      flex: 1,
      flexWrap: 'wrap',
      paddingLeft: 10,
      lineHeight: 23,
      fontFamily: fonts.medium,
    },
    TC: { fontWeight: '500' },
    buttonStyle: { alignSelf: 'center' },
  });
export default styles;

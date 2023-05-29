import {Width} from 'hook/DevicePixel';
import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import constants from 'theme/constants';
import {fonts} from 'theme/fonts';
const styles = (color: colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: constants.screenPadding,
      backgroundColor: color.background,
    },
    innerContainer: {
      flex: 1,
    },
    logo: {
      alignSelf: 'center',
      marginBottom: 30,
      borderRadius: 70,
      borderColor: color.themeColor,
      borderWidth: 4,
    },
    FGPass: {fontWeight: '600', paddingVertical: 5, alignSelf: 'flex-end'},
    checkBoxContainer: {flexDirection: 'row'},
    checkBoxText: {
      fontSize: 16,
      color: color.fadedTextColor,
      flex: 1,
      flexWrap: 'wrap',
      paddingLeft: 10,
      lineHeight: 23,
      fontFamily: fonts.medium,
    },
    TC: {fontWeight: '500'},
    buttonStyle: {alignSelf: 'center'},
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    exc: {alignSelf: 'center', marginTop: -15},
    toolTip: {
      height: Width * 0.47,
      width: Width * 0.8,
      marginTop: 10,
    },
    text: {
      marginTop: 50,
      paddingHorizontal: 30,
    },
  });
export default styles;

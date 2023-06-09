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
      borderRadius: 100,
      borderColor: color.themeColor,
      borderWidth: 4
    },
    image: {
      borderRadius: 100,
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
      height: Width * 0.42,
      width: Width * 0.75,
      marginTop: 10,
      position:'relative',
    },
    text: {
      position:'absolute',
      top:38,
      left:10,
      paddingHorizontal:20
    },
  });
export default styles;

import {Width} from 'hook/DevicePixel';
import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import constants from 'theme/constants';
import {fonts} from 'theme/fonts';
const styles = (color: colors, sizes: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: constants.screenPadding,
      backgroundColor: color.background,
    },
    logo: {
      alignSelf: 'center',
      borderRadius: 70,
      borderColor: color.themeColor,
      borderWidth: 4,
    },
    postImage: {
      borderRadius: 14,
      borderWidth: 2,
      borderColor: color.themeColor,
      width: sizes,
      height: sizes / 2,
    },
    postText: {
      fontFamily: fonts.regular, 
      marginTop: 8
    },
    likeCommentContainer: {
      flexDirection: 'row', 
      marginTop: 12, 
      marginBottom: 18,
    },
    postFooter: {
      borderBottomWidth: 1,
      borderBottomColor: color.dividerColor,
      marginBottom: 20,
    },
    postFooterWithoutBorder: {
      marginBottom: 10,
    },
  });
export default styles;

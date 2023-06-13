import { StyleSheet } from 'react-native';
import { colors } from 'theme/colors';
import constants from 'theme/constants';

const styles = (Color: colors) =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
    },
    container: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Color.modalBackground,
      paddingHorizontal: constants.modalOuterPadding,
    },
    innerContainer: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      width: '100%',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Color.darkGray,
      paddingHorizontal: constants.modalHorizontalPadding,
    },
    textContainer: {
      margin: 10,
      paddingVertical: 20,
    },
    inputContainer: {
      width: '100%',
      marginVertical: 6,
    },
    text: {
      textAlign: 'center',
    },
    buttonContainer: {
      gap: 30,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    button: {
      margin: 10,
      backgroundColor: 'white',
    },
  });

export default styles;

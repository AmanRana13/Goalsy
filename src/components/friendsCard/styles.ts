import { StyleSheet } from 'react-native';
import { colors } from 'theme/colors';

const style = (color: colors) => StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: color.white,
        paddingLeft: 10,
        marginVertical: 10,
        borderRadius: 15
    },
    icons: {
        marginRight: 20,
        alignSelf: 'center',
        borderColor: '#CCFF00',
        borderWidth: 2,
        borderRadius: 50,
    },
    text: { alignSelf: 'center', flex: 6 },
    button:{
        flex: 3,
        justifyContent: 'space-evenly',
      }

});

export default style;
